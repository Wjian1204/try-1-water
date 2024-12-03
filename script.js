setInterval(() => {
    fetch('http://blynk-cloud.com/BWETyo1RTml1Grzi1GAGfDSZ0xhtaHb5/get/V0')
        .then(response => response.json())
        .then(data => {
            document.getElementById('waterLevel1').innerText = data[0];  // Display the water level 1
        })
        .catch(error => console.log("Error fetching data: " + error));
}, 1000);  // Update every 1 second
