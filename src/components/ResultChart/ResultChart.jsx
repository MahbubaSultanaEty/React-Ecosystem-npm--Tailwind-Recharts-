import React from 'react';
import {  Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
        id: 1,
        name: "Rahim",
        Math: 78,
        English: 85,
        Science: 90
    },
    {
        id: 2,
        name: "Karim",
        Math: 65,
        English: 75,
        Science: 80
    },
    {
        id: 3,
        name: "Ayesha",
        Math: 92,
        English: 88,
        Science: 95
    },
    {
        id: 4,
        name: "Nusrat",
        Math: 70,
        English: 60,
        Science: 72
    },
    {
        id: 5,
        name: "Sakib",
        Math: 84,
        English: 77,
        Science: 81
    },
    {
        id: 6,
        name: "Mim",
        Math: 88,
        English: 92,
        Science: 85
    },
    {
        id: 7,
        name: "Hasan",
        Math: 59,
        English: 65,
        Science: 68
    },
    {
        id: 8,
        name: "Jannat",
        Math: 95,
        English: 90,
        Science: 98
    },
    {
        id: 9,
        name: "Tania",
        Math: 81,
        English: 79,
        Science: 85
    },
    {
        id: 10,
        name: "Rafi",
        Math: 69,
        English: 72,
        Science: 70
    }
];
const ResultChart = () => {
    return (
        <div>
            <LineChart width={900} height={500} data={resultData}>
                 <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey="Math" stroke="green"></Line>
                <Line dataKey="English" stroke="white"></Line>
                <Line dataKey="Science"></Line>
           </LineChart>
        </div>
    );
};

export default ResultChart;