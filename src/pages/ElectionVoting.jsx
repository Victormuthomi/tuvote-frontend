import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // To access token from Redux

const ElectionVoting = () => {
  const [elections, setElections] = useState({});
  const [votes, setVotes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Get user token from Redux (for authentication)
  const token = useSelector((state) => state.auth.user?.token);

  // Fetch candidates from the backend
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(
          "https://tuvote-backend-production.up.railway.app/api/candidates",
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch candidates: ${response.statusText}`);
        }
        const data = await response.json();

        // Group candidates by election -> seat
        const groupedElections = data.reduce((acc, candidate) => {
          if (!candidate.election || !candidate.seat) return acc;

          const electionName = candidate.election.name;
          const seatName = candidate.seat;

          if (!acc[electionName]) acc[electionName] = {};
          if (!acc[electionName][seatName]) acc[electionName][seatName] = [];

          acc[electionName][seatName].push(candidate);
          return acc;
        }, {});

        setElections(groupedElections);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  // Handle checkbox selection
  const handleVote = (electionName, seatName, candidateId) => {
    setVotes((prevVotes) => {
      const newVotes = { ...prevVotes };
      if (!newVotes[electionName]) newVotes[electionName] = {};
      if (!newVotes[electionName][seatName])
        newVotes[electionName][seatName] = new Set();

      const seatVotes = newVotes[electionName][seatName];

      if (seatVotes.has(candidateId)) {
        seatVotes.delete(candidateId); // Remove vote if unchecked
      } else {
        seatVotes.add(candidateId); // Add vote if checked
      }

      return { ...newVotes };
    });
  };

  // Submit votes
  const submitVotes = async () => {
    if (!token) {
      setError("❌ Authentication error. Please log in.");
      return;
    }

    const votesToSubmit = [];

    Object.entries(votes).forEach(([electionName, seats]) => {
      Object.entries(seats).forEach(([seatName, candidateIds]) => {
        candidateIds.forEach((candidateId) => {
          votesToSubmit.push({
            election_name: electionName,
            seat_name: seatName,
            candidate_id: candidateId,
          });
        });
      });
    });

    if (votesToSubmit.length === 0) {
      setError("⚠️ Please select at least one candidate.");
      return;
    }

    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:5000/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ votes: votesToSubmit }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit votes: ${response.statusText}`);
      }

      setSuccess("✅ Your votes have been cast successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="pt-24 pb-12 px-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          🗳️ Cast Your Votes
        </h2>
      </div>

      {/* Handle loading, success, and error messages */}
      {loading && <p>Loading candidates...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      {Object.keys(elections).length > 0 ? (
        Object.entries(elections).map(([electionName, seats]) => (
          <div key={electionName} className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              {electionName}
            </h3>

            {Object.entries(seats).map(([seatName, candidates]) => (
              <div key={seatName} className="mb-8">
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  🎖️ {seatName}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {candidates.map((candidate) => (
                    <div
                      key={candidate._id}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
                    >
                      <h5 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {candidate.name}
                      </h5>

                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {candidate.manifesto || "No manifesto available."}
                      </p>

                      {/* Vote checkbox */}
                      <label className="mt-4 inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value={candidate._id}
                          checked={
                            votes[electionName]?.[seatName]?.has(
                              candidate._id,
                            ) || false
                          }
                          onChange={() =>
                            handleVote(electionName, seatName, candidate._id)
                          }
                          className="form-checkbox h-6 w-6 text-blue-500"
                        />
                        <span className="ml-2 text-gray-900 dark:text-white">
                          Vote
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No elections available.</p>
      )}

      {/* Submit Button */}
      {Object.keys(elections).length > 0 && (
        <div className="text-center mt-8">
          <button
            onClick={submitVotes}
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition"
          >
            Submit Votes
          </button>
        </div>
      )}
    </section>
  );
};

export default ElectionVoting;
