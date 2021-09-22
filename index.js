const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    //{year: "2016", result: "N/A"},
    {year: "2015", result: "N/A"},
    {year: "2014", result: "N/A"}
  ]

function superbowlWin(myArray){
    let winYear = myArray.find(elements => elements.result === "W")
    if (winYear)
        return winYear.year
    else
        return undefined

}

// function search(elements){
//     return elements.result === "W"
// }

console.log(superbowlWin(record))