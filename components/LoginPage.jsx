import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "./Logo";

export function LoginPage() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center w-[100svh]">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="font-semibold text-2xl text-slate-900">
              Welcome Back
            </div>
            <div className="font-normal text-base text-slate-700">
              Welcome back, Please enter your details
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button asChild variant="btn" size="btn">
              <Link href="/">Log in</Link>
            </Button>
          </div>
          <div className="flex text-base font-normal justify-center">
            <div className="text-slate-900 content-center">
              Don&apos;t have account?
            </div>
            <div className="text-blue-500 hover:text-blue-600 cursor-pointer p-[4px_12px]">
              <Link href={"/login/sign_up"}>Sign up</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] w-[100svh] h-[100svh]"></div>
    </div>
  );
}
