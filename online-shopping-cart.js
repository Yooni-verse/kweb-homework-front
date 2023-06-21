const price = {
    apple: 700,
    orange: 800,
    lemon: 900,
};

let sum = 0;

for (const button of document.getElementsByClassName('add-to-cart')) {
    button.addEventListener('click', event => {
        const item = event.target.parentNode.parentNode.getAttribute('id');
        sum += price[item];
        document.getElementById('cost').innerText = sum;
    }); 
}