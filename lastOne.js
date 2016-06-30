var button;
var generatedGroups = [];
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var nameArr = [];


$(document).ready(function() {

//button is temporarily hard-code: will be replaced by the value of the pressed button



$(".buttons").on("click", "button", function () {
  button = parseInt($(this).attr("id"));
  generatedGroups = generateGroups();

  // console.log(button);
  console.log(generatedGroups);

});

$(".generate").on("click","button", function () {
  //  console.log(generatedGroups);
    for(var i =0; i < generatedGroups.length; i++){
        var tempGroup = "group" + i;
            $(".groupsClass").append("<div id=\""+tempGroup+"\"><ul>" + "Group"+(i + 1) + "</ul></div>");
            console.log(tempGroup);
        for(var j =0; j < generatedGroups[i].length; j++){
            $("#"+tempGroup).append("<li>" + generatedGroups[i][j] + "</li>");
          }
}



});

//integer randomization is now possible
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//main function to get an array of
function generateGroups() {

  //randomizes the numbers in numArr
  numArr = shuffle(numArr);
  //assigns associated names to the randomized numbers, creates an array of names in random order
  getName(numArr,nameArr);
  var chunk = nameArr.length/button;
  console.log(chunk);

  //creates an array of array: the nameArr order has already been randomized, so this breaks it into section of 'chunk' number of names.
  //Chunk is currently hard-coded, but will be assigned the value of the pressed button.
  var nameGroups = createGroupedArray(nameArr, chunk);

  return nameGroups;

}

//SHUFFLE.
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

//takes in our array and a 'chunk size' to create groups of 'chunk' length
var createGroupedArray = function(arr, chunkSize) {
    var groups = [], i;
    for (i = 0; i < arr.length; i += chunkSize) {
        groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
}

//iterates over our randomized number array, matches each number with their associated name string, returns to the nameArr.
function getName(arr, nameArr){
  for (i = 0; i < arr.length; i++){
    switch (arr[i]) {
      case 1:
        nameArr[i]= "Richard";
        break;
      case 2:
        nameArr[i]= "Jon";
        break;
      case 3:
        nameArr[i]= "Sahasha";
        break;
      case 4:
        nameArr[i]= "Tracy";
        break;
      case 5:
        nameArr[i]= "Justin";
        break;
      case 6:
        nameArr[i]= "Hillary";
        break;
      case 7:
        nameArr[i]= "Liz";
        break;
      case 8:
        nameArr[i]= "Brian V";
        break;
      case 9:
        nameArr[i]= "Donovan";
        break;
      case 10:
        nameArr[i]= "Connor";
        break;
      case 11:
        nameArr[i]= "Cormac";
        break;
      case 12:
        nameArr[i]= "Ryan";
        break;
      case 13:
        nameArr[i]= "Kyle";
        break;
      case 14:
        nameArr[i]= "Andrew";
        break;
      case 15:
        nameArr[i]= "Brian A";
        break;
      case 16:
        nameArr[i]= "Trent";
        break;
      case 17:
        nameArr[i]= "Anthony";
        break;
      case 18:
        nameArr[i]= "Katie";
        break;
      case 19:
        nameArr[i]= "Megan";
        break;
      case 20:
        nameArr[i]= "Chewbaxter";
        break;
      default:
        nameArr[i] = "NO ONE";
      }
    }
  };

//DO THE THING

});
