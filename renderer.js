// const { ipcRenderer } = require('electron');
// const L = require('leaflet');

// // Initialize Leaflet map
// const map = L.map('map').setView([23.8103, 90.4125], 13); // Dhaka, Bangladesh

// // Add OpenStreetMap tiles to the map
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Function to handle marker click event
// function markerClick(marker) {
//     document.getElementById('publication-date').textContent = `Publication Date: ${marker.publication_date}`;
//     document.getElementById('vehicles').textContent = `Vehicles Involved: ${marker.vehicles}`;
//     document.getElementById('casualties').textContent = `Casualties: ${marker.casualties}`;
//     document.getElementById('injured').textContent = `Injured Persons: ${marker.injured}`;
//     document.getElementById('reason').textContent = `Reason: ${marker.reason}`;
// }

// // Function to filter markers based on publication date range
// function filterMarkers() {
//     const startDate = document.getElementById('start-date').value;
//     const endDate = document.getElementById('end-date').value;

//     // Send filtered date range to main process
//     ipcRenderer.send('filter-markers', { startDate, endDate });
// }

// // Function to process URL
// function processUrl() {
//     ipcRenderer.send('process-url');
// }

// // Attach event listeners
// document.getElementById('filter-button').addEventListener('click', filterMarkers);
// document.getElementById('process-url-button').addEventListener('click', processUrl);

// // Receive markers data from main process and add markers to the map
// ipcRenderer.on('markers-data', (event, markersData) => {
//     // Clear existing markers
//     map.eachLayer(layer => {
//         if (layer instanceof L.Marker) {
//             map.removeLayer(layer);
//         }
//     });

//     // Add new markers
//     markersData.forEach(marker => {
//         const newMarker = L.marker([marker.latitude, marker.longitude]).addTo(map);
//         newMarker.on('click', () => markerClick(marker));
//     });
// });
