import { useState } from "react";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
function HorizontalOneSingle() {
    const [userData, setUserData] = useState({
        labels: [2019, 2020, 2021],
        datasets: [
            {
                label: 'Scope 1 (Direct) Emissions',
                backgroundColor: "#B2A99B",
                data: [
                    208038,
                    164166,
                    352550
                ]
            }, {
                label: 'Scope 2 (Indirect) Emissions',
                backgroundColor: "#776457",
                data: [
                    343701,
                    248644,
                    261098
                ]
            }
        ],
    });

    const options = {
        indexAxis: 'y',
        layout: {
            padding: {
                right: 50
            }
        },
        aspectRatio: 2,
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
                mode: 'index',
                intersect: true,
                callbacks: {
                    label: function (context) {
                        var label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += '$' + context.parsed.y;
                        return label;
                    }
                }
            }

        },

        scales: {
            x: {
                stacked: true,
                gridLines: {
                    display: false
                },
                ticks: {
                    beginAtZero: false,
                    callback: function (value, index, values) {
                        if (parseInt(value) >= 1000) {
                            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        } else {
                            return value;
                        }
                    }
                }
            },
            y: {
                stacked: true,
                beginAtZero: true,

            }
        }

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


export default HorizontalOneSingle;





