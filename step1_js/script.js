
var TasksArray = new Array();
var val = document.getElementById('Task');

document.getElementById('list').addEventListener('click', (event) => {
    var checked = event.srcElement.checked;
    let index=TasksArray.findIndex(x=>x.id==event.srcElement.id[0]);
    TasksArray[index].active=checked==true?"checked='true'":"";;
    if (checked == true) {
        $('#' + event.srcElement.id[0] ).addClass("line-through");
    } else {
        $('#' + event.srcElement.id[0]).removeClass("line-through");
    } 

})
function add()
{
    TasksArray.push({ val: val.value, active:"", id: TasksArray.length + 1 });
    UpdatedList(TasksArray);
}

function filter(index)
{
    switch(index) {
        case 1:
            UpdatedList(TasksArray);
          break;
        case 2:
            UpdatedList(TasksArray.filter(x=>x.active==false));
          break;
          case 3:
            UpdatedList(TasksArray.filter(x=>x.active=="checked='true'"));
          break;
        default:
      }   
}



document.querySelector('#Task').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        TasksArray.push({ val: val.value, active:"", id: TasksArray.length + 1 });
        UpdatedList(TasksArray);
    }
});

function UpdatedList(list){
    document.getElementById('Task').value = "";
    $("#list").empty();
    for (var i = 0; i < list.length; i++) {
        $("#list").append($("<tr><td>  <input " + list[i].active + " name='settings' type=checkbox id=" + list[i].id + "check" + " >").append("</td><span id=" + list[i].id  + "> &nbsp;" + list[i].val + "</span></tr>"))
    if(list[i].active!=""){
        $('#'+list[i].id ).addClass("line-through");
    }

    } 
}
