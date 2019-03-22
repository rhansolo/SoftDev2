var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


var x_value = function(d) { return d.Calories;},
    x_scale = d3.scaleLinear().range([0, width]),
    x_map = function(d) { return x_scale(x_value(d));},
    x_axis = d3.axisBottom(x_scale);

var y_value = function(d) { return d["Protein (g)"];},
    y_scale = d3.scaleLinear().range([height, 0]),
    y_map = function(d) { return y_scale(y_value(d));},
    y_axis = d3.axisLeft(y_scale);


var c_value = function(d) { return d.Manufacturer;},
    color = d3.scaleOrdinal(d3.schemeCategory10);


var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.csv("cereal.csv", function(error, data) {
  data.forEach(function(d) {
    d.Calories = +d.Calories;
    d["Protein (g)"] = +d["Protein (g)"];
  });

  x_scale.domain([d3.min(data, x_value)-1, d3.max(data, x_value)+1]);
  y_scale.domain([d3.min(data, y_value)-1, d3.max(data, y_value)+1]);

  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(x_axis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Calories");

  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(y_axis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Protein (g)");

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", x_map)
      .attr("cy", y_map)
      .style("fill", function(d) { return color(cValue(d));})
});
