// Map opstarten
var mymap = L.map('map', { // gebruik id "map" in HTML
  center: [51.505, -0.09], // middelpunt van map
  zoom: 14 // schaal van de map
});

// Basemap oproepen
var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});

// Marker opmaken
var Locatie = L.Icon.extend({
    options: {
        iconSize:     [100, 100],
        iconAnchor:   [78, 100],
        popupAnchor:  [-3, -76]
    }
});

// 5 markers met elk andere afbeelding
var KLJ = new Locatie({iconUrl: 'scrollSpot.png'}),
    Surcele = new Locatie({iconUrl: 'scrollSpot2.png'}),
    Permeke = new Locatie({iconUrl: 'scrollSpot3.png'}),
    Joker = new Locatie({iconUrl: 'scrollSpot4.png'}),
    Lebowski = new Locatie({iconUrl: 'scrollSpot5.png'});

// Basemap instantiëren 
Stamen_TonerLite.addTo(mymap);

// Locaties met bijpassende marker + op map toevoegen
L.marker([51.299673, 4.735306], {icon: KLJ      }).addTo(mymap);
L.marker([51.279525, 4.719182], {icon: Surcele  }).addTo(mymap);
L.marker([51.221769, 4.421040], {icon: Permeke  }).addTo(mymap);
L.marker([51.215296, 4.402119], {icon: Joker    }).addTo(mymap);
L.marker([51.200181, 4.430730], {icon: Lebowski }).addTo(mymap);

// Locatie gebruiker zoeken
mymap.fitWorld();
mymap.locate({setView: true, maxZoom: 16});

// Aanduiding van waar gebruiker is
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);

// Error wanneer gebruiker niet vindt
function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);
