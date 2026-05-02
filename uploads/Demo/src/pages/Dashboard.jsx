import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  // 🔄 Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/user");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log("Error fetching users:", err);
    }
  };

  // 🚀 Initial load + Auto refresh
  useEffect(() => {
    fetchUsers();

    const interval = setInterval(() => {
      fetchUsers();
    }, 3000); // every 3 sec refresh

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "/";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Users List */}
      <div className="flex flex-wrap justify-center gap-6">
        {users.length > 0 ? (
          users.map((user, index) => (
            <UserCard key={index} user={user} />
          ))
        ) : (
          <p className="text-gray-500">No users found</p>
        )}
      </div>

    </div>
  );
};

export default Dashboard;