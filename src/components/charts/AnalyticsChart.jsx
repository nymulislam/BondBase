'use client'

import { friendContext } from "@/context/FriendContext";
import { useContext, useMemo } from "react";
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from "recharts";

const AnalyticsChart = () => {
    const { friendCheckIn } = useContext(friendContext);

    const chartData = useMemo(() => {
        const counts = { call: 0, text: 0, video: 0 };
        
        friendCheckIn.forEach(item => {
            if (counts[item.action] !== undefined) {
                counts[item.action]++;
            }
        });

        return [
            { name: 'Call', value: counts.call, color: '#10b981' },    // Emerald 500
            { name: 'Text', value: counts.text, color: '#3b82f6' },    // Blue 500
            { name: 'Video', value: counts.video, color: '#f59e0b' },  // Amber 500
        ];
    }, [friendCheckIn]);

    return (
        <div className="h-96 w-full shadow-xl rounded-3xl mt-8 bg-white p-5">
            <h4 className="font-semibold text-gray-500 mb-4">By Interaction Type</h4>
            
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            innerRadius="70%"
                            outerRadius="100%"
                            cornerRadius={8}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-4 mt-5 text-sm font-medium">
                {chartData.map((item) => (
                    <div key={item.name} className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnalyticsChart;