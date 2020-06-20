var csv = d3.csv("../asset/data/fun_list.csv")

csv.then(function(data){

    console.log(data)

    var fun_table = d3.select("#fun_list")
    fun_table.selectAll("#fun_list_item")
             .data(data)
             .enter()
             .append("div")
             .attr("id", "fun_list_row")
             .append("p")
             .attr("id", "fun_list_file")
             .attr("class", "fun")
             .exit()
    fun_table.selectAll("#fun_list_row")
             .append("p")
             .attr("id", "fun_list_description")
             .attr("class", "fun")
    
    var fun_description = d3.selectAll("#fun_list_description")
    fun_description.data(data)
                   .text(d => d.description)
    
    var fun_video = d3.selectAll("#fun_list_file")
    fun_video.data(data)
             .filter(d => d.file.includes(".mp4"))
             .append("video")
             .attr("src", d => d.file)
             .attr("type", "video/mp4")
             .attr("height", "250px")
             .attr("controls", "")
             .attr("loop", "")

    var fun_image = d3.selectAll("#fun_list_file")
    fun_image.data(data)
             .filter(d => d.file.includes(".jpg"))
             .append("img")
             .attr("src", d => d.file)
             .attr("class", "fun")

    var fun_gif = d3.selectAll("#fun_list_file")
    fun_gif.data(data)
           .filter(d => d.file.includes(".gif"))
           .append("img")
           .attr("src", d => d.file)
           .attr("class", "fun")

    var fun_link = d3.selectAll("#fun_list_description")
    fun_link.data(data)
            .filter(d => d.link.includes("http"))
            .append("a")
            .attr("href", d => d.link)
            .text("here ")
            .attr("target", "_blank")
            .attr("class", "fun_item_link")

    fun_description.append("text").text(":)")

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