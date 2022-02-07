const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
  return names[0]
} else if (strokes <= par - 2){
  return names[1]
} else if (strokes == par - 1){
  return "Birdie"
} else if (strokes == par) {
  return "Par"
} else if (strokes == par +1){
  return "Bogey"
} else if (strokes == par +2){
  return "Double Bogey"
} else if (strokes >= par + 3){
  return "Go Home!"
}
 
  // Only change code above this line
}

golfScore(5, 4);