import React from 'react';
import { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksCharts = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);

    const marksData = marksDataRes.data;
    console.log(marksData)

     // data proccessing for the chart 
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            math: studentData.marks.Math,
            english: studentData.marks.English,
            sceince: studentData.marks.Science
        }
        const avg = (student.math + student.english + student.sceince) / 3;
        student.avg = avg;
        return student;
     })
    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill="blue"></Bar>
                <Bar dataKey="math" fill="yellow"></Bar>
            </BarChart>
        </div>
    );
};

export default MarksCharts;