// Code your solution here
function findMatching(arr, args){
    return arr.filter(possibleMatch => possibleMatch.toLowerCase() === args.toLowerCase()
)};

function fuzzyMatch(arr, args){
    return arr.filter(possibleMatch => possibleMatch.charAt(0).toLowerCase() === args.charAt(0).toLowerCase()
)};

function matchName(arr, args){
    return arr.filter(possibleMatch => possibleMatch.name === args
)};
