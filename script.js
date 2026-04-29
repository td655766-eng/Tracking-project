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
}// This is your shipment database
const shipments = {
    "TRK001": { status: "In Transit", location: "Lagos, Nigeria", date: "April 30, 2026", type: "Air Freight" },
    "TRK002": { status: "Processing", location: "Abuja Warehouse", date: "May 5, 2026", type: "Ground" },
    "TRK003": { status: "Delivered", location: "Port Harcourt", date: "April 20, 2026", type: "Ocean Freight" },
    "EMPEROR-001": { status: "Arrived at Sort Facility", location: "Kano, Nigeria", date: "May 1, 2026", type: "Express" }
};

function checkTrack() {
    let id = document.getElementById("trackingInput").value.toUpperCase().trim();
    let resultArea = document.getElementById("statusResult");

    if (shipments[id]) {
        let data = shipments[id];
        resultArea.style.display = "block";
        resultArea.innerHTML = `
            <h3 style="color: #003366; margin-top:0;">Shipment Details</h3>
            <p><strong>Status:</strong> <span style="color: green;">${data.status}</span></p>
            <p><strong>Current Location:</strong> ${data.location}</p>
            <p><strong>Shipping Method:</strong> ${data.type}</p>
            <p><strong>Expected Delivery:</strong> ${data.date}</p>
        `;
    } else {
        resultArea.style.display = "block";
        resultArea.innerHTML = `<p style="color: red;">ID Not Found. Try <strong>TRK001</strong> or <strong>EMPEROR-001</strong></p>`;
    }
}"EMP-888": { status: "Out for Delivery", location: "Lekki, Lagos", date: "Today", type: "Bike Express" },