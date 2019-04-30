//Robin Han
// Softdev2 pd07
// K21 --  Onions, Bell Peppers, and Celery, Oh My!  JS and the Holy Trinity
// 2019-04-29

var grades = document.getElementById('grades');
var medEthn = document.getElementById('medEthn');
var percEthn = document.getElementById('percEthn');

d3.csv('https://raw.githubusercontent.com/robinhanstuy/SoftDev2/master/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.csv').then(function(data) {
  medEthn.innerHTML = medianNumEthnicity(data, '20112012', 'asian');
  var perEthnicity = percentEthnicity(data, '20112012', 'asian');
  var tmp = '';
  perEthnicity.forEach(function(obj) { tmp += obj.name + ": " + obj.ethnicity +'% <br>'; });
  var str = function(perEthnicity){
    var tmp = '';
  }
  percEthn.innerHTML = (tmp);
  grades.innerHTML = numGrades(data, '20112012', 'grade10', 'grade3');
});

var numGrades = function(data, years, grade1, grade2){
  var yearData = findYear(data, years);
  var gradeData = yearData.filter(function(school){ return school[grade1] && school[grade2]; });
  return gradeData.length;
};

var findYear = function(data, years){
  return data.filter(function(n){ return n.schoolyear == years; });
};

var percentEthnicity = function(data, years, ethnicity){
  var ethnicity_index = ethnicity + '_num';
  var yearData = findYear(data, years);
  var ethnicityData = yearData.map(function(school){
    return {'name': school.Name, 'ethnicity': Math.round((school[ethnicity_index] / school.total_enrollment) * 100)};
  });
  return ethnicityData;
};

var medianNumEthnicity = function(data, years, ethnicity){
  var ethnicity_index = ethnicity + '_num';
  var yearData = findYear(data, years);
  var ethnicityData = yearData.map(function(school){ return parseInt(school[ethnicity_index],10); });
  ethnicityData.sort();
  if (ethnicityData.length % 2 == 0){
    return (ethnicityData[ethnicityData.length / 2] + ethnicityData[ethnicityData.length / 2 + 1]) / 2;
  }

  return ethnicityData[Math.ceil(ethnicityData.length / 2)];
}
