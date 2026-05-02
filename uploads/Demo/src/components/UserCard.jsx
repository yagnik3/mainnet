const UserCard = ({ user }) => {
    return (
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] text-center hover:scale-105 transition">
  
        <h2 className="text-xl font-bold mb-4">User Details</h2>
  
        <p className="text-gray-700">
          <b>Name:</b> {user.userName}
        </p>
  
        <p className="mt-2 text-gray-700">
          <b>Version:</b> {user.version}
        </p>
  
        <p className="mt-2 text-gray-700">
          <b>OS:</b> {user.os}
        </p>
  
        {/* ⭐ Score Highlight */}
        <p className="mt-4 text-2xl font-bold text-green-600">
          ⭐ {user.totalScore || 0}
        </p>
  
      </div>
    );
  };
  
  export default UserCard;