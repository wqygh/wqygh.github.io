var csv = d3.csv("../asset/data/publication_list.csv")

csv.then(function(data){
  console.log(data)
  var pub_list = d3.select("#pub_list")
  pub_list.selectAll("a")
          .data(data)
          .enter()
          .append("a")
          .attr("href", function (d) {return d.link;})
          .text(function (d){return d.title;});
})