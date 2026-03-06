"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { authClient } from "@/app/_lib/auth-client";
import { LoginForm } from "@/components/login-form";

export default function AuthPage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return null;
  if (session) redirect("/");


  return (
    <div className="relative flex min-h-svh flex-col bg-black">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/login-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 flex justify-center pt-12">
        <Image src="/fit-ai-logo.svg" alt="FIT.AI" width={85} height={38} />
      </div>

      <div className="flex-1" />
      <div className="flex min-h-svh w-full z-0 items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
