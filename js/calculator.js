let queriesArray = [];

async function main() {
    const query = {};

    let source = getDocumentElementId("source");
    let destination = getDocumentElementId("destination");

    let sourceInformation = await getInformationOfAddress(source);
    let destinationInformation = await getInformationOfAddress(destination);

    query.source = source;
    query.destination = destination;
    query.distance = getDistanceCalculationResult(sourceInformation, destinationInformation);

    printDistanceResultAndSaveQuery(query);
}

function getDocumentElementId(elementId) {
    return document.getElementById(elementId).value.toLowerCase();
}

function getInformationOfAddress(queryAddress) {
    return fetch(`https://nominatim.openstreetmap.org/search?q=${queryAddress}&format=json&limit=1`, {
        method: 'GET',
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data;
        })
}

function getDistanceCalculationResult(array, array2) {
    try {
        return "RESULT: " + getDistance(array[0], array2[0]).toFixed(2) + " meters";
    } catch (e) {
        return "ERROR when calculating the distance.";
    }
}

function printDistanceResultAndSaveQuery(query) {
    document.getElementById("result").innerHTML = query.distance;

    queriesArray.push(query)
    localStorage.setItem('resultOfHistoricQueries', JSON.stringify(queriesArray));
}

// Code to calculate the distance between two points extracted of stackOverflow:
// https://stackoverflow.com/questions/1502590/calculate-distance-between-two-points-in-google-maps-v3
var rad = function(x) {
    return x * Math.PI / 180;
};

function getDistance(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lon - p1.lon);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
}


