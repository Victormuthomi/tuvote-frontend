import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DEFAULT_AVATAR = "/default-avatar.png"; // Default image for candidates

const CandidateDetails = () => {
  const { id } = useParams(); // Get candidate ID from URL
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/candidates/${id}`,
        );
        if (!response.ok) throw new Error("Candidate not found");

        const data = await response.json();
        setCandidate(data);
      } catch (err) {
        setError("Error fetching candidate details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidate();
  }, [id]);

  return (
    <section className="pt-24 pb-12 px-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
        {loading ? (
          <p className="text-gray-500">Loading candidate details...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : candidate ? (
          <>
            {/* Candidate Image */}
            <img
              src={candidate.avatar || DEFAULT_AVATAR}
              alt={candidate.name || "Candidate"}
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
              onError={(e) => (e.target.src = DEFAULT_AVATAR)}
            />

            {/* Candidate Name */}
            <h2 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">
              {candidate.name || "Unknown Candidate"}
            </h2>

            {/* Position (Seat) */}
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Running for:{" "}
              <span className="font-bold">
                {candidate.seat || "Unspecified Seat"}
              </span>
            </p>

            {/* Manifesto */}
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg px-6">
              {candidate.manifesto || "No manifesto available."}
            </p>

            {/* Election Details */}
            <p className="mt-6 text-gray-500">
              Election:{" "}
              <span className="font-bold">
                {candidate.election || "Unknown Election"}
              </span>
            </p>

            {/* Back Button */}
            <Link
              to="/candidates"
              className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              ⬅️ Back to Candidates
            </Link>
          </>
        ) : (
          <p className="text-gray-500">Candidate details not found.</p>
        )}
      </div>
    </section>
  );
};

export default CandidateDetails;
