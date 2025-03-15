import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DEFAULT_AVATAR = "/default-avatar.png"; // Default image for candidates

const Candidates = () => {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(
          "https://tuvote-backend-production.up.railway.app/api/candidates",
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch candidates: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();
        console.log("Fetched Candidates:", data); // ✅ Log API response

        // Ensure valid data is available
        if (!Array.isArray(data) || data.length === 0) {
          setError("No candidates available.");
          setLoading(false);
          return;
        }

        // Group candidates by election -> seat
        const groupedElections = data.reduce((acc, candidate) => {
          if (!candidate.election || !candidate.seat) {
            console.warn(
              "Skipping candidate with missing election/seat:",
              candidate,
            );
            return acc;
          }

          const electionName = candidate.election.name;
          const seatName = candidate.seat.name;

          if (!acc[electionName]) acc[electionName] = {}; // Create election group if missing
          if (!acc[electionName][seatName]) acc[electionName][seatName] = []; // Create seat group

          acc[electionName][seatName].push(candidate);
          return acc;
        }, {});

        console.log("Grouped Elections:", groupedElections); // ✅ Log grouped data
        setElections(groupedElections);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <section className="pt-24 pb-12 px-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Page Header */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          🗳️ Meet the Candidates
        </h2>
      </div>

      {/* Loading & Error Handling */}
      {loading ? (
        <div className="text-center text-gray-500">Loading candidates...</div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : Object.keys(elections).length === 0 ? (
        <p className="text-center text-gray-500">No candidates available.</p>
      ) : (
        <div className="space-y-10">
          {Object.entries(elections).map(([electionName, seats]) => (
            <div
              key={electionName}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              {/* Election Title */}
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 text-center mb-6">
                🏆 {electionName}
              </h3>

              {/* Seats inside this Election */}
              {Object.entries(seats).map(([seatName, candidates]) => (
                <div key={seatName} className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    🎖️ {seatName}
                  </h4>

                  {/* Candidates Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {candidates.map((candidate) => (
                      <div
                        key={candidate._id}
                        className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
                      >
                        {/* Candidate Image */}
                        <img
                          src={candidate.picture || DEFAULT_AVATAR}
                          alt={candidate.name || "Candidate"}
                          className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                          onError={(e) => (e.target.src = DEFAULT_AVATAR)}
                        />

                        {/* Candidate Name */}
                        <h4 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
                          {candidate.name || "Unknown Candidate"}
                        </h4>

                        {/* Seat Name */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          {seatName}
                        </p>

                        {/* View Details Button */}
                        <Link
                          to={`/candidates/${candidate._id}`}
                          className="mt-4 inline-block bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
                        >
                          View Details
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Candidates;
