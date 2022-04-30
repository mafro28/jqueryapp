function calsPerDay() {
  function find(id) { return document.getElementById(id) }

  var age = find("age").value
  var height = find("height").value * 2
  var weight = find("weight").value / 2
  var result = 0
  if (find("male").checked)
      result = (13.75 * weight) + (5.0 * height - (6.75 * age))
  else if (find("female").checked)
      result = (9.56 * weight) + (1.84 * height - (4.67 * age))
  find("totalCals").innerHTML = Math.round( result )
}
calsPerDay()

//Men : BMR=(13.75 x W) + (5.0 x H) - (6.75 x A)
//Women: BMR=(9.56 x W) + (1.84 x H) - (4.67 x A)