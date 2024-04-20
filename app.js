/* Calculating logic */
const inputs = document.querySelectorAll('.form-control');
const totalAll = document.getElementById('totalAll');
const minus8000 = document.getElementById('minus8000');

function calculateTotals() {
    let grandTotal = 0;
    let countEuroValue = 0;
    inputs.forEach(input => {
        const id = input.id;
        const value = parseInt(input.value) || 0;
        const totalCell = document.getElementById(`total${id.replace('count', '')}`);
        let total = 0;

        switch (id) {
            case 'count2000':
                total = value * 2000;
                break;
            case 'count1000':
                total = value * 1000;
                break;
            case 'count500':
                total = value * 500;
                break;
            case 'count200':
                total = value * 200;
                break;
            case 'count100':
                total = value * 100;
                break;
            case 'count50':
                total = value * 50;
                break;
            case 'count20':
                total = value * 20;
                break;
            case 'count10':
                total = value * 10;
                break;
            case 'count5':
                total = value * 5;
                break;
            case 'count2':
                total = value * 2;
                break;
            case 'count1':
                total = value * 1;
                break;
            case 'countEuro':
                total = value * 22;
                countEuroValue = total;
                break;
        }

        totalCell.textContent = `${total} Kč`;
        grandTotal += total;
    });

    if (grandTotal === 8000) {
        totalAll.style.color = 'green';
        totalAll.style.fontWeight = 'bold';
    } else {
        totalAll.style.color = '';
    }

    if (grandTotal < 8000) {
        minus8000.textContent = "0 Kč"
    } else if (countEuroValue !== 0) {
        minus8000.textContent = `${grandTotal - 8000} Kč` // Add separate logic here later
    } else {
        minus8000.textContent = `${grandTotal - 8000} Kč`
    }

    totalAll.textContent = `${grandTotal} Kč`;
}

inputs.forEach(input => {
    input.addEventListener('input', calculateTotals);
});

calculateTotals();

