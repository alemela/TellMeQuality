function drawGraph(field, dollars,categories){
  var maxHeight = 70 * categories.length;
  var svgHeight = maxHeight + 50;
  var colors = ['#3e7cb0'];
  var grid = d3.range(11).map(function(i){
    return {'x1':0,'y1':0,'x2':0,'y2':maxHeight};
  });

  var tickVals = grid.map(function(d,i){
     return i*10;
  });

    var xscale = d3.scale.linear()
         .domain([0,100])
         .range([0,700]);

  var yscale = d3.scale.linear()
         .domain([0,categories.length])
         .range([0,maxHeight]);

  var colorScale = d3.scale.quantize()
         .domain([0,categories.length])
         .range(colors);

            var canvas1 = d3.select("#graph-"+field)
                   .append('svg')
                   .attr({'width':900,'height':svgHeight});

  var grids = canvas1.append('g')
           .attr('id','grid')
           .attr('transform','translate(150,10)')
           .selectAll('line')
           .data(grid)
           .enter()
           .append('line')
           .attr({'x1':function(d,i){ return i*70; },
              'y1':function(d){ return d.y1; },
              'x2':function(d,i){ return i*70; },
              'y2':function(d){ return d.y2; },
           })
           .style({'stroke':'#adadad','stroke-width':'1px'});

  var	xAxis = d3.svg.axis();
   xAxis
     .orient('bottom')
     .scale(xscale)
     .tickValues(tickVals);

  var	yAxis = d3.svg.axis();
   yAxis
     .orient('left')
     .scale(yscale)
     .tickSize(0)
     .tickFormat(function(d,i){ return categories[i]; })
     .tickValues(d3.range(10));

  var y_xis = canvas1.append('g')
           .attr("transform", "translate(150,45)")
           .attr('id','yaxis')
           .call(yAxis);

  var x_xis = canvas1.append('g')
           .attr("transform", "translate(150,"+maxHeight+")")
           .attr('id','xaxis')
           .call(xAxis);

  var chart = canvas1.append('g')
           .attr("transform", "translate(150,0)")
           .attr('id','bars-'+field)
           .selectAll('rect')
           .data(dollars)
           .enter()
           .append('rect')
           .attr('height',29) //barra piu o meno grossa
           .attr({'x':0,'y':function(d,i){ return yscale(i) + 30; }})
           .style('fill',function(d,i){ return colorScale(i); })
           .attr('width',function(d){ return 0; })
           .transition()
           .duration(1000)
           .attr("width", function(d) {return xscale(d); });


  var transitext = d3.select('#bars-'+field)
           .selectAll('text')
           .data(dollars)
           .enter()
           .append('text')
           .attr({'x':function(d) {return xscale(d)+5; },'y':function(d,i){ return yscale(i)+45; }})
           .text(function(d){ return d+"%"; }).style({'fill':'#3d3d3d','font-size':'14px'});

}
