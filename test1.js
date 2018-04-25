var svg = null;

svg = d3.select('#canvas-container').append('svg').on('contextmenu', function () {
  // reset the canvas click flag
  canvasClicked = false;

  // since the context menu event propagated back to the canvas, clear the selection
  nf.CanvasUtils.getSelection().classed('selected', false);

  // show the context menu on the canvas
  nf.ContextMenu.show();

  // prevent default browser behavior
  d3.event.preventDefault();
});

var defs = svg.append('defs');

var elemStyleFunc = function(element,d,i){

  console.log('element:',element);
  console.log('d:',d);
  console.log('i:',i);

};

defs.selectAll('marker')
  .data(['normal', 'ghost'])
  .enter()
  .append('marker')
  .attr('id', function (d) {
    return d;
  })
  .attr('viewBox','0 0 6 6')
  .attr('refX',5)
  .attr('refY',3)
  .attr('markerWidth',6)
  .attr('markerHeight',6)
  .attr('orient','auto')
  .attr('fill',function(d){
    if(d === 'ghost'){
      return '#aaaaaa';
    } else {
      return '#000000';
    }
  })
  .append('path')
  .attr('d', 'M2,3 L0,6 L6,3 L0,0 z');



d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
  .text(function(d) { return "I’m number " + d + "!"; });



// d3.select("body").style("background-color", "green");

// d3.selectAll("p")
//   .data([4, 8, 15, 16, 23, 42])
//   .style("font-size", function(d) { return d + "px"; });
