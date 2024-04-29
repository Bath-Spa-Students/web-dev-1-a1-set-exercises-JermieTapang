    // JavaScript code
    function calculatePetrolCost() {
        var distance = parseFloat(document.getElementById('distance').value);
        var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
        
        if (isNaN(distance) || isNaN(fuelPrice)) {
          alert('Please enter valid numbers.');
          return;
        }
        
        var petrolCost = (distance / 100) * fuelPrice;
        document.getElementById('result').innerHTML = "Petrol cost: AED" + petrolCost.toFixed(2);
      }