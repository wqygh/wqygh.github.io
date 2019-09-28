var csv = d3.csv("../asset/data/publication_list.csv")

csv.then(function(data){

  var pub_list = d3.select("#pub_list")
  pub_list.selectAll("p")
          .data(data)
          .enter()
          .append("p")
          .attr("id", "pub_list_item")
          .text(function (d, i){return i+1 + ". " + d.title + ", " + d.year+ ", ";});

  var pub_list_item = d3.selectAll("#pub_list_item")
  pub_list_item.append("a")
               .data(data)
               .attr("href", d => d.link)
               .text(d => d.journal)
               .attr("class", "pub_item_link")
               .attr("target", "_blank")
})