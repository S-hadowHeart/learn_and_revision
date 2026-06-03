import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export function Dashbord() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${API_URL}/home`,
        {},
        {
          withCredentials: true,
        },
      );

      setIsError(false);
      console.log(res);
      setMessage(res?.data?.msg || res?.msg || "Welcome user ");
    } catch (error) {
      setIsError(true);
      setMessage(error?.response?.data?.error || "Something is wrong...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-4">
        <h1
          className={`text-center ${isError ? "text-red-500" : "text-green-500"}`}
        >
          {loading ? "Loading ..." : message}
        </h1>
        <button
          onClick={fetchData}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Refresh
        </button>
      </section>
    </main>
  );
}
