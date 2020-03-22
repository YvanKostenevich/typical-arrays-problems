exports.min = function min(array) {
    if (array === undefined) {
        return 0
    }
    if(array.length === 0){return 0}
    return array ? Math.min(...array) : 0;
}

exports.max = function max(array) {
    if (array === undefined) {
        return 0
    }
    if(array.length === 0){return 0}
    return Math.max(...array);
}

exports.avg = function avg(array) {
    if (array === undefined) {
        return 0
    }
    if(array.length === 0){return 0}
    return array.reduce((x, y) => x + y) / array.length;
}
