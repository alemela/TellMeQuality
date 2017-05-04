



var data = [
  {
    className: 'accuracy', // optional can be used for styling
    axes: [
      {axis: "Accuracy", value: 42},
      {axis: "Completness", value: 61},
      {axis: "Consistency", value: 55},
      {axis: "Credibility", value: 98},
      {axis: "Compliance", value: 94},
      {axis: "Correctness", value: 79},
      {axis: "Accessibility", value: 99},
      {axis: "Confidentiality", value: 37},
      {axis: "Efficiency", value: 87},

    ]
  }
];

function Dataset() {
  return data.map(function(d) {
    return {
      className: d.className,
      axes: d.axes.map(function(d) {
        return d;
      })
    };
  });
}

var chart = RadarChart.chart();
var cfg = chart.config({w: 300, h: 300, levels:4, maxValue: 100, tooltips:false, radians: 2 * Math.PI,  factorLegend: .85});


var svg = d3.select('.radar-chart').append('svg')
.attr('viewBox', "-30 -10 530 380")
svg.append('g').classed('single', 1)
                .datum(Dataset()).call(chart);

svg.select('g').attr("transform", 'translate(80,30)')

svg.selectAll(".axis").selectAll("text").remove()

var axis = svg.selectAll(".axis")
var total = 9;

var firstaxis = svg.select(".axis")

firstaxis.append("text")
		.attr("class", "legend")
		.text(function(d, i){return "25%" })
		.style("font-family", "lato")
		.style("font-size", "0.8em")
		.attr("text-anchor", "middle")
		.attr("dy", "1.5em")
		.attr("x", 150)
		.attr("y", 167);

firstaxis.append("text")
		.attr("class", "legend")
		.text(function(d, i){return "50%" })
		.style("font-family", "lato")
		.style("font-size", "0.8em")
		.attr("text-anchor", "middle")
		.attr("dy", "1.5em")
		.attr("x", 150)
		.attr("y", 200);

firstaxis.append("text")
		.attr("class", "legend")
		.text(function(d, i){return "75%" })
		.style("font-family", "lato")
		.style("font-size", "0.8em")
		.attr("text-anchor", "middle")
		.attr("dy", "1.5em")
		.attr("x", 150)
		.attr("y", 233);

firstaxis.append("text")
		.attr("class", "legend")
		.text(function(d, i){return "100%" })
		.style("font-family", "lato")
		.style("font-size", "0.8em")
		.attr("text-anchor", "middle")
		.attr("dy", "1.5em")
		.attr("x", 150)
		.attr("y", 265);


axis.append("text")
		.attr("class", "legend")
		.text(function(d, i){return d })
		.style("font-family", "lato")
		.style("font-size", "1.2em")
		.attr("text-anchor", "middle")
		.attr("dy", "1.5em")
		.attr("x", function(d, i){return 300/2*(1-.85*Math.sin(i*2*Math.PI/total))-80*Math.sin(i*2*Math.PI/total);})
		.attr("y", function(d, i){return 250/2*(1-Math.cos(i*2*Math.PI/total))-50*Math.cos(i*2*Math.PI/total);});

axis.append("text")
    .text(function(d, i){return "(" + data[0].axes[i].value +"%)"})
    .style("font-family", "lato")
    .style("font-size", "1em")
    .attr("text-anchor", "middle")
    .attr("dy", "1.5em")
    .attr("x", function(d, i){return 300/2*(1-.85*Math.sin(i*2*Math.PI/total))-80*Math.sin(i*2*Math.PI/total);})
    .attr("y", function(d, i){return 23+250/2*(1-Math.cos(i*2*Math.PI/total))-50*Math.cos(i*2*Math.PI/total);});



// many radars
//chart.config({w: cfg.w / 4, h: cfg.h / 4, axisText: false, levels: 0, circles: false, maxValue: 100});
//cfg = chart.config();
