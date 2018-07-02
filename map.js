document.getElementById("mapid").style["width"] = window.innerWidth + 'px';
document.getElementById("mapid").style["height"] = window.innerHeight + 'px';

const map = L.map('mapid').setView([6.852374, -74.297333], 6);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  id: 'mapbox.streets'
}).addTo(map);

const meetups = {
  'PyLadies Medellín': [6.244203, -75.581212],
  'Python Medellín': [6.199548, -75.579340],
  'Python Barranquilla': [11.004107, - 74.806981],
  'Python Arauca': [6.547306, -71.002231],
  'Python Cartagena': [10.391049, -75.479426],
  'Python Tunja': [5.544642, -73.357557],
  'Manizales Codes in Python': [5.070275, -75.513817],
  'Python Popayán': [2.444814, -76.614739],
  'PyData Bogotá': [4.600167, -74.073472],
  'Python Bogotá': [4.710989, -74.072092],
  'PyLadies Bogotá': [4.605613, -74.068666],
  'Python Neiva': [2.934484, -75.280900],
  'Python Santa Marta': [11.240355, -74.211023],
  'Python Villavicencio': [4.151382, -73.637690],
  'Python Pasto': [1.205884, -77.285787],
  'Python Cúcuta': [7.889097, -72.496690],
  'Python Pereira': [4.793649, -75.689102],
  'Python Bucaramanga': [7.119349, 7.119349],
  'Python Sincelejo': [9.304577, -75.390557],
  'Python Cali': [3.451647, -76.531985],
  'Python Tuluá': [4.089869, -76.191499]
};

let marker = ''

for (i in meetups) {
  console.log(meetups[i])
  marker = L.marker(meetups[i]).bindPopup(i).addTo(map);
}