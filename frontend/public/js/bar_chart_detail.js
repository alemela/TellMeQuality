function drawGraph(field, dollars,categories){
  var colors = ['#0000b4','#0082ca','#0094ff','#0d4bcf','#0066AE','#074285','#00187B','#285964','#405F83','#416545','#4D7069','#6E9985','#7EBC89','#0283AF','#79BCBF','#99C19E'];
  var grid = d3.range(25).map(function(i){
   return {'x1':0,'y1':0,'x2':0,'y2':480};
  });

  var tickVals = grid.map(function(d,i){
   if(i>0){ return i*10; }
   else if(i===0){ return "100";}
  });

    var xscale = d3.scale.linear()
         .domain([0,100])
         .range([0,722]);

  var yscale = d3.scale.linear()
         .domain([0,categories.length])
         .range([0,480]);

  var colorScale = d3.scale.quantize()
         .domain([0,categories.length])
         .range(colors);

            var canvas1 = d3.select("#graph-"+field)
                   .append('svg')
                   .attr({'width':900,'height':550});

  var grids = canvas1.append('g')
           .attr('id','grid')
           .attr('transform','translate(150,10)')
           .selectAll('line')
           .data(grid)
           .enter()
           .append('line')
           .attr({'x1':function(d,i){ return i*30; },
              'y1':function(d){ return d.y1; },
              'x2':function(d,i){ return i*30; },
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
     .tickValues(d3.range(17));

  var y_xis = canvas1.append('g')
           .attr("transform", "translate(150,85)")
           .attr('id','yaxis')
           .call(yAxis);

  var x_xis = canvas1.append('g')
           .attr("transform", "translate(150,480)")
           .attr('id','xaxis')
           .call(xAxis);

  var chart = canvas1.append('g')
           .attr("transform", "translate(150,0)")
           .attr('id','bars-'+field)
           .selectAll('rect')
           .data(dollars)
           .enter()
           .append('rect')
           .attr('height',19)
           .attr({'x':0,'y':function(d,i){ return yscale(i)+75; }})
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
           .attr({'x':function(d) {return xscale(d)-40; },'y':function(d,i){ return yscale(i)+90; }})
           .text(function(d){ return d+"%"; }).style({'fill':'#fff','font-size':'14px'});
}
