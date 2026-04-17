import CategoryDropdown from '@/lib/CategoryDropdown';
import React from 'react';

const TimelinePage = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-2.5 my-10'>
            <h2 className='text-2xl font-bold'>Timeline</h2>

            <CategoryDropdown />
        </div>
    );
};

export default TimelinePage;