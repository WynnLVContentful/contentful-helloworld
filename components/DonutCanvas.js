import React, { Fragment } from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, plugin } from "chart.js/auto";
import TwoColumnCanvas from "./twoColumnCanvas";
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
        responsive: true,
        aspectRatio: 1,
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
            legend: {
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
        animateScale: true,
    }
    const options2 = {
        responsive: true,
        aspectRatio: 1,
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
            legend: {
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
                text: '2020',
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
        animateScale: true,
    }
    const options3 = {
        responsive: true,
        aspectRatio: 1,
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
            legend: {
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
                text: '2021',
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
        animateScale: true,
    }
    const First = () => {
        return <Fragment>
            <div className="row row-cols-1 row-cols-lg-2 people align-item-center">
                <div className="text-center col my-4 my-lg-0"><h1 className="text-center ">North America</h1></div>
                <div className="text-center col  "><p className="first">20%</p></div>
            </div>

        </Fragment>
    }

    const Second = () => {
        return <Fragment>
            <div className="row row-cols-1 row-cols-lg-2 people">
                <div className="text-center col my-4 my-lg-0"><h1>Macau</h1></div>
                <div className="text-center col "><p className="second">7%</p></div>
            </div>
        </Fragment>
    }
    return <Fragment>
        <section className="my-4">
            <div className="container">
                <h1>Our People</h1>
                <p className="text-center mt-5">Wynn Resorts 2021 Average Voluntary Turnover Rates</p>
               
                <TwoColumnCanvas firstChild={<First />} secondChild={<Second />} />

                <div className="canvas-donuts">
                    <h1 className=' mx-auto mt-10 text-xl font-semibold capitalize'>
                    Our Communities
                    </h1>
                    <p className="text-center mt-5">Wynn Resorts 2021 Average Voluntary Turnover Rates</p>
                    <div className="row justify-content-center align-item-center row-cols-1 row-cols-lg-3">
                        <div className=" donut col-lg-4 col-12 ">
                            <Doughnut data={data} options={options} />
                        </div >
                        <div className=" donut col-lg-4 col-12 ">
                            <Doughnut data={data} options={options2} />
                        </div >
                        <div className=" donut col-lg-4 col-12 ">
                            <Doughnut data={data} options={options3} />
                        </div >
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
}

export default PieChart;