let ctx = document.getElementById('intakeChart').getContext('2d');

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak", "Subota", "Nedelja"],
        datasets: [{
            label: 'Unos kalorija',
            data: [2130, 2444, 1800, 1950, 2000, 2100, 2440],
            backgroundColor: [
                'transparent'
            ],
            borderColor: [
                '#3498DB',
            ],
            borderWidth: 1
        },
            {
                label: 'Optimalan unos kalorija',
                data: [2400, 2400, 2400, 2400, 2400, 2400, 2400],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: [
                    '#28B463',
                ],
                borderWidth: 1,
            }
        ]

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 3500
                }
            }]
        },
        legend: {
            display: true,
            position: 'bottom'
        }
    }
});

let ctx2 = document.getElementById('consumedChart').getContext('2d');

let myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ["Ugljeni hidrati", "Proteini", "Belancevine", "Voce", "Povrce", "Pice i napici"],
        datasets: [{
            data: [40, 15, 15, 10, 5, 15],
            backgroundColor: [
                '#3498DB',
                '#FFC300',
                '#DAF7A6',
                '#FF5733',
                '#28B463',
                '#273746'
            ],
            borderColor: [
                '#3498DB',
                '#FFC300',
                '#DAF7A6',
                '#FF5733',
                '#28B463',
                '#273746'
            ],
            borderWidth: 1
        }]

    },
    options: {
        legend: {
            display: true,
            position: 'bottom'
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    for (var i in allData) {
                        total += allData[i];
                    }
                    var tooltipPercentage = tooltipData;
                    return tooltipLabel + ': ' + tooltipPercentage + '%';
                }
            }
        }

    }
});

/* activate scrollspy menu */
$('body').scrollspy({
    target: '#navbarNavDropdown',
    offset: 52
});


$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});
