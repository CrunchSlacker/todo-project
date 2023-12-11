"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: status } = useSession();

  if (status === "authenticated") {
    return (
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
    );
  }
}
