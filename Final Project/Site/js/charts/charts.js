
//  --------------- Chart 1: csc-progress --------------- //

// Create a variable called bardata which will contain the data for the csc-progress barchart
var bardata = {
	labels : ['SY 2012-13', 'SY 2013-14', 'SY 2014-15'],
	datasets : [
		{
			fillColor : 'rgba(218, 53, 63, 1.00)',
			strokeColor : 'rgba(218, 53, 63, 1.00)',
			highlightFill : 'rgba(218, 53, 63, 1.00)',
			highlightStroke : 'rgba(218, 53, 63, 1.00)',
			data : [293, 79, 93]
		},
		{
			fillColor : 'rgba(255, 201, 64, 1.00)',
			strokeColor : 'rgba(255, 201, 64, 1.00)',
			highlightFill : 'rgba(255, 201, 64, 1.00)',
			highlightStroke : 'rgba(255, 201, 64, 1.00)',
			data : [41, 80, 53]
		},
		{
			fillColor : 'rgba(169, 211, 117, 1.00)',
			strokeColor : 'rgba(169, 211, 117, 1.00)',
			highlightFill : 'rgba(169, 211, 117, 1.00)',
			highlightStroke : 'rgba(169, 211, 117, 1.00)',
			data : [150, 173, 139]
		},
		{
			fillColor : 'rgba(135, 196, 236, 1.00)',
			strokeColor : 'rgba(135, 196, 236, 1.00)',
			highlightFill : 'rgba(135, 196, 236, 1.00)',
			highlightStroke : 'rgba(135, 196, 236, 1.00)',
			data : [102, 146, 146]
		},
		{
			fillColor : 'rgba(22, 118, 186, 1.00)',
			strokeColor : 'rgba(22, 118, 186, 1.00)',
			highlightFill : 'rgba(22, 118, 186, 1.00)',
			highlightStroke : 'rgba(22, 118, 186, 1.00)',
			data : [95, 186, 233]
		}
	]
};

var ctx = document.getElementById('csc-progress').getContext('2d');
var myBarChart = new Chart(ctx).Bar(bardata);

// --------------- Chart 2: staffing --------------- //

var doughnutdata = [
	{
		value : 452,
		color : 'rgba(159, 213, 206, 1.00)',
		label : 'Had 1+ FTEs'
	},
	{
		value : 212,
		color : 'rgba(198, 198, 198, 1.00)',
		label : 'No FTE'
	}
];

var ctx = document.getElementById('staffing').getContext('2d');
var myDoughnutChart = new Chart(ctx).Doughnut(doughnutdata, {percentageInnerCutout : 75});

// --------------- Chart 3: minutes --------------- //

var linedata = {
	labels : ['SY 2012-13', 'SY 2013-14', 'SY 2014-15'],
	datasets : [
		{
			fillColor : 'rgba(162, 209, 221, 1.00)',
			strokeColor : 'rgba(162, 209, 221, 1.00)',
			pointColor : 'rgba(162, 209, 221, 1.00)',
			pointStrokeColor : 'rgba(215, 226, 246, 1.00)',
			pointHighlightFill : 'rgba(215, 226, 246, 1.00)',
			pointHighlightStroke : 'rgba(162, 209, 221, 1.00)',
			data : [102, 118, 130]
		}
	]
};

var ctx = document.getElementById('minutes').getContext('2d');
var myLineChart = new Chart(ctx).Line(linedata);

