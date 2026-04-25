import AnalyticsChart from "@/components/charts/AnalyticsChart";


const StatsPage = () => {
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <h2 className='text-3xl font-bold ml-2'>FriendShip Analytics</h2>

            <AnalyticsChart />
        </div>
    );
};

export default StatsPage;