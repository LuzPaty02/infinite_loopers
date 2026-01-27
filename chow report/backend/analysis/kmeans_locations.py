from pathlib import Path
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

BASE_DIR = Path(__file__).resolve().parent.parent  # backend/
csv_path = BASE_DIR / "data" / "simulated_location_data.csv"

df = pd.read_csv(csv_path)

X = df[["latitude", "longitude"]].to_numpy()
X_scaled = StandardScaler().fit_transform(X)

km = KMeans(n_clusters=5, random_state=42, n_init="auto")
df["cluster"] = km.fit_predict(X_scaled)

result["meta"] = {
  "rows": int(len(df)),
  "features": ["latitude", "longitude"],
  "inertia": float(km.inertia_),
  "n_iter": int(km.n_iter_),
}


print(df[["latitude","longitude","cluster"]].head())
