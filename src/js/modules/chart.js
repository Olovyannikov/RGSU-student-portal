import Chart from "chart.js/dist/Chart.min.js";
export default () => {
    Chart.defaults.global.defaultFontFamily = "Russia, Arial";
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["10:00", "12:00", "14:00", "16:00", "18:00"],
            datasets: [
                {
                    data: [8.8, 6.5, 5.2, 3.7, 8],
                    backgroundColor: "#c3cad6",
                    fill: "#c3cad6",
                    borderColor: ["#c3cad6"],
                    borderWidth: 2,

                    pointBackgroundColor: ["#c3cad6"],
                    pointBorderWidth: 3,
                    pointBorderColor: "#c3cad6",
                },
            ],
        },
        options: {
            responsive: true,
            legend: {
                display: false,
            },
        },
    });
};
