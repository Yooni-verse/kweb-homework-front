const levelup = [ 100, 60, 36, 22, 13, 8, 5, 3, 2, 1 ];

let level = 0;
let attempts = 0;

const getRandomBinaryResult = ratio => {
    return Math.random() * 100 < ratio;
};

const tryLevelUp = () => {
    attempts++;
    
    if (getRandomBinaryResult(levelup[level])) {
            level++;
            document.getElementById('gauge-bar').style.width = level * 10 + '%';
            document.getElementById('current-level').innerText = level;
        }

        document.getElementById('attempts').innerText = attempts;
        
        if (level >= 10) clearInterval(loopId);

};