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

var top_button = d3.select("body")
                   .append("button")
                   .attr("onclick", "top_func()")
                   .attr("id", "top")
                   .text("Top")

var button = document.getElementById("top")
window.onscroll = function() {scroll_func()}

function scroll_func() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                button.style.display = "block";
        } else {
                button.style.display = "none";
        } 
}

function top_func() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera   
}