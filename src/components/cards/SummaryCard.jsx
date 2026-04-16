import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const SummaryCard = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="text-center space-y-2.5">
                <h1 className="text-4xl font-bold transition duration-300">
                    Friends to keep close in your life
                </h1>

                <p className="max-w-md mx-auto text-gray-500">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                <button className="btn bg-emerald-600 text-white shadow-md transition-all duration-300 hover:bg-emerald-500 hover:scale-105 active:scale-95">
                    <FaPlus className="mr-1" />
                    Add a Friend
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mt-10">

                {/* Card 1 */}
                <div className="p-8 text-center shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50">
                    <h4 className="text-lg font-semibold">10</h4>
                    <p className="opacity-75">Total Friends</p>
                </div>

                {/* Card 2 */}
                <div className="px-10 py-5 text-center shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50">
                    <h4 className="text-lg font-semibold">3</h4>
                    <p className="opacity-75">On Track</p>
                </div>

                {/* Card 3 */}
                <div className="px-10 py-5 text-center shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50">
                    <h4 className="text-lg font-semibold">6</h4>
                    <p className="opacity-75">Need Attention</p>
                </div>

                {/* Card 4 */}
                <div className="px-10 py-5 text-center shadow-md rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-emerald-50">
                    <h4 className="text-lg font-semibold">12</h4>
                    <p className="opacity-75">Interactions This Month</p>
                </div>

            </div>
        </div>
    );
};

export default SummaryCard;