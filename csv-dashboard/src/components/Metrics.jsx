const Metrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { label: "Average Miles", value: metrics.average },
        { label: "Minimum Miles", value: metrics.min },
        { label: "Maximum Miles", value: metrics.max },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-white border rounded-xl p-6"
        >
          <p className="text-sm text-slate-500">{item.label}</p>
          <p className="text-2xl font-semibold text-slate-800 mt-1">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
