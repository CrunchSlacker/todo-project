"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  const handleSignin = () => {
    signIn();
  };

  const handleSignout = () => {
    signOut();
  };

  if (status === "authenticated") {
    return <button onClick={handleSignout}>Logout</button>;
  } else {
    return <button onClick={handleSignin}>Login</button>;
  }
}
