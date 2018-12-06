var socket = io.connect('http://localhost:4444');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setInterval(function(){
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 1000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats",function(statistics){
    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>kadreri qanak</td><td>xot</td><td>xotaker</td><td>gishatich</td><td>mard</td><td>Astvac</td><td>Krak</td></tr>";
    for(var st of statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.framenumber+"</td>";
        tableHTML+="<td>"+st.xot+"</td>";
        tableHTML+="<td>"+st.xotaker+"</td>";
        tableHTML+="<td>"+st.gishatich+"</td>";
        tableHTML+="<td>"+st.mard+"</td>";
        tableHTML+="<td>"+st.astvac+"</td>";
        tableHTML+="<td>"+st.fire+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
    //console.log(statistics);
})

