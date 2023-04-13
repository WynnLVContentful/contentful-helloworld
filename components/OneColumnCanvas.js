// // // import React, { useEffect, useRef } from 'react';
// // // import Chart from 'chart.js';

import React, { Fragment } from "react";

// // // function Example() {
// // //     const chartRef = useRef(null);

// // //     useEffect(() => {
// // //         const ctx = chartRef.current.getContext('2d');

// // //         new Chart(ctx, {
// // //             type: 'doughnut',
// // //             data: {
// // //                 labels: ['Accepted', 'Pending', 'Rejected'],
// // //                 datasets: [
// // //                     {
// // //                         data: [30, 30, 40],
// // //                         borderColor: [
// // //                             'rgb(75, 192, 192)',
// // //                             'rgb(255, 205, 86)',
// // //                             'rgb(255, 99, 132)',
// // //                         ],
// // //                         backgroundColor: [
// // //                             'rgb(75, 192, 192 )',
// // //                             'rgb(255, 205, 86)',
// // //                             'rgb(255, 99, 132)',
// // //                         ],
// // //                         borderWidth: 10,
// // //                         options: {
// // //                             plugins: {
// // //                                 legend: {
// // //                                     labels: {
// // //                                         // This more specific font property overrides the global property
// // //                                         font: {
// // //                                             size: 100,
// // //                                         }
// // //                                     }
// // //                                 }
// // //                             }
// // //                         }
// // //                     },
// // //                 ],
// // //             },
// // //             options: {
// // //                 plugins: {
// // //                     legend: {
// // //                         labels: {
// // //                             // This more specific font property overrides the global property
// // //                             font: {
// // //                                 size: 100,
// // //                             }
// // //                         }
// // //                     }
// // //                 }
// // //             }
// // //         });
// // //     }, []);

// // //     return (
// // //         <>
// // //             {/* Doughnut chart */}
// // //             <h1 className='w-[150px] mx-auto mt-10 text-xl font-semibold capitalize'>
// // //                 Doughnut Chart
// // //             </h1>
// // //             <div className='w-[1100px] h-screen flex mx-auto my-auto'>
// // //                 <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
// // //                     <canvas ref={chartRef}></canvas>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // }

// // // export default Example;

// // import React, { useRef, useEffect } from 'react';
// // import { Chart, Tooltip, legend } from 'chart.js/auto';

// // const ChartComponent = () => {
// //     const chartRef = useRef(null);

// //     useEffect(() => {
// //         const myChartRef = chartRef.current.getContext('2d');

// //         new Chart(myChartRef, {
// //             type: 'doughnut',
// //             data: {
// //                 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //                 datasets: [{
// //                     label: 'Sales',
// //                     data: [12, 19, 3, 5, 2, 3, 18],
// //                     backgroundColor: [
// //                         'rgb(75, 192, 192 )',
// //                         'rgb(255, 205, 86)',
// //                         'rgb(255, 99, 132)',
// //                     ],
// //                     borderColor: 'rgba(255, 99, 132, 1)',
// //                     borderWidth: 1,
// //                 }],
// //             },
// //             options: {
// //                 responsive: true,
// //                 plugins: {
// //                     legend: {
// //                         display: true,
// //                         labels: {
// //                             color: 'rgb(255, 99, 132)'
// //                         }
// //                     },
// //                     title: {
// //                         display: false,
// //                         text: 'Sales Chart',
// //                         padding: {
// //                             top: 50,
// //                             bottom: 30
// //                         }
// //                     },
// //                     legend: {
// //                         position: 'bottom',
// //                     },
// //                     customCanvasBackgroundColor: {
// //                         color: 'lightGreen',
// //                     },
// //                     tooltip: {
// //                         callbacks: {
// //                             label: function (context) {
// //                                 let label = context.dataset.label || '';

// //                                 if (label) {
// //                                     label += ': ';
// //                                 }
// //                                 if (context.parsed.y !== null) {
// //                                     label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
// //                                 }
// //                                 return label;
// //                             }
// //                         }
// //                     }
// //                 },
// //                 scales: {
// //                     y: {
// //                         beginAtZero: true,
// //                     },
// //                 },
// //             },
// //         });
// //     }, []);

// //     return (
// //         <>
// //             {/* Doughnut chart */}
// //             <h1 className='w-[150px] mx-auto mt-10 text-xl font-semibold capitalize'>
// //                 Doughnut Chart
// //             </h1>
// //             <div className='w-[1100px] h-screen flex mx-auto my-auto'>
// //                 <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
// //                     <canvas ref={chartRef}></canvas>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // };

