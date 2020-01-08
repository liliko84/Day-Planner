// var currentDay = document.getElementById("currentDay");
var currentDay = $("#currentDay");
var timeBlocks = $("#timeBlocks")

var day = moment();
// currentDay.textContent = day;
currentDay.text(day.format('dddd, MMMM Do YYYY'));

var times = {};
for (var i = 9; i <= 17; i++) {
  var hour = moment(i, "H").format('h A');
  times[hour] = null
}
console.log(times);

for(var i in times){
  console.log(i, times[i])
  var timeClass = "";

  if(day.isSame(moment(i, 'h A'), 'hour')){
    timeClass = 'present';
  }else if(day.isBefore(moment(i,'h A'),'hour')){
    timeclass = 'past';
  }else(day.isAfter(moment(i, 'h A'),'hour')); {
    timeClass = 'future';
  }

  var parent = $("<div>").addClass('row time-block');
  var hour = $("<div>").addClass('hour col-1').text(i);
  var desc = $("<textarea>").addClass('description col-10 ' + timeClass).val(times[i]);
  var saveBtn = $("<button>").addClass('btn saveBtn col-1').text('save')

  parent.append(hour, desc, saveBtn)
  timeBlocks.append(parent)
}






/* var data = {
  name: "Ben"
}
var myArr = ['dog', 'cat', 'iguana']
var someKey = "name"
console.log(data.name)
console.log(data.someKey)
console.log(myArr[1])
console.log(data['name'])
console.log(data[someKey]) */


/* function $$(val){
  return new $_$(val)
}
function $_$(val){
  this.isId = val[0] === "#";
  this.isClass = val[0] === '.'
  this.element = val.split("").slice(1).join("");
  this.text = function(str){
    if(this.isId){
      document.getElementById(this.element).textContent = str
    }
  }
} */