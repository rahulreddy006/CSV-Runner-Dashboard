import Papa from "papaparse";

const REQUIRED_HEADERS = ["date", "person", "miles"];

export const parseCSV = (file, onSuccess, onError) => {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      const headers = results.meta.fields || [];

      const validHeaders = REQUIRED_HEADERS.every(h =>
        headers.includes(h)
      );

      if (!validHeaders) {
        onError("CSV must contain date, person, and miles columns.");
        return;
      }

      try {
        const parsedData = results.data.map((row, index) => {
          if (!row.date || !row.person || isNaN(row.miles)) {
            throw new Error(`Invalid data at row ${index + 2}`);
          }

          return {
            date: row.date,
            person: row.person,
            miles: Number(row.miles),
          };
        });

        onSuccess(parsedData);
      } catch (err) {
        onError(err.message);
      }
    },
    error: () => onError("Failed to parse CSV file."),
  });
};
