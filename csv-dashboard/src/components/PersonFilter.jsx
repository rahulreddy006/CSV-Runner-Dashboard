const PersonFilter = ({ people, value, onChange }) => {
  return (
    <select
      className="bg-white border rounded-lg px-4 py-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="all">All Runners</option>
      {people.map((p) => (
        <option key={p} value={p}>
          {p}
        </option>
      ))}
    </select>
  );
};

export default PersonFilter;
