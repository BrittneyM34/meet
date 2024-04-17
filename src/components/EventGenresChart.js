import { useState, useEffect } from 'react';
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Legend,
    Tooltip
} from 'recharts';

const genres = ['React', 'Javascript', 'Node', 'jQuery', 'Angular'];
const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);


    const getData = () => {
        const data = genres.map(genre => {
            const filteredEvents = events.filter(event => event.summary.includes(genre));
            return {
                name: genre,
                value: filteredEvents.length
            };
        })
        return data;
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
            <text
                x={x}
                y={y}
                fill="#8884d8"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    cx="50%" cy="50%"
                    outerRadius={140}
                />
                <Legend layout="horizontal" align="center" verticalAlign="bottom" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default EventGenresChart;