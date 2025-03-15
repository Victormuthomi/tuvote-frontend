import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalVoters: 0,
    totalCandidates: 0,
    totalVotes: 0,
    elections: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://tuvote-backend-production.up.railway.app/api/stats",
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        setStats({
          totalVoters: result.totalVoters || 0,
          totalCandidates: result.totalCandidates || 0,
          totalVotes: result.totalVotes || 0,
          elections: result.elections || [],
        });
        setLastUpdated(new Date().toLocaleString());
      } catch (err) {
        setError("Error loading data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <section className="flex-grow py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center">Tuvote Dashboard</h2>

          {/* Links to Other Pages */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              to="/vote"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              🗳️ Vote Now
            </Link>
            <Link
              to="/candidates"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              👤 View Candidates
            </Link>
            <Link
              to="/elections"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              📜 View Elections
            </Link>
          </div>

          {/* Loading & Error Handling */}
          {loading ? (
            <p className="text-center mt-6 text-blue-600 font-semibold">
              Loading data...
            </p>
          ) : error ? (
            <p className="text-center mt-6 text-red-500">{error}</p>
          ) : (
            <>
              {/* Stats Section */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Total Voters",
                    value: stats.totalVoters,
                    color: "text-blue-600",
                  },
                  {
                    title: "Total Candidates",
                    value: stats.totalCandidates,
                    color: "text-green-600",
                  },
                  {
                    title: "Total Votes",
                    value: stats.totalVotes,
                    color: "text-red-600",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 + index * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className={`${item.color} text-4xl font-extrabold`}>
                      {item.value.toLocaleString()}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Elections List */}
              <div className="mt-12">
                <h3 className="text-3xl font-bold text-center mb-4">
                  🗳️ Ongoing Elections
                </h3>
                {stats.elections.length === 0 ? (
                  <p className="text-center text-gray-500">
                    No active elections at the moment.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.elections.map((election) => (
                      <motion.div
                        key={election._id}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h4 className="text-xl font-semibold">
                          {election.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {election.description}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          Starts:{" "}
                          {new Date(election.startDate).toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Ends: {new Date(election.endDate).toLocaleString()}
                        </p>
                        <Link
                          to={`/elections/${election._id}`}
                          className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                          View Details
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Last Updated Time */}
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-8">
                Last updated: {lastUpdated}
              </p>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© {new Date().getFullYear()} Tuvote. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
