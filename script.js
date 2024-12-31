// Get references to DOM elements
const baseCostInput = document.getElementById('baseCost');
const markupInput = document.getElementById('markup');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculateBtn');

const perLbPriceOutput = document.getElementById('perLbPrice');
const totalPriceOutput = document.getElementById('totalPrice');

// Add event listener on the Calculate button
calculateBtn.addEventListener('click', () => {
  // Convert input values to numbers
  const baseCost = parseFloat(baseCostInput.value);
  const markup = parseFloat(markupInput.value);
  const weight = parseFloat(weightInput.value);

  // Basic validation
  if (isNaN(baseCost) || isNaN(markup) || isNaN(weight)) {
    alert('Please enter valid numbers for all fields');
    return;
  }

  // Calculate markup price per pound
  // Markup is a percentage added to the base cost, e.g., if markup = 25, that means 25% more
  const markupMultiplier = 1 + (markup / 100);
  const pricePerLb = baseCost * markupMultiplier;

  // Calculate total price
  const totalPrice = pricePerLb * weight;

  // Display the results
  perLbPriceOutput.textContent = pricePerLb.toFixed(2);
  totalPriceOutput.textContent = totalPrice.toFixed(2);
});
