
var i = 0;

function takeANumber (line) {
  i++;
  line.push(i);

  return "You are ticket number:" + i
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine (katzDeli) {
  var line = [];
  for (var i = 0; i < katzDeli.length; i++) {
    line.push(" "+ [i+1] +". " +katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }
  else {
    return "The line is currently:" + line
  }
}

