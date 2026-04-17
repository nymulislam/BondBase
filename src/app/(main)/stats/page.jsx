import AnalyticsChart from '@/components/charts/AnalyticsChart';
import React from 'react';

const StatsPage = () => {
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <h2 className='text-3xl font-bold'>FriendShip Analytics</h2>

            <AnalyticsChart />
        </div>
    );
};

export default StatsPage;