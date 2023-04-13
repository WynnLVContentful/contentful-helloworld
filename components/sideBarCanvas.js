import { useEffect, useState } from "react";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { options } from "./WaterCanvas";
function HorizontalOne(props) {
    const gBarPercentage = 0.75;
    const gCategoryPercentage = 0.70;
    const [userData, setUserData] = useState({
        labels: [2019, 2020, 2021],
        datasets: [
            {
                label: 'Wynn North America',
                backgroundColor: "#B2A99B",
                borderColor: "#B2A99B",
                barPercentage: gBarPercentage,
                categoryPercentage: gCategoryPercentage,
                data: [
                    177283,
                    188123,
                    206596
                ]
            }, {
                label: 'Wynn Macau Limited',
                backgroundColor: "#776457",
                borderColor: "#776457",
                barPercentage: gBarPercentage,
                categoryPercentage: gCategoryPercentage,

                data: [
                    270158,
                    226387,
                    235934
                ]
            }, {
                label: 'Company Total',
                backgroundColor: "#006f62",
                borderColor: "#006f62",
                barPercentage: gBarPercentage,
                categoryPercentage: gCategoryPercentage,
                data: [
                    447441,
                    414510,
                    442530
                ]
            }
        ],
    });



    const options = {
        indexAxis: 'y',
        aspectRatio: 3,
        elements: {
            rectangle: {
                borderWidth: 0,
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'Wynn Resorts Energy Consumption (MWh)'
            },
            tooltips: {
                enabled: false,
                mode: 'single',
                callbacks: {
                    label: function (tooltipItems, data) {
                        return ' ' + tooltipItems.xLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                }
            }
        },

    }
    return (
        <section className="onecolumn-sidecanvas">
            <div className="container">
                <div className="title-canvas">
                    <h2 >Our  Planet</h2>
                    <p className="text-center">Wynn Resorts Energy Consumption (MWh)</p>
                </div>
                <div className="sidebar-canvas">
                    <div className="chartjs-bar">
                        <Bar data={userData} options={options} />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default HorizontalOne;

