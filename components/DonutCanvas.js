import React, { Fragment } from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, plugin } from "chart.js/auto";

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
    return <Fragment>
        <section className="my-4">
            <div className="container">
                <div className="canvas-donuts">
                    <h1 className=' mx-auto mt-10 text-xl font-semibold capitalize'>
                        Doughnut Chart
                    </h1>
                    <div className="row justify-content-center align-item-center">
                        <div className=" donut col-lg-4 col-12 ">
                            <Doughnut data={data} options={options} />
                        </div >
                        <div className=" donut col-lg-4 col-12 ">
                            <Doughnut data={data} options={options} />
                        </div >
                        <div className=" donut col-lg-4 col-12 ">
                            <Doughnut data={data} options={options} />
                        </div >
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
}

export default PieChart;