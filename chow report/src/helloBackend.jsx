import React, { useState } from "react";
import axios from "axios";

export default function HelloBackend() {
  const [k, setK] = useState(5);
  const [logs, setLogs] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const runKmeans = async () => {
    setLoading(true);
    setError("");
    setLogs([]);
    setResult(null);

    try {
      const res = await axios.get(`/api/kmeans?k=${k}`);
      console.log("KMeans response:", res.data);

      const newLogs = res.data?.logs ?? [];
      const newResult = res.data?.result ?? null;

      setLogs(newLogs);
      setResult(newResult);

      if (!newLogs.length) {
        setError("Request worked, but logs array is empty. Check backend logs building.");
      }
      if (!newResult) {
        setError("Request worked, but result is missing. Check backend JSON keys.");
      }
    } catch (e) {
      console.error(e);
      setError(e?.message || "Request failed");
      setLogs([`Error: ${e?.message || e}`]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">K-Means Processing Viewer</h1>

      <div className="flex items-center gap-3 mb-4">
        <label className="flex items-center gap-2">
          <span>k:</span>
          <input
            className="w-24 px-2 py-1 rounded text-black"
            type="number"
            min={2}
            max={12}
            value={k}
            onChange={(e) => setK(Number(e.target.value))}
          />
        </label>

        <button
          className="px-4 py-2 rounded bg-sky-600 hover:bg-sky-500 disabled:opacity-50"
          onClick={runKmeans}
          disabled={loading}
        >
          {loading ? "Running..." : "Run K-Means"}
        </button>
      </div>

      {error && (
        <div className="mb-3 p-3 rounded bg-red-900/40 border border-red-700 text-red-200">
          {error}
        </div>
      )}

      <h2 className="font-semibold mb-2">Logs</h2>
      <div className="h-56 overflow-auto rounded border border-white/20 bg-black/40 p-3">
        {logs.length === 0 ? (
          <div className="text-white/70">No logs yet. Click “Run K-Means”.</div>
        ) : (
          <pre className="text-white text-sm whitespace-pre-wrap">
            {logs.join("\n")}
          </pre>
        )}
      </div>

            {result && (
        <div className="mt-6 space-y-4">
          {/* META */}
          {result.meta && (
            <>
              <h2 className="font-semibold">Processing info</h2>
              <pre className="rounded border border-white/20 bg-black/40 p-3 text-sm overflow-auto">
                {JSON.stringify(result.meta, null, 2)}
              </pre>
            </>
          )}

          {/* COUNTS */}
          <div>
            <h2 className="font-semibold mb-2">Cluster counts</h2>
            <pre className="rounded border border-white/20 bg-black/40 p-3 text-sm overflow-auto">
              {JSON.stringify(result.cluster_counts, null, 2)}
            </pre>
          </div>

          {/* CENTERS */}
          <div>
            <h2 className="font-semibold mb-2">Cluster centers</h2>
            <pre className="rounded border border-white/20 bg-black/40 p-3 text-sm overflow-auto">
              {JSON.stringify(result.cluster_centers, null, 2)}
            </pre>
          </div>

          {/* SAMPLE ROWS TABLE */}
          {Array.isArray(result.sample_rows) && result.sample_rows.length > 0 && (
            <div>
              <h2 className="font-semibold mb-2">Sample output (first rows)</h2>
              <div className="overflow-auto rounded border border-white/20">
                <table className="min-w-full text-sm">
                  <thead className="bg-black/50">
                    <tr>
                      <th className="text-left p-2">latitude</th>
                      <th className="text-left p-2">longitude</th>
                      <th className="text-left p-2">cluster</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.sample_rows.map((r, idx) => (
                      <tr key={idx} className="border-t border-white/10">
                        <td className="p-2">{r.latitude}</td>
                        <td className="p-2">{r.longitude}</td>
                        <td className="p-2">{r.cluster}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
