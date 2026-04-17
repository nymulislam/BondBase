import FriendCard from "@/components/cards/FriendCard";
import SummaryCard from "@/components/cards/SummaryCard";

const HomePage = async () => {

    const res = await fetch('https://bondbase.vercel.app/data/friends.json');
    const friendsData = await res.json();

    return (
        <div className="my-10">

            <SummaryCard />

            {/* Divider */}
            <div className="divider max-w-5xl mx-auto my-10"></div>

            {/* Section title */}
            <div className="max-w-5xl mx-auto">
                <h4 className="text-xl font-semibold transition hover:text-emerald-600">
                    Your Friends
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        friendsData.map(friend => <FriendCard key={friend.id} friend={friend} />)
                    }
                </div>

            </div>

        </div>
    );
};

export default HomePage;