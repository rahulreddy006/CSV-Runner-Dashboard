import { useState } from "react";
import CSVUpload from "./components/CSVUpload";
import Metrics from "./components/Metrics";
import PersonFilter from "./components/PersonFilter";
import RunnerChart from "./components/RunnerChart";
import { parseCSV } from "./utils/csvParser";
import { calculateMetrics } from "./utils/metrics";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("all");

  const handleUpload = (file) => {
    if (!file) return;
    setError("");
    setData([]);

    parseCSV(
      file,
      (parsed) => setData(parsed),
      (err) => setError(err)
    );
  };

  const people = [...new Set(data.map(d => d.person))];

  const filteredData =
    selectedPerson === "all"
      ? data
      : data.filter(d => d.person === selectedPerson);

  const metrics = calculateMetrics(filteredData);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto p-6 space-y-6">

        <header>
          <h1 className="text-3xl font-semibold text-slate-800">
            CSV Runner Dashboard
          </h1>
          <p className="text-slate-500 mt-1">
            Upload a CSV file to analyze running data
          </p>
        </header>

        <CSVUpload onUpload={handleUpload} />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4">
            {error}
          </div>
        )}

        {data.length === 0 && !error && (
          <div className="bg-white border rounded-xl p-10 text-center text-slate-500">
            Upload a CSV file to see insights
          </div>
        )}

        {data.length > 0 && (
          <>
            <Metrics metrics={metrics} />

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-slate-800">
                Filter by Runner
              </h2>
              <PersonFilter
                people={people}
                value={selectedPerson}
                onChange={setSelectedPerson}
              />
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-lg font-medium text-slate-800 mb-4">
                Miles Run
              </h3>
              <RunnerChart data={filteredData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

