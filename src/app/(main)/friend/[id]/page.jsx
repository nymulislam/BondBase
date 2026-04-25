import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineArchive } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import QuickCheckIn from "@/components/details/QuickCheckIn";
import Overview from "@/components/details/Overview";

const FriendDetails
    = async ({ params }) => {
        const { id } = await params;
        const res = await fetch('https://bondbase.vercel.app/data/friends.json');
        const data = await res.json();

        const friendInfo = data.find(friend => friend.id == id)

        const { name, picture, status, tags, bio, email, days_since_contact, goal, next_due_date } = friendInfo;

        return (
            <div className="max-w-6xl mx-auto my-10">

                <div className="flex items-start gap-5 flex-col lg:flex-row">
                    {/* Left Column */}
                    <div className="max-w-80 mx-auto w-full">
                        {/* Profile card */}
                        <div className="space-y-2.5 text-center p-5 shadow-md rounded-xl bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50">
                            <div className="flex justify-center rounded-full">
                                <Image
                                    src={picture}
                                    alt={`${name} Profile`}
                                    width={80}
                                    height={80}
                                    className="rounded-full mx-auto" /></div>
                            <h4 className="font-semibold">
                                {name}
                            </h4>

                            {/* Status */}
                            < p
                                className={`text-sm font-medium px-3 py-1 rounded-full my-5 w-fit mx-auto ${status === "Almost Due"
                                    ? "text-red-500 bg-red-100"
                                    : status === "Overdue" ? "text-yellow-600 bg-yellow-100" : "text-emerald-600 bg-emerald-100"
                                    }`}
                            >
                                {status}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                                        {tag}
                                    </span>))}
                            </div>

                            {/* Bio */}
                            <p className="text-gray-600 italic text-sm">&quot;{bio}&quot;</p>
                            <p className="text-gray-500 font-semibold">{email}</p>
                        </div>

                        <div className="flex flex-col gap-2.5 mt-5">
                            <button className="btn bg-emerald-600 text-white shadow-md transition-all duration-300 hover:bg-emerald-500 hover:scale-105 active:scale-95">
                                <RiNotificationSnoozeLine />Snooze 2 Weeks
                            </button>
                            <button className="btn bg-emerald-600 text-white shadow-md transition-all duration-300 hover:bg-emerald-500 hover:scale-105 active:scale-95">
                                <MdOutlineArchive />Archive
                            </button>
                            <button className="btn btn-error btn-soft hover:bg-red-100 hover:text-red-900 text-error shadow-md transition-all duration-300 hover:scale-105 active:scale-95">
                                <AiOutlineDelete />
                                Delete</button>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="space-y-5 flex-1 container mx-auto">
                        {/* Cards */}
                       <Overview days_since_contact={days_since_contact} goal={goal} next_due_date={next_due_date}/>

                        {/* Goal Card */}
                        <div className="p-6 shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50 space-y-5">
                            <div className="flex justify-between items-center">
                                <h4 className="text-lg font-semibold">Relationship Goal</h4>
                                <button className="btn btn-sm">Edit</button>
                            </div>
                            <p className="opacity-75">Connect every <strong>{goal} days</strong></p>
                        </div>

                        {/* Check-in Card */}
                        <div className="p-4 shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50">

                            <h4 className="font-medium mb-3">Quick Check-In</h4>
                            {/* Cards */}
                            <QuickCheckIn name={name} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default FriendDetails
    ;