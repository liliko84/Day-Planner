// var currentDay = document.getElementById("currentDay");
var currentDay = $("#currentDay");
var timeBlocks = $("#timeBlocks");
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

  var parent = $("<div>").addClass('row time-block').attr('id', i);
  var hour = $("<div>").addClass('hour col-1').text(i);
  var desc = $("<textarea>").addClass('description col-10 ' + timeClass).val(times[i]);
  var saveBtn = $("<button>").addClass('btn saveBtn col-1').text('save')
 
  parent.append(hour, desc, saveBtn)
  timeBlocks.append(parent)
};

$(".saveBtn").on("click", function() {
  var userInput = $(this).siblings(".description").val();
  console.log(userInput)
 var id = $(this).parent().attr("id");
  console.log(id)
  localStorage.setItem(id, userInput);
}); 

$("textarea").each(function(){
  var hourInput = $(this).parent().attr("id");
  // hourInput = parseInt(hourInput);

  var task = localStorage.getItem(hourInput);
  console.log(task)
  $(this).val(task)
}); 

$("textarea").hover(function(){
  $(this).css("background-color", "green");
  }, function(){
  $(this).css("background-color", "red");
});