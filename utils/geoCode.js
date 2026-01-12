const axios = require("axios");

async function getCoordinates(location) {
    const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: location,
                format: "json",
                limit: 1
            },
            headers: {
                "User-Agent": "AirBnB-Clone"
            }
        }
    );

    if (response.data.length === 0) {
        return null;
    }

    return {
        type: "Point",
        coordinates: [
            parseFloat(response.data[0].lon),
            parseFloat(response.data[0].lat)
        ]
    };
}

module.exports = getCoordinates;
