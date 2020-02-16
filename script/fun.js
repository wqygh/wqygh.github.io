var csv = d3.csv("../asset/data/fun_list.csv")

csv.then(function(data){

    console.log(data)
    var fun_list = d3.select('#fun_list')
    fun_list.append("table")
            .attr("id", "fun_list_table")
    
    var fun_table = d3.select("#fun_list_table")
    fun_table.selectAll("#fun_list_item")
             .data(data)
             .enter()
             .append("tr")
             .attr("id", "fun_list_row")
             .append("td")
             .attr("id", "fun_list_file")
             .exit()
    fun_table.selectAll("#fun_list_row")
             .append("td")
             .attr("id", "fun_list_description")
    
    var fun_description = d3.selectAll("#fun_list_description")
    fun_description.data(data)
                   .text(d => d.description)
    
    var fun_video = d3.selectAll("#fun_list_file")
    fun_video.data(data)
             .filter(d => d.file.includes(".mp4"))
             .append("video")
             .attr("src", d => d.file)
             .attr("type", "video/mp4")
             .attr("height", "200")
             .attr("autoplay", "")
             .attr("loop", "")

})