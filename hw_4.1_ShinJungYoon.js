const getDivisors = num => {
    const result = [];
    let i = 1;
    while ( i <= Math.sqrt(num)) {
        if (num % i === 0) {
            result.push(i);
            if (num/i!== i) result.push(num/i)
        }
        i++
    }
    return result.sort((x, y) => x - y);
};