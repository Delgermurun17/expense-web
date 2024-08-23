import { ChartPie } from "@/components/ChartPie";
import { Dashboard } from "@/components/Dashboard";
import { Header } from "@/components/Header";

export default function page(){
    return(
        <main>
            <Header />
            <Dashboard />
            {/* <ChartPie /> */}
        </main>
    )
}