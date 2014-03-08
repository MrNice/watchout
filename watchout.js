/******************************************************************************/
/* GAME                                                                       */
/******************************************************************************/
var dotFactory = function(nDots){
  return _(_.range(nDots)).map(function(aDot){
    return aDot;
  });
};

var initSvg = function() {
  var svg = d3.select('body')
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append('g');
  return svg;
};

var initDots = function(data){
  // DATA JOIN: Join data with new elements if any
  var dots = svg
    .selectAll('g')
    .data(data, function(d) {return d;});
  //
  // ENTER: Create new elements as needed
  dots
    .enter()
    .append('circle')
    .attr('cx', function(){return Math.random()*width;})
    .attr('cy', function(){return Math.random()*height;})
    .attr('r',  width / 100)
    .attr('fill', 'black');
  return dots;
};

var update = function(dots) {
  var x = Math.random()*width;
  var y = Math.random()*height;
  dots
    .transition()
    .attr('transform','translate(' + x + ', ' + y + ')');
  return dots;
};

/******************************************************************************/
/* GLOBAL                                                                     */
/******************************************************************************/
var width  = 600;
var height = 500;
var timeInterval = 1000;
var dataset = dotFactory(15);

/******************************************************************************/
/* RUNTIME                                                                    */
/******************************************************************************/
// INIT & FIRST UPDATE 
var svg = initSvg();
var dots = initDots(dataset);


// TIMER: Randomize dots' position
setInterval(function() { return update(dots); }, timeInterval);
