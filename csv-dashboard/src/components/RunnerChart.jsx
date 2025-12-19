import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RunnerChart = ({ data }) => {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="person" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="miles" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RunnerChart;
