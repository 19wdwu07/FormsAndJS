console.log('forms and js');

//reading form data
// document.getElementById('submit').addEventListener('click', function(){
//     var name = document.getElementById('name').value;
//     console.log(name);
//
//     var address = document.getElementById('address').value;
//     console.log(address);
//
//     document.getElementsByTagName('div')[0].innerHTML = '</br>' +name + '</br>' + address;
// });

document.getElementById('formsData').innerHTML
+= '<br> <button class="myButton"> Names </button> <button class="myButton">ProjectA </button>'
+ ' <button class="myButton">  ProjectB </button> <button class="myButton">  ProjectC  </button> <button class="myButton">  Average </button>';

//Performance Assessment
var names=[];
var projectA =[];
var projectB =[];
var projectC =[];
var averagePerformance = [];

var n = parseInt(prompt('Enter the number of employees'));

document.getElementById('saveData').addEventListener('click', function(){
console.log(names.length);
     if (names.length < n){

    var ename = document.getElementById('ename').value;
    console.log(ename);

    var projA = parseInt(document.getElementById('projectA').value);
    console.log(projA);
    var projB = parseInt(document.getElementById('projectB').value);
    console.log(projB);
    var projC = parseInt(document.getElementById('projectC').value);
    console.log(projC);

    var average = ((projA + projB + projC)/3).toFixed(2);
    console.log(average);
    document.getElementById('average').disabled = false;
    document.getElementById('average').value = average;
		// console.log(names, projectA, projectB, projectC, averagePerformance, average);
	   document.getElementById('formsData').innerHTML += '<br> <button class="myButton">' + ename
     + '</button> <button class="myButton">' + projA
     + '</button> <button class="myButton">'  + projB
     + '</button> <button class="myButton">' + projC
     + '</button> <button class="myButton">' + average +'</button>';

    document.getElementById('average').value = average;

    names.push(ename);
    projectA.push(projA);
    projectB.push(projB);
    projectC.push(projC);
    averagePerformance.push(average);
    // console.log(names, projectA, projectB, projectC, averagePerformance);
  } else {
    alert('Sorry,cannot store more employees\' details');
  }
});

document.getElementById('anotherData').addEventListener('click',function() {
  document.getElementById('ename').value = " ";
  document.getElementById('projectA').value = " ";
  document.getElementById('projectB').value = " ";
  document.getElementById('projectC').value = " ";
  document.getElementById('average').value = " ";
    document.getElementById('average').disabled = true;
});

document.getElementById('outstandingEmployee').addEventListener('click',function(fnames,favergae) {
  var max=0;
  for (var i=0; i < n; i++) {
    if (max < averagePerformance[i] ){
      max = averagePerformance[i];
      outstandingName = names[i];
    }

  }
 console.log(max, outstandingName)
document.getElementsByTagName('div')[0].innerHTML += '</br> </br> <h2 class="bg-info text-secondary"> ' + outstandingName + ' is outstanding with ' + max + '</h2>';

});


document.getElementById('assess').addEventListener('click',function(fnames,favergae) {

  for (var i=0; i < n; i++) {
    if (averagePerformance[i] >= 90 ){
      document.getElementsByTagName('div')[0].innerHTML += '</br> <h2 class="bg-info text-secondary">' + names[i] + ' gets an increment' + '</h2>';
    } else if (averagePerformance[i] >= 70 ){
      document.getElementsByTagName('div')[0].innerHTML += '</br> <h2 class="bg-info text-secondary">' + names[i] + ' can stay in the project team' +'</h2>';
  } else {
    document.getElementsByTagName('div')[0].innerHTML += '</br> <h2 class="bg-info text-secondary">' + names[i] + ' must be moved to another department' +'</h2>';
  }
}

});
