var csv = d3.csv("../asset/data/publication_list.csv")

csv.then(function(data){
    var pub_list = d3.select("#pub_list")
    pub_list.selectAll("a")
      .enter()
      .data(data)
      .append("a")
      .attr("href", data.link)
      .text(d.title)
})