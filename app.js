// Function to calculate and display total for a given denomination
function calculateTotal(denomination, countInputId, totalId) {
  const count = document.getElementById(countInputId).value;
  const total = count * denomination;
  document.getElementById(totalId).textContent = total;
}

// Add event listeners to each count input
document.getElementById('count2000').addEventListener('input', function() {
  calculateTotal(2000, 'count2000', 'total2000');
});
document.getElementById('count1000').addEventListener('input', function() {
  calculateTotal(1000, 'count1000', 'total1000');
});
document.getElementById('count500').addEventListener('input', function() {
  calculateTotal(500, 'count500', 'total500');
});
document.getElementById('count200').addEventListener('input', function() {
  calculateTotal(200, 'count200', 'total200');
});
document.getElementById('count100').addEventListener('input', function() {
  calculateTotal(100, 'count100', 'total100');
});
document.getElementById('count50').addEventListener('input', function() {
  calculateTotal(50, 'count50', 'total50');
});
document.getElementById('count20').addEventListener('input', function() {
  calculateTotal(20, 'count20', 'total20');
});
document.getElementById('count10').addEventListener('input', function() {
  calculateTotal(10, 'count10', 'total10');
});
document.getElementById('count5').addEventListener('input', function() {
  calculateTotal(5, 'count5', 'total5');
});
document.getElementById('count2').addEventListener('input', function() {
  calculateTotal(2, 'count2', 'total2');
});
