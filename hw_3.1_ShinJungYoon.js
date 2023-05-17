const isValidNumber = input => {
    const N = parseInt(input);
    if( Number.isInteger(input)){
        return N >= 1 && N <= 9;
    }
};
