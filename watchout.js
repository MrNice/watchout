var width  = 600;
var height = 500;

var svg = d3.select('body').append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" +  (width / 2) + "," + (height / 2) + ")");

var dotFactory = function(nDots){
  return _(_.range(nDots)).map(function(aDot){
    return {name:aDot};
  });
};

// extensions of dotFactory