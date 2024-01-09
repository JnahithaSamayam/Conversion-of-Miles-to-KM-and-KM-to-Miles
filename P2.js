function convertKmToMiles() {
    const kilometers = parseFloat(document.getElementById("kilometers").value);
    const miles = kilometers / 1.60934;
    document.getElementById("resultKmToMiles").innerHTML = kilometers + " kilometers is equal to " + miles.toFixed(2) + " miles.";
}

function convertMilesToKm() {
    const miles = parseFloat(document.getElementById("miles").value);
    const kilometers = miles * 1.60934;
    document.getElementById("resultMilesToKm").innerHTML = miles + " miles is equal to " + kilometers.toFixed(2) + " kilometers.";
}
