// import { Fragment, useEffect, useState, useRef } from "react";
// // import { Bar, Line } from "react-chartjs-2";
// import Chart from 'chart.js';

// var config_bc1 = {
//     type: 'Bar',
//     data: {
//         labels: ['2019', '2020', '2021'],
//         datasets: [{
//             label: 'Wynn North America',
//             backgroundColor: "#B2A99B",//"#eaeaea",
//             borderColor: "#B2A99B",//"#eaeaea",
//             barPercentage: 65,
//             categoryPercentage: 65,
//             // maxBarThickness: 20,
//             data: [
//                 177283,
//                 188123,
//                 206596
//             ]
//         }, {
//             label: 'Wynn Macau Limited',
//             backgroundColor: "#776457",//"#c6bcac",
//             borderColor: "#776457",//"#c6bcac",
//             // barPercentage: gBarPercentage,
//             // categoryPercentage: gCategoryPercentage,
//             // maxBarThickness: 20,
//             data: [
//                 270158,
//                 226387,
//                 235934
//             ]
//         }, {
//             label: 'Company Total',
//             //                backgroundColor: "#6A1A34",
//             //                borderColor: "#6A1A34",
//             backgroundColor: "#006f62",
//             borderColor: "#006f62",
//             // barPercentage: gBarPercentage,
//             // categoryPercentage: gCategoryPercentage,
//             // maxBarThickness: 20,
//             data: [
//                 447441,
//                 414510,
//                 442530
//             ]
//         }]

//     },
//     options: {
//         aspectRatio: 3,
//         // Elements options apply to all of the options unless overridden in a dataset
//         // In this case, we are setting the border of each horizontal bar to be 2px wide
//         elements: {
//             rectangle: {
//                 borderWidth: 0,
//             }
//         },
//         responsive: true,
//         legend: {
//             position: 'bottom',
//         },
//         title: {
//             display: false,
//             text: 'Energy Consumption'
//         },
//         tooltips: {
//             enabled: true,
//             mode: 'single',
//             callbacks: {
//                 label: function (tooltipItems, data) {
//                     return ' ' + tooltipItems.xLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//                 }
//             }
//         },
//         scales: {
//             xAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                     display: true,
//                 },
//                 gridLines: {
//                     display: true,

//                 }
//             }],
//             yAxes: [{
//                 gridLines: {
//                     display: true
//                 }
//             }]
//         }
//     }
// };







// const HorizontalOne = () => {
//     const chartRef = useRef(null);

//     useEffect(() => {
//         const myChartRef = chartRef.current.getContext('2d');

//         new Chart(myChartRef, config_bc1);
//     }, []);

//     return (
//         <canvas ref={chartRef} />
//     );
// };

// export default HorizontalOne;
import { useState } from "react";

import { UserData } from "./Data";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { options } from "./WaterCanvas";
function HorizontalOne() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

    const options = {
        indexAxis: 'y',
        aspectRatio: 3,
        //         // Elements options apply to all of the options unless overridden in a dataset
        //         // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            rectangle: {
                borderWidth: 0,
            }
        },
        responsive: true,
        legend: {
            display: false,
            position: 'bottom',
        },
        title: {
            display: false,
            text: 'Energy Consumption'
        },
        tooltips: {
            enabled: false,
            mode: 'single',
            callbacks: {
                label: function (tooltipItems, data) {
                    return ' ' + tooltipItems.xLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    display: true,
                },
                gridLines: {
                    display: true,

                }
            }],
            yAxes: [{
                gridLines: {
                    display: true
                }
            }]
        }
    }
    return (
        <div className="App">
            <div style={{ width: 700 }}>
                <Bar data={userData} options={options} />
            </div>
        </div>
    );
}

export default HorizontalOne;

