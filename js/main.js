$( document ).ready(function() {
    
    var ct1 = document.getElementById("mortality-chart").getContext('2d');
    var myChart = new Chart(ct1, {
        type: 'line',
        data: {
            labels: ["<1", "1-4", "5-14", "15-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75-84", "85+"],
            datasets: [{
                label: 'Heart Disease',
                data: [7.3, 0.9, 0.5, 2.3, 8.0, 25.6, 79.3, 188.1, 389.5, 1071.6, 3986.5],
                borderColor: [
                    'rgba(137, 168, 179, 1)'
                ],
                fill: false,
                pointRadius: 1,
                borderWidth: 3
            }, {
                label: 'Cancer',
                data: [1.3, 2.2, 2.1, 3.4, 8.4, 26.9, 99.7, 284.1, 594.3, 1100.8, 1628.6],
                borderColor: [
                    'rgba(215, 195, 160, 1)'
                ],
                fill: false,
                pointRadius: 1,
                borderWidth: 3
            }, {
                label: 'Cerebrovascular Disease',
                data: [2.2, 0.3, 0.2, 0.4, 1.3, 4.4, 12.3, 29.6, 75.5, 273, 975.8],
                borderColor: [
                    'rgba(255, 0, 0, 1)'
                ],
                fill: false,
                pointRadius: 1,
                borderWidth: 6
            }, {
                label: 'Chronic Lower Respiratory Disease',
                data: [0.7, 0.3, 0.4, 0.5, 0.7, 1.7, 10.1, 42.7, 136.6, 357.9, 705.1],
                borderColor: [
                    'rgba(79, 85, 94, 1)'
                ],
                fill: false,
                pointRadius: 1,
                borderWidth: 3
            }, {
                label: 'Accidents',
                data: [32.5, 7.8, 3.7, 28.5, 44.8, 43.9, 49.8, 47.7, 47, 111.5, 364.5],
                borderColor: [
                    'rgba(0, 0, 0, .4)'
                ],
                fill: false,
                pointRadius: 1,
                borderWidth: 3
            }, {
                label: "Alzheimer's Disease",
                data: [0, 0, 0, 0, 0, 0, 0.2, 2.4, 22.4, 211.9, 1174.2],
                borderColor: [
                    'rgba(131, 128, 136, 1)'
                ],
                fill: false,
                pointRadius: 1,
                borderWidth: 3
            }, {
                label: 'Diabetes',
                data: [2.2, 0.3, 0.2, 0.4, 1.3, 4.4, 12.3, 29.6, 75.5, 273, 975.8],
                borderColor: [
                    'rgba(0, 0, 0, .2)'
                ],
                fill: false,
                pointRadius: 1,
                borderWidth: 3
            }, {
                label: 'Flu & Pneumonia',
                data: [4.4, 0.6, 0.2, 0.4, 0.9, 1.7, 4.7, 11.3, 29.5, 101.6, 421.4],
                borderColor: [
                    'rgba(78, 106, 127, 1)'
                ],
                fill: false,
                pointRadius: 1,
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: false,
                }],
                yAxes: [{
                    stacked: false,
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            plugins: {
                deferred: {           // enabled by default
                xOffset: 150,     // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%',   // defer until 50% of the canvas height are inside the viewport
                delay: 500        // delay of 500 ms after the canvas is considered inside the viewport
        }
    }
        }
    });
    
    var ct2 = document.getElementById("stroke-incidence").getContext('2d');
    var myChart = new Chart(ct2, {
        type: 'pie',
        data: {
            labels: ["Ischemic", "Hemorrhagic"],
            datasets: [{
                label: 'Ischemic Stroke',
                data: [89.9, 10.1],
                backgroundColor: [
                    'rgba(79, 85, 94, 1)',
                    'rgba(137, 168, 179, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            },
            plugins: {
                deferred: {           // enabled by default
                xOffset: 150,     // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%',   // defer until 50% of the canvas height are inside the viewport
                delay: 500        // delay of 500 ms after the canvas is considered inside the viewport
        }
    }
    });
    
    var ct3 = document.getElementById("stroke-mortality").getContext('2d');
    var myChart = new Chart(ct3, {
        type: 'pie',
        data: {
            labels: ["Ischemic", "Hemorrhagic"],
            datasets: [{
                label: 'Ischemic Stroke',
                data: [25.9, 49.2],
                backgroundColor: [
                    'rgba(79, 85, 94, 1)',
                    'rgba(137, 168, 179, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            },
            plugins: {
                deferred: {           // enabled by default
                xOffset: 150,     // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%',   // defer until 50% of the canvas height are inside the viewport
                delay: 500        // delay of 500 ms after the canvas is considered inside the viewport
        }
    }
    });
    
    var ct4 = document.getElementById("ischemic-chart").getContext('2d');
    var myChart = new Chart(ct4, {
        type: 'bar',
        data: {
            labels: ["Macroangiopathy", "Cardioembolism", "Microangiopathy", "Other Causes", "Multiple Causes", "Unknown Cause"],
            datasets: [{
                label: 'Deceased',
                data: [113, 206, 24, 11, 34, 131],
                backgroundColor: [
                    'rgba(79, 85, 94, 1)',
                    'rgba(79, 85, 94, 1)',
                    'rgba(79, 85, 94, 1)',
                    'rgba(79, 85, 94, 1)',
                    'rgba(79, 85, 94, 1)',
                    'rgba(79, 85, 94, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'mRS 0-2',
                data: [379, 427, 536, 83, 127, 467],
                backgroundColor: [
                    'rgba(78, 106, 127, 1)',
                    'rgba(78, 106, 127, 1)',
                    'rgba(78, 106, 127, 1)',
                    'rgba(78, 106, 127, 1)',
                    'rgba(78, 106, 127, 1)',
                    'rgba(78, 106, 127, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'mRS 3',
                data: [68, 71, 84, 10, 23, 77],
                backgroundColor: [
                    'rgba(137, 168, 179, 1)',
                    'rgba(137, 168, 179, 1)',
                    'rgba(137, 168, 179, 1)',
                    'rgba(137, 168, 179, 1)',
                    'rgba(137, 168, 179, 1)',
                    'rgba(137, 168, 179, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'mRS 4-5',
                data: [160, 206, 88, 14, 48, 142],
                backgroundColor: [
                    'rgba(164, 201, 214, 1)',
                    'rgba(164, 201, 214, 1)',
                    'rgba(164, 201, 214, 1)',
                    'rgba(164, 201, 214, 1)',
                    'rgba(164, 201, 214, 1)',
                    'rgba(164, 201, 214, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            plugins: {
                deferred: {           // enabled by default
                xOffset: 150,     // defer until 150px of the canvas width are inside the viewport
                yOffset: '50%',   // defer until 50% of the canvas height are inside the viewport
                delay: 500        // delay of 500 ms after the canvas is considered inside the viewport
        }
    }
        }
    });
    
    var ct5 = document.getElementById("males-race-chart").getContext('2d');
    var myChart = new Chart(ct5, {
        type: 'line',
        data: {
            labels: ["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008"],
            datasets: [{
                label: 'Black',
                data: [90.6, 90.8, 86.5, 83.0, 81.0, 76.3, 71.8, 68.4, 68.5, 63.4],
                borderColor: [
                    'rgba(20, 20, 20, 1)'
                ],
                fill: false,
                borderWidth: 2
            }, {
                label: 'White',
                data: [60.8, 59.9, 56.5, 54.4, 51.9, 48.2, 44.8, 41.7, 40.3, 39.2],
                borderColor: [
                    'rgba(78, 106, 127, 1)'
                ],
                fill: false,
                borderWidth: 2
            }, {
                label: 'American Indian',
                data: [50.0, 46.1, 37.5, 37.1, 34.9, 35.0, 31.3, 25.8, 31.1, 24.5],
                borderColor: [
                    'rgba(137, 168, 179, 1)'
                ],
                fill: false,
                borderWidth: 2
            }, {
                label: 'Hispanic',
                data: [52.6, 50.5, 48.9, 44.3, 43.0, 41.5, 38.0, 35.9, 34.5, 33.1],
                borderColor: [
                    'rgba(164, 201, 214, 1)'
                ],
                fill: false,
                borderWidth: 2
            }, {
                label: 'Asian',
                data: [58.7, 58.0, 55.3, 50.8, 48.4, 44.2, 41.5, 39.8, 35.5, 34.0],
                borderColor: [
                    'rgba(79, 85, 94, 1)'
                ],
                fill: false,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                xAxes: [{
                }],
                yAxes: [{
                    ticks: {
                        max: 100,
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    
    var ct6 = document.getElementById("females-race-chart").getContext('2d');
    var myChart = new Chart(ct6, {
        type: 'line',
        data: {
            labels: ["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008"],
            datasets: [{
                label: 'Black',
                data: [77.1, 77.2, 74.8, 72.8, 70.9, 66.6, 61.7, 58.0, 56.1, 54.5],
                borderColor: [
                    'rgba(20, 20, 20, 1)'
                ],
                fill: false,
                borderWidth: 2
            }, {
                label: 'White',
                data: [58.4, 57.6, 54.8, 53.9, 50.9, 47.7, 44.4, 41.5, 40.3, 39.0],
                borderColor: [
                    'rgba(78, 106, 127, 1)'
                ],
                fill: false,
                borderWidth: 2
            }, {
                label: 'American Indian',
                data: [46.4, 43.7, 44.0, 38.0, 34.2, 35.1, 37.1, 30.9, 28.4, 24.0],
                borderColor: [
                    'rgba(137, 168, 179, 1)'
                ],
                fill: false,
                borderWidth: 2
            }, {
                label: 'Hispanic',
                data: [42.2, 43.0, 41.6, 38.6, 38.1, 35.4, 33.5, 32.3, 30., 28.9],
                borderColor: [
                    'rgba(164, 201, 214, 1)'
                ],
                fill: false,
                borderWidth: 2
            }, {
                label: 'Asian',
                data: [49.0, 49.1, 48.2, 45.4, 42.6, 38.9, 36.3, 34.9, 33.2, 32.1],
                borderColor: [
                    'rgba(79, 85, 94, 1)'
                ],
                fill: false,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                xAxes: [{
                }],
                yAxes: [{
                    ticks: {
                        max: 100,
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    
    window.sr = ScrollReveal();
    sr.reveal('.intro-block', { scale: 1, duration: 1000});
    sr.reveal('#ischemic-chart', { scale: 1, duration: 1000 });
    sr.reveal('#males-race-chart', { scale: 1, duration: 1000 });
    
    var width = 960,
    height = 500;
           
});

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
