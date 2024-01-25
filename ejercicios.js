function newArray(n) {
    let array = [];

    for (i = 0; i < n; i++) {
        array[i] = i+1;
    }
    return array;
}

console.log(newArray(7));