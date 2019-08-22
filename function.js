module.exports.yell = function yell(str){
    return str.split("").join(" ").toUpperCase();
}

module.exports.randomRange = function randomRange(a,b){
    return Math.floor(Math.random() * (Math.max(a,b) - Math.min(a,b) + 1)) + Math.min(a,b);
}