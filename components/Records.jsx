import { RecordsFHalf } from "./RecordsFHalf";
import { RecordSHalf } from "./RecordsSHalf";

export function Records() {
    return (
        <div className="bg-[#F3F4F6]">
            <div className="flex gap-6 w-[1200px] m-auto pb-8">
                <RecordsFHalf />
                <RecordSHalf />
            </div>
        </div>

    )
}