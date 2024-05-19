document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    //Validating inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid positive number for you weight and height';
        return;
    }

    //BMI calculation
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    //Display result
    document.getElementById('result').textContent = `Your BMI is ${bmi}.`;
});