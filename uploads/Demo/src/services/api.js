const BASE_URL = "http://localhost:5000/api";

export const getUser = async () => {
  const res = await fetch(`${BASE_URL}/user`);
  return res.json();
};

export const updateUser = async (data) => {
  const res = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

// 🔐 ADD THIS LOGIN FUNCTION
export const loginAdmin = async (email, password) => {
  const res = await fetch(`${BASE_URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
};