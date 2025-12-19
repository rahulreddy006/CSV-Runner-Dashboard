const CSVUpload = ({ onUpload }) => {
  return (
    <div className="bg-white border rounded-xl p-6 text-center">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => onUpload(e.target.files[0])}
        className="mx-auto"
      />
      <p className="text-sm text-slate-500 mt-3">
        Required columns: <b>date, person, miles</b>
      </p>
    </div>
  );
};

export default CSVUpload;
