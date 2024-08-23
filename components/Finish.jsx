import Image from "next/image";
import { Logo } from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";

export function Finish(){
    return(
        <div className="flex flex-col gap-[141px]">
            <div className="flex flex-col gap-12 items-center pt-10">
                <Logo />
                <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-1">
                        <div className="size-6 rounded-xl bg-[#0166FF] text-white text-sm font-normal"><div className="relative top-[2px] left-[8.5px]">1</div></div>
                        <div className="font-normal text-sm text-center text-slate-900">Currency</div>
                    </div>
                    <div className="w-4"></div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="size-6 rounded-xl bg-[#0166FF] text-white text-sm font-normal"><div className="relative top-[2px] left-[8px]">2</div></div>
                        <div className="font-normal text-sm text-center text-slate-900">Balance</div>
                    </div>
                    <div className="w-4"></div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="size-6 rounded-xl bg-[#0166FF] text-white text-sm font-normal"><div className="relative top-[2px] left-[8px]">3</div></div>
                        <div className="font-normal text-sm text-center text-slate-900">Finish</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-3">
                        <div className="flex flex-col items-center gap-4">
                            <div><Image src={"/finish.svg"} width={48} height={48}/></div>
                            <div className="font-semibold text-2xl text-slate-900">Good Job!</div>
                        </div>
                    <div className="font-normal text-base text-slate-600 w-96 mx-auto text-center">Your very first account has been created. Now continue to dashboard and start tracking</div>
                </div>
                <div>                
                    <Button asChild variant="btn" size="btn"><Link href={"/"}>Finish</Link></Button>
                </div>
            </div>

        </div>
    )
}