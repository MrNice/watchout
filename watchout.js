var svg;
var width  = 600;
var height = 500;

// DATA CREATION 
var dotFactory = function(nDots){
  return _(_.range(nDots)).map(function(aDot){
    return aDot;
  });
};
var initialize = function() {
  return d3.select('body')
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append('g');
}

var update = function(dotData) {
  // Join data
  var dots = svg.select('g').selectAll('circles')
    .data(dotData, function(d) {return d;});

  dots.enter()
    .append('circle')
    .attr('cx', function(){return Math.random()*width;})
    .attr('cy', function(){return Math.random()*height;})
    .attr('r', 20) // width = f(innerWidth) := width / 200
    .attr('fill', 'black');
};
svg = initialize();
update(dotFactory(15));