const express = require("express");
const renderApi = require('@api/render-api');

const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/apps", async (req, res) => {
  
//     renderApi.auth('rnd_LZJ5SwYWHxMchWAUjrGb1ZsDljyE');
//     renderApi.listServices({includePreviews: 'true', limit: '20'})
//       .then(({ data }) =>  res.json(data) )
//       .catch(err => console.error(err));

// });

// הגדרת טוקן API
const API_KEY = 'rnd_LZJ5SwYWHxMchWAUjrGb1ZsDljyE';

app.get("/apps", async (req, res) => {
    try {
        renderApi.auth(API_KEY);
        const response = await renderApi.listServices({ includePreviews: 'true', limit: '20' });

        // מחזיר את רשימת האפליקציות כ-JSON
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching apps:", error);
        res.status(500).json({ error: "Failed to fetch apps from Render" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


