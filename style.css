const shipments = {
    "TRK001": { status: "In Transit", location: "Lagos" },
    "TRK002": { status: "Processing", location: "Abuja" },
    "TRK003": { status: "Delivered", location: "Port Harcourt" }
};

function checkTrack() {
    // 1. Get what the user typed
    let input = document.getElementById("trackingInput").value.toUpperCase().trim();
    
    // 2. Find where to show the result
    let resultArea = document.getElementById("statusResult");

    // 3. Check if the number exists
    if (shipments[input]) {
        let data = shipments[input];
        resultArea.innerHTML = `<h3>Status: ${data.status}</h3><p>Location: ${data.location}</p>`;
        resultArea.style.color = "green";
    } else {
        resultArea.innerHTML = "<p>Invalid Number. Try TRK001</p>";
        resultArea.style.color = "red";
    }
}