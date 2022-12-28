console.log("ss")

$( "#myDiv" ).css( "border", "3px solid red" );


var TasksArray = new Array();
var val = document.getElementById('Task');
var active = document.getElementById('active');


document.querySelector('#Task').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        TasksArray.push({val:val.value,active:active.checked?"checked='true'":"", id:TasksArray.length+1});
        console.log(TasksArray);
        document.getElementById('Task').value="";
        document.getElementById('active').checked=false;

       $("#list").empty();

for(var i = 0; i <TasksArray.length; i++) {

$("#list").append($("<tr><td>  <input "+TasksArray[i].active+" type=checkbox id=" + TasksArray[i].id+"check" +" >").append("</td><span id=" + TasksArray[i].id+"inp" + "> &nbsp;"+TasksArray[i].val+"</span></tr>"))
$('#1inp').addClass('line-through');

}



    }
});


  