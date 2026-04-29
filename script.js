// This is like a "Mini Database" inside your code
const shipments = {
    "TRK001": { status: "In Transit", location: "Lagos, Nigeria", date: "April 30, 2026" },
    "TRK002": { status: "Cleared Customs", location: "Abuja, Nigeria", date: "May 2, 2026" },
    "TRK003": { status: "Delivered", location: "Port Harcourt", date: "April 25, 2026" }
};

function checkTrack() {
    let id = document.getElementById("trackingInput").value.toUpperCase();
    let resultArea = document.getElementById("statusResult");

    if (shipments[id]) {
        let data = shipments[id];
        resultArea.style.color = "green";
        resultArea.innerHTML = `
            <p><strong>Status:</strong> ${data.status}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Expected:</strong> ${data.date}</p>
        `;
    } else {
        resultArea.style.color = "red";
        resultArea.innerHTML = "Invalid Tracking ID. Please try TRK001, TRK002, or TRK003.";
    }
}