const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  // console.log(listOfNeighbours[i])
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log("neighbour :" + listOfNeighbours[i][j]);
  }
}

// console.log(listOfNeighbours[2][0]);
