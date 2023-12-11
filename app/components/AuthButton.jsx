"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const session = useSession();
  const status = session.status;

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
