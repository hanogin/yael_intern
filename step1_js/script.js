// console.log("ss")

$("#myDiv").css("border", "3px solid red");


var TasksArray = new Array();
var val = document.getElementById('Task');
var active = document.getElementById('active');



// var checkboxes = document.querySelectorAll("input[type=checkbox][name=settings]");

// // Select all checkboxes with the name 'settings' using querySelectorAll.
// let enabledSettings = []

// checkboxes.forEach(function(checkbox) {
//   checkbox.addEventListener('change', function() {
//     enabledSettings = 
//       Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
//       .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
//       .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.

//     console.log(enabledSettings)
//   })
// });


const wrapper = document.getElementById('list');
wrapper.addEventListener('click', (event) => {
    var checked = event.srcElement.checked;
    if (checked == true) {
        $('#' + event.srcElement.id[0] + 'inp').addClass("line-through");
    } else {
        $('#' + event.srcElement.id[0] + 'inp').removeClass("line-through");
    }
    // const isButton = event.target.nodeName === 'BUTTON';
    // if (!isButton) {
    //   return;
    // }

    // console.dir(event.target.id);
})

document.querySelector('#Task').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        TasksArray.push({ val: val.value, active: active.checked ? "checked='true'" : "", id: TasksArray.length + 1 });
        console.log(TasksArray);
        document.getElementById('Task').value = "";
        document.getElementById('active').checked = false;
        $("#list").empty();
        for (var i = 0; i < TasksArray.length; i++) {
            $("#list").append($("<tr><td>  <input " + TasksArray[i].active + " name='settings' type=checkbox id=" + TasksArray[i].id + "check" + " >").append("</td><span id=" + TasksArray[i].id + "inp" + "> &nbsp;" + TasksArray[i].val + "</span></tr>"))
        }
    }
});
