$(function(){
  var API = 'https://api.uptimerobot.com/getMonitors?apiKey=u572450-279f9c50c40604c0293f79b7&format=json&noJsonCallback=1';
  $.getJSON(API, function( data ) {
   var results = data.monitors.monitor;
   var resultsLen = results.length;

   var output = "<table class='table table-striped'>"; 
   output +="<thead class='thead-dark'>";
   output += "<tr>";   
   output += "<th scope='col'>#</th>";
   output += "<th scope='col'>Site Name</th>";
   output += "<th scope='col'>Site Url</th>";
   output += "<th scope='col'>Site Interval&nbsp;&nbsp;&nbsp;</th>";
   output += "<th scope='col'>Site Status</th>";
   output += "</tr>";
   output +="</thead>";
   output += "<tbody>";

   for(var i=0; i<resultsLen; i++){
    var status = results[i].status;
    output += "<tr>";
    output += "<td>"+(i+1)+"</td>";
    output += "<td>"+results[i].friendlyname+"</td>";
    output += "<td><a href="+results[i].url+" target='_blank'>"+results[i].url+"</a></td>";
    output += "<td>"+results[i].interval+"</td>";
    if(status==2){
     output += "<td>Site is Up</td>";
   }else{
     output += "<td>Site is Down</td>";
   }
   output += "</tr>";
 }
 
 output += "</tbody>";
 output += "</table>"
 $("#results").append(output);

});  
});

