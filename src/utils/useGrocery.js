import { useEffect, useState } from "react";

const useGrocery = () => {
  const [grocInfo, setGrocInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroc = async () => {
      try {
        const response = await fetch("https://fakestoreapi.in/api/products");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const json = await response.json();
        setGrocInfo(json.products); // Accessing the 'products' array
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGroc();
  }, []);

  return { grocInfo, isLoading, error };
};

export default useGrocery;
