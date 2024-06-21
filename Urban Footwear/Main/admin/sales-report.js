var ctx = document.getElementById('salesChart').getContext('2d');
var salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [12000, 19000, 3000, 5000, 20000, 30000, 45000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctxAnnual = document.getElementById('annualSalesChart').getContext('2d');
var annualSalesChart = new Chart(ctxAnnual, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
            {
                label: 'Annual Sales',
                data: [120000, 190000, 300000, 500000, 200000, 300000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});