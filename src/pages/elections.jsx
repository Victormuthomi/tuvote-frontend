import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Elections = () => {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchElections = async () => {
      try {
        const response = await fetch(
          "https://tuvote-backend.onrender.com/api/elections",
        );
        if (!response.ok) throw new Error("Failed to fetch elections");

        const data = await response.json();
        setElections(data);
      } catch (err) {
        setError("Error fetching elections. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchElections();
  }, []);

  return (
    <section className="pt-24 pb-12 px-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          🗳️ Upcoming Elections
        </h2>
      </div>

      {/* Loading & Error Handling */}
      {loading ? (
        <p className="text-center text-gray-500">Loading elections...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : elections.length === 0 ? (
        <p className="text-center text-gray-500">No elections available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {elections.map((election) => (
            <div
              key={election._id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
            >
              {/* Election Name */}
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {election.name}
              </h3>

              {/* Election Description */}
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {election.description || "No description available."}
              </p>

              {/* Election Dates */}
              <p className="text-gray-500 mt-4">
                🗓️ <span className="font-bold">Start:</span>{" "}
                {new Date(election.startDate).toLocaleDateString()}
              </p>
              <p className="text-gray-500">
                ⏳ <span className="font-bold">End:</span>{" "}
                {new Date(election.endDate).toLocaleDateString()}
              </p>

              {/* Vote Now Button */}
              <Link
                to={`/elections/${election._id}/vote`} // Corrected Link
                className="mt-6 inline-block bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
              >
                🗳️ Vote Now
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Elections;
