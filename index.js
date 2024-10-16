require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Endpoint for retrieving an address based on latitude and longitude
app.get("/geocode", async (req, res) => {
  const { lat, lng } = req.query;
  console.log("Received request with lat:", lat, "lng:", lng); // Přidej tento log

  if (!lat || !lng) {
    return res.status(400).send("Latitude and longitude are required");
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    );
    console.log("Data from Google Maps API:", response.data); // Přidej tento log

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Google Maps API:", error); // Přidej tento log

    res.status(500).send("Error fetching data from Google Maps API");
  }
});

// Endpoint for retrieving a static map preview based on latitude and longitude
app.get("/map-preview", async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).send("Latitude and longitude are required");
  }

  try {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
    res.send({ imagePreviewUrl });
  } catch (error) {
    res.status(500).send("Error fetching map preview from Google Maps API");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
