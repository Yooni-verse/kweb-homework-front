
const setRandomBgColor = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    
    const rand = 'rgb(' + R + ',' + G + ',' + B + ')';
    document.getElementById('color-box').style.backgroundColor = rand;
};