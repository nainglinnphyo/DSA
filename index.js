function degreesToRadians(degrees) {
     return degrees * (Math.PI / 180);
}

function calculateBearing(lat1, lon1, lat2, lon2) {
     const dLon = degreesToRadians(lon2 - lon1);

     const y = Math.sin(dLon) * Math.cos(degreesToRadians(lat2));
     const x = Math.cos(degreesToRadians(lat1)) * Math.sin(degreesToRadians(lat2)) -
          Math.sin(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * Math.cos(dLon);

     let bearing = Math.atan2(y, x);
     bearing = bearing * (180 / Math.PI);
     bearing = (bearing + 360) % 360;

     return bearing;
}

// Example usage
const bearing = calculateBearing(16.834838436281306, 96.18031679624458, 16.835803728840233, 96.18024706318548);
console.log('Bearing:', bearing);