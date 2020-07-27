//Math Extensions Library
Math.randomDec = function (low, high) {
    //return a random decimal between low (inclusive) and high (exlusive)
    return Math.random() * (high - low) + low;
}

Math.randomInt = function (low, high) {
    //return a random integer between low (inclusive) and high (exlusive)
    return Math.floor(Math.random() * (high - low) + low);
}