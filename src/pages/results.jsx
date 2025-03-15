import { useEffect, useState } from "react";

const Results = () => {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const generateRandomVotes = () => Math.floor(Math.random() * 10000);

  const candidates = [
    { name: "Barack Obama", seat: "President", election: "National Elections" },
    {
      name: "Nelson Mandela",
      seat: "President",
      election: "National Elections",
    },
    {
      name: "Joe Biden",
      seat: "Vice President",
      election: "National Elections",
    },
    { name: "AOC", seat: "Council Member", election: "Local Elections" },
    {
      name: "Kamala Harris",
      seat: "Chief Officer",
      election: "Local Elections",
    },
    {
      name: "Gavin Newsom",
      seat: "Chief Officer",
      election: "Local Elections",
    },
  ];

  useEffect(() => {
    const groupByElectionAndSeat = () => {
      const elections = {};

      candidates.forEach((candidate) => {
        candidate.votes = generateRandomVotes();

        if (!elections[candidate.election]) {
          elections[candidate.election] = {};
        }

        if (!elections[candidate.election][candidate.seat]) {
          elections[candidate.election][candidate.seat] = [];
        }

        elections[candidate.election][candidate.seat].push(candidate);
      });

      // Sort candidates by votes in descending order
      Object.keys(elections).forEach((election) => {
        Object.keys(elections[election]).forEach((seat) => {
          elections[election][seat].sort((a, b) => b.votes - a.votes);
        });
      });

      setElections(elections);
      setLoading(false);
    };

    groupByElectionAndSeat();
  }, []);

  return (
    <section className="pt-24 pb-12 px-6 bg-black dark:bg-white min-h-screen flex justify-center">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-white dark:text-black">
            🗳️ Election Results
          </h2>
        </div>

        {/* Loading and error handling */}
        {loading ? (
          <div className="text-center text-white dark:text-black">
            Loading results...
          </div>
        ) : error ? (
          <p className="text-center text-white dark:text-black">{error}</p>
        ) : Object.keys(elections).length === 0 ? (
          <p className="text-center text-white dark:text-black">
            No results available.
          </p>
        ) : (
          <div className="space-y-10">
            {Object.entries(elections).map(([electionName, seats]) => (
              <div
                key={electionName}
                className="bg-black dark:bg-white p-6 rounded-lg shadow-md border-2 border-blue-500"
              >
                <h3 className="text-2xl font-bold text-blue-500 text-center mb-6">
                  🏆 {electionName}
                </h3>

                {/* Seats inside this election */}
                {Object.entries(seats).map(([seatName, candidates]) => (
                  <div key={seatName} className="mb-8">
                    <h4 className="text-xl font-semibold text-white dark:text-black mb-4">
                      🎖️ {seatName}
                    </h4>

                    {/* Results Table */}
                    <table className="w-full mt-3 text-center border border-blue-500">
                      <thead>
                        <tr className="bg-black dark:bg-white">
                          <th className="py-2 px-4 text-left text-white dark:text-black">
                            #
                          </th>
                          <th className="py-2 px-4 text-left text-white dark:text-black">
                            Candidate
                          </th>
                          <th className="py-2 px-4 text-right text-white dark:text-black">
                            Votes
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {candidates.map((candidate, index) => (
                          <tr
                            key={candidate.name}
                            className={`border-b border-blue-500 ${
                              index === 0
                                ? "bg-blue-800 dark:bg-blue-500 text-white"
                                : "bg-white dark:bg-black text-black dark:text-white"
                            }`}
                          >
                            <td className="py-2 px-4">{index + 1}</td>
                            <td className="py-2 px-4">{candidate.name}</td>
                            <td className="py-2 px-4 text-right">
                              {candidate.votes}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
