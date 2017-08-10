let ctx = document.getElementById('intakeChart').getContext('2d');

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak", "Subota", "Nedelja"],
        datasets: [
            {
                label: 'Voce',
                data: [150, 200, 150, 150, 200, 100, 150],
                backgroundColor: [
                    '#28B463',
                    '#28B463',
                    '#28B463',
                    '#28B463',
                    '#28B463',
                    '#28B463',
                    '#28B463'
                ],
                borderColor: [
                    '#28B463',
                    '#28B463',
                    '#28B463',
                    '#28B463',
                    '#28B463',
                    '#28B463',
                    '#28B463'
                ],
                borderWidth: 1,
            },
            {
                label: 'Povrce',
                data: [200, 150, 100, 200, 150, 200, 100],
                backgroundColor: [
                    '#FFC300',
                    '#FFC300',
                    '#FFC300',
                    '#FFC300',
                    '#FFC300',
                    '#FFC300',
                    '#FFC300'
                ],
                borderColor: [
                    '#FFC300',
                    '#FFC300',
                    '#FFC300',
                    '#FFC300',
                    '#FFC300',
                    '#FFC300',
                    '#FFC300'
                ],
                borderWidth: 1,
            },
            {
                label: 'Meso i mesne preradjevine',
                data: [150, 300, 200, 300, 150, 300, 250],
                backgroundColor: [
                    '#FF5733',
                    '#FF5733',
                    '#FF5733',
                    '#FF5733',
                    '#FF5733',
                    '#FF5733',
                    '#FF5733'
                ],
                borderColor: [
                    '#FF5733',
                    '#FF5733',
                    '#FF5733',
                    '#FF5733',
                    '#FF5733',
                    '#FF5733',
                    '#FF5733'
                ],
                borderWidth: 1,
            },
            {
                label: 'Mlecni proizvodi',
                data: [100, 150, 200, 100, 50, 100, 80],
                backgroundColor: [
                    '#273746',
                    '#273746',
                    '#273746',
                    '#273746',
                    '#273746',
                    '#273746',
                    '#273746'
                ],
                borderColor: [
                    '#273746',
                    '#273746',
                    '#273746',
                    '#273746',
                    '#273746',
                    '#273746',
                    '#273746'
                ],
                borderWidth: 1,
            },
            {
                label: 'Zitarice',
                data: [80, 50, 90, 45, 50, 100, 80],
                backgroundColor: [
                    '#2962ff',
                    '#2962ff',
                    '#2962ff',
                    '#2962ff',
                    '#2962ff',
                    '#2962ff',
                    '#2962ff'
                ],
                borderColor: [
                    '#2962ff',
                    '#2962ff',
                    '#2962ff',
                    '#2962ff',
                    '#2962ff',
                    '#2962ff',
                    '#2962ff'
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
                    max: 500
                }
            }]
        },
        tooltips: {
            mode: 'index'
        },
        legend: {
            display: true,
            position: 'bottom',
            onHover: function(e) {
                e.target.style.cursor = 'pointer';
            }
        },
        hover: {
            onHover: function(e) {
                var point = this.getElementAtEvent(e);
                if (point.length) e.target.style.cursor = 'pointer';
                else e.target.style.cursor = 'default';
            }
        }
    }
});

let ctx2 = document.getElementById('consumedChart').getContext('2d');

let myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ["Ugljeni hidrati", "Proteini", "Masti"],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: [
                '#3498DB',
                '#FFC300',
                '#DAF7A6',
                '#FF5733'
            ],
            borderColor: [
                '#3498DB',
                '#FFC300',
                '#DAF7A6',
                '#FF5733'
            ],
            borderWidth: 1
        }]

    },
    options: {
        legend: {
            display: true,
            position: 'bottom',
            onHover: function(e) {
                e.target.style.cursor = 'pointer';
            }
        },
        hover:{
            onHover: function(e) {
                var point = this.getElementAtEvent(e);
                if (point.length) e.target.style.cursor = 'pointer';
                else e.target.style.cursor = 'default';
            }
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
            },

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