// // export default ChartComponent;


// import { chart as ChartJS, ArcElement, ToolTip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// ChartJS?.register(ArcElement, ToolTip, Legend);
// function canvasDonut() {
//     const data = {
//         datasets: [{

//             data: [12, 19, 3, 5, 2, 3, 18],
//             backgroundColor: [
//                 'rgb(75, 192, 192 )',
//                 'rgb(255, 205, 86)',
//                 'rgb(255, 99, 132)',
//             ],
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1,
//         }],
//     }
//     const options = {}
//     return (<Fragment>
//         <div>
//             <h1>test one dounuts</h1>
//             <div>
//                 <Doughnut>
//                     data={data}
//                     options={options}
//                 </Doughnut>
//             </div>
//         </div>
//     </Fragment>);
// }

// export default canvasDonut;
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, plugin } from "chart.js/auto";
import { flushSync } from "react-dom";

function PieChart({ chartData }) {

    const data = {
        labels: [
            'Wynn Las Vegas',
            'Wynn Macau Limited',
            'Encore Boston Harbor',
        ],
        datasets: [{
            label: 'property',
            data: [12, 19, 3],
            backgroundColor: [
                "#006f62",
                "#776457",
                "#B2A99B",
            ],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 0,
        }],
    }
    const options = {
        animations: {
            tension: {
                duration: 40,
                easing: 'reverse',
                from: 0,
                to: 1,
                loop: false
            },
        },
        plugins: {
            // responsive: false,
            // aspectRatio: 1,
            // cutoutPercentage: 65,
            legend: {
                // position: {
                //     // top: 0,
                //     // left: 0,

                display: true,
                position: "bottom",
                maxWidth: 200,
                lineWidth: 200,
                align: "left",
                labels: {
                    font: {
                        size: 14
                    }
                }
            },
            title: {
                display: true,
                text: '2019',
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            tooltip: {
                enabled: true,
                position: 'nearest',
            }
        },
    }
    return <Fragment>
        <section>
            <div className="container">
                <h1 className=' mx-auto mt-10 text-xl font-semibold capitalize'>
                    Doughnut Chart
                </h1>
                <div className="d-flex flex-wrap">
                    <div className=" donut col">
                        <Doughnut data={data} options={options} />
                    </div >
                    <div className=" donut col">
                        <Doughnut data={data} options={options} />
                    </div >
                    <div className=" donut col">
                        <Doughnut data={data} options={options} />
                    </div >
                </div>
            </div>
        </section>
    </Fragment>
}

export default PieChart;
// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// function Example() {
//     const chartRef = useRef(null);

//     useEffect(() => {
//         const ctx = chartRef.current.getContext('2d');

//         new Chart(ctx, {
//             type: 'doughnut',
//             data: {
//                 labels: ['Accepted', 'Pending', 'Rejected'],
//                 datasets: [
//                     {
//                         data: [70, 10, 6],
//                         borderColor: [
//                             'rgb(75, 192, 192)',
//                             'rgb(255, 205, 86)',
//                             'rgb(255, 99, 132)',
//                         ],
//                         backgroundColor: [
//                             'rgb(75, 192, 192 )',
//                             'rgb(255, 205, 86)',
//                             'rgb(255, 99, 132)',
//                         ],
//                         borderWidth: 2,
//                     },
//                 ],
//             },
//             options: {
//                 animation: {
//                     animateScale: true,
//                     animateRotate: true,
//                 },
//                 scales: {
//                     xAxes: [
//                         {
//                             display: false,
//                         },
//                     ],
//                     yAxes: [
//                         {
//                             display: false,
//                         },
//                     ],
//                 },
//             },
//         });
//     }, []);

//     return (
//         <>
//             {/* Doughnut chart */}
//             <h1 className='w-[150px] mx-auto mt-10 text-xl font-semibold capitalize'>
//                 Doughnut Chart
//             </h1>
//             <div className='w-[1100px] h-screen flex mx-auto my-auto'>
//                 <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2'>
//                     <canvas ref={chartRef}></canvas>
//                 </div>
//             </div>
//         </>
//     );
// }

// const LazyExample = React.lazy(() => import(Example));

// function App() {
//     return (
//         <div>
//             <React.Suspense fallback={<div>Loading...</div>}>
//                 <LazyExample />
//             </React.Suspense>
//         </div>
//     );
// }

// export default App;
