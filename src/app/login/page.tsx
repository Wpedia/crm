"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/shared/ui/button";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button onClick={() => signIn("github")}>Войти через GitHub</Button>
    </div>
  )
}
