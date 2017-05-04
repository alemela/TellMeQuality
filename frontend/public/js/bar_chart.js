

for(var t in data)
{
      var div = d3.select("body").append("div").attr("class", "toolTip");
      var axisMargin = 20,
      margin = 40,
      valueMargin = 4,
      width =550,
      height =500,
      barHeight = (height-axisMargin-margin*2)* 0.4/data[t].length,
      barPadding = (height-axisMargin-margin*2)*0.6/data[t].length,
      data, bar, svg, scale, xAxis, labelWidth = 0;

      max = d3.max(data[t], function(d) { return d.value; });
      svg = d3.select("."+t+"_graph")
      .append("svg")
      .attr("width", width)
      .attr("height", height);


      bar = svg.selectAll("g")
      .data(data[t])
      .enter()
      .append("g");

      bar.attr("class", "bar")
      .attr("cx",0)
      .attr("transform", function(d, i) {
        return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
      });

      bar.append("text")
      .attr("class", "label")
      .attr("y", barHeight / 2)
      .attr("dy", ".35em") //vertical align middle
      .text(function(d){
        return d.label;
      }).each(function() {
        labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
      });

      scale = d3.scale.linear()
      .domain([0, 100])
      .range([0, width - margin*2 - labelWidth]);

      xAxis = d3.svg.axis()
      .scale(scale)
      .tickSize(-height + 2*margin + axisMargin)
      .orient("bottom");

      bar.append("rect")
      .attr("transform", "translate("+labelWidth+", 0)")
      .attr("height", barHeight)
      .attr("width", function(d){
        return scale(d.value);
      });

      bar.append("text")
      .attr("class", "value")
      .attr("y", barHeight / 2)
      .attr("dx", -valueMargin + labelWidth) //margin right
      .attr("dy", ".35em") //vertical align middle
      .attr("text-anchor", "end")
      .text(function(d){
        return (d.value+"%");
      })
      .attr("x", function(d){
        var width = this.getBBox().width;
        return Math.max(width + valueMargin, scale(d.value));
      });

      bar
      .on("mousemove", function(d){
        div.style("left", d3.event.pageX+10+"px");
        div.style("top", d3.event.pageY-25+"px");
        div.style("display", "inline-block");
        div.html((d.label)+"<br>"+(d.value)+"%");
      });
      bar
      .on("mouseout", function(d){
        div.style("display", "none");
      });

      svg.insert("g",":first-child")
      .attr("class", "axisHorizontal")
      .attr("transform", "translate(" + (margin + labelWidth) + ","+ (height - axisMargin - margin)+")")
      .call(xAxis);
}
