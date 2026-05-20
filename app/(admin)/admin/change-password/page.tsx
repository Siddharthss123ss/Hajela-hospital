"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

export default function ChangePasswordPage() {
  const router = useRouter();

  const [oldPassword, setOldPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      const res = await fetch(
        "/api/admin/change-password",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            old_password:
              oldPassword,

            new_password:
              newPassword,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      router.push(
        "/admin/dashboard"
      );

    } catch (err: any) {
      setError(err.message);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-8 space-y-5"
      >

        <div>
          <h1 className="text-3xl font-bold text-white">
            Change Password
          </h1>

          <p className="text-zinc-500 text-sm mt-1">
            You must change the default password
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg">
            {error}
          </div>
        )}

        <input
          type="password"
          placeholder="Current Password"
          value={oldPassword}
          onChange={(e) =>
            setOldPassword(
              e.target.value
            )
          }
          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white outline-none"
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(
              e.target.value
            )
          }
          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white outline-none"
        />

        <button
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg p-3 font-medium"
        >
          {loading
            ? "Updating..."
            : "Update Password"}
        </button>

      </form>
    </div>
  );
}