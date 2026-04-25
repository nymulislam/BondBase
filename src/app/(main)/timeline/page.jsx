import CategoryDropdown from '@/components/ui/CategoryDropdown';
import TimelineData from './TimelineData';

const TimelinePage = () => {

    return (
        <div className='max-w-7xl mx-auto space-y-5 my-10'>
            <h2 className='text-2xl font-bold ml-2'>Timeline</h2>
            <CategoryDropdown />

            {/* Timeline Data */}
            <TimelineData />
        </div>
    );
};

export default TimelinePage;