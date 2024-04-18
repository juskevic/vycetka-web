/*MAIN SECTION*/
const denominations = new Map([
  [2000, ['count2000', 'total2000']],
  [1000, ['count1000', 'total1000']],
  [500, ['count500', 'total500']],
  [200, ['count200', 'total200']],
  [100, ['count100', 'total100']],
  [50, ['count50', 'total50']],
  [20, ['count20', 'total20']],
  [10, ['count10', 'total10']],
  [5, ['count5', 'total5']],
  [2, ['count2', 'total2']],
  [22, ['countEuro', 'totalEuro']] // Assuming 22 is the denomination for Euro
]);

const totalElements = new Map();
denominations.forEach(([_, totalId]) => {
  totalElements.set(totalId, document.getElementById(totalId));
});

document.getElementById('inputsContainer').addEventListener('input', function (event) {
  const inputId = event.target.id;
  const denomination = denominations.get(inputId)[0];
  const totalId = denominations.get(inputId)[1];
  calculateTotal(denomination, inputId, totalId);
});

function calculateTotal(denomination, countInputId, totalId) {
  const count = document.getElementById(countInputId).value;
  const total = count * denomination;
  totalElements.get(totalId).textContent = total;
}
