const sample = [
  {
    language: "COINBASE",
    start: 5000,
    end: 500000,
    color: "#80cbc4",
  },
  {
    language: "LMAX",
    start: 80,
    end: 500,
    color: "#80cbc4",
  },
  {
    language: "NYSE",
    start: 31,
    end: 103,
    color: "#80cbc4",
  },
  {
    language: "DIGITAL PRIME",
    start: 11,
    end: 22,
    color: "#80cbc4",
  },
];
const beginValue = 0; // Beginning value for the segment
var endValue = 500000; // Ending value for the segment

const svg = d3.select("svg");
const svgContainer = d3.select("#container");

const margin = 80;
const width = 1300 - 2 * margin;
const height = 400 - 2 * margin;

const chart = svg
  .append("g")
  .attr("transform", `translate(${margin}, ${margin})`);

const xScale = d3
  .scaleLinear()
  .range([0, width])
  .domain([beginValue, endValue]);

const yScale = d3
  .scaleBand()
  .range([height, 0])
  .domain(sample.map((s) => s.language))
  .padding(0.8);

var xAxis = chart
  .append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

// Add lines from ticks
chart
  .selectAll(".tick")
  .append("line")
  .attr("class", "tick-line")
  .attr("x1", 0)
  .attr("x2", 0)
  .attr("y1", -height)
  .attr("y2", 0)
  .attr("stroke", "gray");

var yAxis = chart.append("g").call(d3.axisLeft(yScale).tickFormat("").tickSize(0));
yAxis.selectAll(".tick").attr("display", "none");

const barGroups = chart
  .selectAll()
  .data(sample)
  .enter()
  .append("g");


barGroups
  .append("rect")
  .attr("class", "bar")
  .attr("y", (g) => yScale(g.language))
  .attr("x", (g) => xScale(g.start))
  .attr("height", yScale.bandwidth())
  .attr("width", (g) => xScale(g.end) - xScale(g.start))
  .attr("fill", (g) => g.color);

barGroups
  .append("text")
  .attr("class", "value")
  .attr("x", (g) => xScale(g.start))
  .attr(
    "y",
    (g) => yScale(g.language) + yScale.bandwidth() + 24
  )
  .attr("text-anchor", "right")
  .text((g) => `${g.language}  \u00A0 ${g.start.toLocaleString('en-US')}-${g.end.toLocaleString('en-US')}`);

barGroups
  .append("line")
  .attr("class", "bar")
  .style("stroke-dasharray", ("3, 3"))
  .attr('x1', (g) => xScale((g.start)))
  .attr('y1', (g) => yScale(g.language) + yScale.bandwidth())
  .attr("x2", (g) => xScale((g.start)))
  .attr("y2", height)
  .attr("stroke", "gray");


svg
  .append("text")
  .attr("class", "label")
  .attr("x", margin)
  .attr("y", height + margin * 1.7)
  .attr("text-anchor", "right")
  .text("LATENCY (µs)");

svg
  .append("text")
  .attr("class", "title")
  .attr("x", width / 2 + margin)
  .attr("y", 40)
  .attr("text-anchor", "middle")
  .text("Segment Chart");


function updateChart() {
  // Remove old chart elements
  chart.selectAll(".bar").remove();
  chart.selectAll(".value").remove();

  // Update the xScale domain with the new end value
  xScale.domain([beginValue, endValue]);
  xAxis.transition().duration(100).call(d3.axisBottom(xScale));

  chart
    .selectAll(".tick")
    .append("line")
    .attr("class", "tick-line")
    .attr("x1", 0)
    .attr("x2", 0)
    .attr("y1", -height)
    .attr("y2", 0)
    .attr("stroke", "gray");    // Add new bars

  const newBars = barGroups
    .selectAll(".bar")
    .data(sample)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("y", (g) => yScale(g.language))
    .attr("height", yScale.bandwidth())
    .attr("fill", (g) => g.color);

  // Update the width of the new bars based on the new xScale
  newBars
    .attr("x", (g) => xScale(g.start))
    .attr("width", (g) => xScale(g.end) - xScale(g.start));

  // Add new value labels
  barGroups
    .selectAll(".value")
    .data(sample)
    .enter()
    .append("text")
    .attr("class", "value")
    .attr("x", (g) => xScale(g.start))
    .attr("y", (g) => yScale(g.language) + yScale.bandwidth() + 24)
    .attr("text-anchor", "right")
    .text((g) => `${g.language}  \u00A0 ${g.start.toLocaleString('en-US')}-${g.end.toLocaleString('en-US')}`);

  barGroups
    .append("line")
    .attr("class", "bar")
    .style("stroke-dasharray", ("3, 3"))
    .attr('x1', (g) => xScale((g.start)))
    .attr('y1', (g) => yScale(g.language) + yScale.bandwidth())
    .attr("x2", (g) => xScale((g.start)))
    .attr("y2", height)
    .attr("stroke", "gray");


}

const transitionValue = (t) => 500022 - (d3.scaleLog().domain([1.000, 1000001.00]).range([22, 500000])(Math.pow(d3.easeExpOut(t), 2)*1000000+1));


//]]>
