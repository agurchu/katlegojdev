import { useEffect, useState } from "react";

const useGoogleSheet = (tab) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL =
    "https://script.google.com/macros/s/AKfycbzjqxzuYbXbZFojjt8_puThMCF_vzQJiFMYjdfhWdgVP2wZGZkXuUL5CkljBKz-905i/exec";

  useEffect(() => {
    fetch(`${API_URL}?tab=${tab}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setData(result.data);
        } else {
          setError(result.error || "Unknown error");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [tab]);

  return { data, loading, error };
};
export default useGoogleSheet;
