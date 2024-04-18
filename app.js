const inputs = document.querySelectorAll('.form-control');
const totalAll = document.getElementById('totalAll');

function calculateTotals() {
    let grandTotal = 0;
    inputs.forEach(input => {
        const id = input.id;
        const value = parseInt(input.value) || 0; // Get the input value or 0 if it's empty
        const totalCell = document.getElementById(`total${id.replace('count', '')}`);
        let total = 0;

        switch (id) {
            case 'count2000': total = value * 2000; break;
            case 'count1000': total = value * 1000; break;
            case 'count500': total = value * 500; break;
            case 'count200': total = value * 200; break;
            case 'count100': total = value * 100; break;
            case 'count50': total = value * 50; break;
            case 'count20': total = value * 20; break;
            case 'count10': total = value * 10; break;
            case 'count5': total = value * 5; break;
            case 'count2': total = value * 2; break;
            case 'countEuro': total = value * 22; break;
        }

        totalCell.textContent = `${total} Kč`;
        grandTotal += total;
    });
    totalAll.textContent = `${grandTotal} Kč`;
}

inputs.forEach(input => {
    input.addEventListener('input', calculateTotals);
});

calculateTotals();
