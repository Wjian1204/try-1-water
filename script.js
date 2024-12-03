setInterval(() => {
    fetch('http://blynk-cloud.com/<YourAuthToken>/get/V1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('sensorValue').innerText = data[0];  // Display the sensor value
        })
        .catch(error => console.log("Error fetching data: " + error));
}, 1000);  // Update every 1 second
