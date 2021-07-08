var chart = LightweightCharts.createChart(document.getElementById("jpn_chart"), {
	width: 600,
  height: 300,
	rightPriceScale: {
		visible: true,
    borderColor: 'rgba(197, 203, 206, 1)',
	},
	leftPriceScale: {
		visible: true,
    borderColor: 'rgba(197, 203, 206, 1)',
	},
	layout: {
		backgroundColor: '#ffffff',
		textColor: 'rgba(33, 56, 77, 1)',
	},
  grid: {
    horzLines: {
      color: '#F0F3FA',
    },
    vertLines: {
      color: '#F0F3FA',
    },
  },
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 1)',
	},
	handleScroll: {
		vertTouchDrag: true,
	},
});

ticker = document.title;
// Fetching api data from our flask app
fetch('http://127.0.0.1:5000/get_predicted/' + ticker)
	.then((r) => r.json())
	.then((response) => {
		// console.log(response);
    // Setting first series
    chart.addLineSeries({
        color: 'rgba(4, 111, 232, 1)',
        lineWidth: 2,
    }).setData(response.train);
    // Setting second series
    chart.addLineSeries({
        color: 'rgba(4, 23, 23, 1)',
        lineWidth: 3,
    }).setData(response.test);
    // Setting predicted series
    chart.addLineSeries({
        color: 'rgba(255, 99, 71, 1)',
        lineWidth: 4,
    }).setData(response.predicted);
	});