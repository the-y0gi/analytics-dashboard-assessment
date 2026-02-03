import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export const useEVData = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    Papa.parse("/data/Electric_Vehicle_Population_Data.csv", {
      download: true,
      header: true,
      worker: false, 
      skipEmptyLines: true,
      complete: (results) => {
        console.log("Data loaded successfully:", results.data.length, "rows");
        setData(results.data);
        setLoading(false);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error.message);
        setLoading(false);
      }
    });
  }, []);

  return { data, loading };
};