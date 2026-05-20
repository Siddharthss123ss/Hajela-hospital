"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState(
    "admin@hajelahospital.com"
  );

  const [password, setPassword] =
    useState("admin123");

  const [error, setError] = useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "/api/admin/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      if (data.must_change_password) {
        router.push(
          "/admin/change-password"
        );
      } else {
        router.push("/admin/dashboard");
      }

    } catch (err: any) {
      setError(err.message);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-8 space-y-5"
      >

        <div>
          <h1 className="text-3xl font-bold text-white">
            Admin Login
          </h1>

          <p className="text-zinc-500 text-sm mt-1">
            Secure access portal
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white outline-none"
        />

        <button
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg p-3 font-medium"
        >
          {loading
            ? "Authenticating..."
            : "Login"}
        </button>

      </form>
    </div>
  );
}