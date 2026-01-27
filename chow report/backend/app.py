from flask import Flask, jsonify, request
from pathlib import Path
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)

BASE_DIR = Path(__file__).resolve().parent
CSV_PATH = BASE_DIR / "data" / "simulated_location_data.csv"

@app.get("/")
def home():
    return "Backend is running"

def run_kmeans(k: int):
    logs = []
    logs.append(f"Reading CSV: {CSV_PATH}")
    df = pd.read_csv(CSV_PATH)
    logs.append(f"Loaded rows={len(df)} cols={len(df.columns)}")

    features = ["latitude", "longitude"]
    logs.append(f"Selecting features: {', '.join(features)}")
    X = df[features].to_numpy()

    logs.append("Scaling features (StandardScaler)")
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    logs.append(f"Running KMeans with k={k}")
    km = KMeans(n_clusters=k, random_state=42, n_init="auto")
    df["cluster"] = km.fit_predict(X_scaled)

    counts = df["cluster"].value_counts().sort_index()
    centers = scaler.inverse_transform(km.cluster_centers_)  # back to lat/lon

    meta = {
        "k": int(k),
        "rows": int(len(df)),
        "features": features,
        "inertia": float(km.inertia_),
        "n_iter": int(km.n_iter_),
    }

    logs.append("Done. Returning results.")
    return df, counts, centers, meta, logs

@app.get("/api/kmeans")
def api_kmeans():
    k = int(request.args.get("k", 5))
    df, counts, centers, meta, logs = run_kmeans(k)

    result = {
        "meta": meta,
        "cluster_counts": counts.to_dict(),
        "cluster_centers": [
            {"cluster": int(i), "latitude": float(c[0]), "longitude": float(c[1])}
            for i, c in enumerate(centers)
        ],
        "sample_rows": df[["latitude", "longitude", "cluster"]].head(20).to_dict(orient="records"),
    }
    return jsonify({"logs": logs, "result": result})

# --- POWER BI ENDPOINTS (flat "tables") ---

@app.get("/api/cluster_summary")
def api_cluster_summary():
    """
    Returns a FLAT LIST of rows (one row per cluster).
    Power BI loves this shape.
    """
    k = int(request.args.get("k", 5))
    _, counts, centers, meta, _ = run_kmeans(k)

    rows = []
    for i, c in enumerate(centers):
        rows.append({
            "k": meta["k"],
            "cluster": int(i),
            "count": int(counts.get(i, 0)),
            "center_latitude": float(c[0]),
            "center_longitude": float(c[1]),
            "inertia": meta["inertia"],
            "n_iter": meta["n_iter"],
        })
    return jsonify(rows)

@app.get("/api/clustered_points")
def api_clustered_points():
    """
    Returns a FLAT LIST of points with cluster assignment.
    Use limit to keep Power BI fast (example: ?k=5&limit=2000).
    """
    k = int(request.args.get("k", 5))
    limit = int(request.args.get("limit", 2000))

    df, _, _, meta, _ = run_kmeans(k)

    cols = ["point_id", "device_id", "timestamp_utc", "latitude", "longitude", "cluster"]
    if "point_id" not in df.columns:
        df["point_id"] = range(1, len(df) + 1)

    out = df[cols].head(limit).copy()
    out["k"] = meta["k"]
    return jsonify(out.to_dict(orient="records"))

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
