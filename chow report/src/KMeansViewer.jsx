import React, { useState } from "react";
import axios from "axios";

const KMeansViewer = () => {
  const [k, setK] = useState(5);
  const [logs, setLogs] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runKMeans = async () => {
    setLoading(true);
    setLogs([]);
    setResult(null);

    try {
      // Uses Vite proxy (recommended). See vite.config.js below.
      const res = await axios.get(`/api/kmeans?k=${k}`);
      setLogs(res.data.logs || []);
      setResult(res.data.result || null);
    } catch (err) {
      setLogs([`Error: ${err?.message || "Unknown error"}`]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 font-sans">
      <h1 className="text-xl font-bold mb-3">K-Means Processing Viewer</h1>

      <div className="flex gap-3 items-center mb-4">
        <label className="flex items-center gap-2">
          k:
          <input
            className="border rounded px-2 py-1 w-20"
            type="number"
            min={2}
            max={20}
            value={k}
            onChange={(e) => setK(Number(e.target.value))}
          />
        </label>

        <button
          className="px-3 py-2 rounded bg-sky-500 text-white disabled:opacity-50"
          onClick={runKMeans}
          disabled={loading}
        >
          {loading ? "Running..." : "Run K-Means"}
        </button>
      </div>

      <h2 className="font-semibold mb-2">Logs</h2>
      <div className="h-48 overflow-auto border rounded p-3 bg-gray-50 whitespace-pre-wrap">
        {logs.length ? logs.join("\n") : "No logs yet. Click “Run K-Means”."}
      </div>

      {result && (
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Cluster counts</h2>
          <pre className="border rounded p-3 bg-gray-50 overflow-auto">
            {JSON.stringify(result.cluster_counts, null, 2)}
          </pre>

          <h2 className="font-semibold mt-4 mb-2">Cluster centers (lat/lon)</h2>
          <pre className="border rounded p-3 bg-gray-50 overflow-auto">
            {JSON.stringify(result.cluster_centers, null, 2)}
          </pre>

          <h2 className="font-semibold mt-4 mb-2">Sample output rows</h2>
          <div className="overflow-auto border rounded">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2">latitude</th>
                  <th className="text-left p-2">longitude</th>
                  <th className="text-left p-2">cluster</th>
                </tr>
              </thead>
              <tbody>
                {result.sample_rows.map((r, idx) => (
                  <tr key={idx} className="border-t">
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
  );
};

export default KMeansViewer;
