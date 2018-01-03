console.log("this is d3"); 

     // const w = 75;
     // const h = 600;
        
     // d3.select('body')
     //        .append('svg')
     //        .append('rect')
     //        .attr('width', w)
     //        .attr('height', h)
     //        .style('fill', 'blue');

const w = 400;
const h = 250;
const padding = 4;
const data = [50,100,150,200,250,130,210,30,170];

let svg = d3.select('body')
            .append('svg')
            .attr('width', w)
            .attr('height', h);

svg.selectAll('rect')
  .data(data)
  .enter()//create placeholder elements for data points
  .append('rect')//add to each rectangle
     .attrs({
      x: (d, i) => i * (w / data.length),
      y: d => h - d,
      width: w / data.length - padding,
      height: d => d,
      fill: 'orange'
});

svg.selectAll('text')
  .data(data)
  .enter()
    .append('text')
    .text(d => d)
    .attrs({
      x: (d,i) => i * (w / data.length) + (w / data.length - padding) / 2,
      y: (d) => h - d + 20 //20 is the padding
         });