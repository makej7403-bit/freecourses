"use client";

import { useState } from "react";
import { auth, provider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";

export default function AuthPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to sign in, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>

      <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Signing in..." : "Sign in with Google"}
      </button>
    </main>
  );
}
