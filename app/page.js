import { ButtonAsChild } from "@/components/ButtonDemo";
import { Header } from "@/components/Header";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-[100svh]">
      <Header />
      <div className="text-9xl">
        Home Page
      </div>
      <ButtonAsChild />
    </main>
  );
}
