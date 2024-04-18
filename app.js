function calculateTotal(denomination, countInputId, totalId) {
  const count = document.getElementById(countInputId).value;
  const total = count * denomination;
  document.getElementById(totalId).textContent = total;
}

document.getElementById('count2000').addEventListener('input', function() {
  calculateTotal(2000, 'count2000', 'total2000');
});
document.getElementById('count1000').addEventListener('input', function() {
  calculateTotal(1000, 'count1000', 'total1000');
});
