import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';


export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        tooltip: {
            enabled: true,
            position: 'nearest',
        }
    },
    scales: {
        x: {
            display: true,
        },
        y: {
            display: true,
            beginAtZero: true
        },

    },
};

const labels = ['2019', '2020', '2021'];
export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Dataset 2',
            data: [577000, 500000, 627000],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.1)',
            tension: 0,
        },
    ],
};

export function Watercanvas() {
    return <section>
        <div className='container'>
            <p className=' line-canvas-para'>
                Doughnut Chart
            </p>
            <div>
                <Line options={options} data={data} className='line-canvas' />
            </div>
        </div>
    </section>
}