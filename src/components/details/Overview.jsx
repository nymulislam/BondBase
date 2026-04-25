import { formatDate } from "@/lib/utils";

const Overview = ({days_since_contact, goal, next_due_date}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">

            {/* Card 1 */}
            <div className="p-8 text-center shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50">
                <h4 className="text-2xl font-bold">{days_since_contact}</h4>
                <p className="opacity-75">Days Since Contact</p>
            </div>

            {/* Card 2 */}
            <div className="p-8 text-center shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50">
                <h4 className="text-2xl font-bold">{goal}</h4>
                <p className="opacity-75">Goal (Days)</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 text-center shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50">
                <h4 className="text-2xl font-bold">{formatDate(next_due_date)}</h4>
                <p className="opacity-75">Next Due</p>
            </div>

        </div>
    );
};

export default Overview;