import FriendCard from "@/components/cards/FriendCard";
import SummaryCard from "@/components/cards/SummaryCard";

const HomePage = () => {
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
        <FriendCard />
      </div>

    </div>
  );
};

export default HomePage;