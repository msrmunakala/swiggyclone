"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUsername = localStorage.getItem("username");

    if (!token) {
      alert("❌ You must log in first.");
      router.push("/");
    } else {
      setUsername(storedUsername);
    }
  }, [router]);

  return (
    <div className="container py-5">
      <h2 className="mb-3">Welcome to Your Dashboard</h2>
      <p>Hello, <strong>{username}</strong> 👋</p>
      <button
        className="btn btn-danger mt-3"
        onClick={() => {
          localStorage.clear();
          router.push("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
