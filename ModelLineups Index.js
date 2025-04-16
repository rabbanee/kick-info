const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

const footballAPI = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-apisports-key': process.env.API_KEY
  }
});

app.get('/fixtures', async (req, res) => {
  const { league, season } = req.query;  
  try {
    const response = await footballAPI.get(`/fixtures?league=${league}&season=${season}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal ambil data fixtures', detail: error.message });
  }
});


app.get('/lineup/:fixtureId', async (req, res) => {
  const { fixtureId } = req.params; 
  try {
    const response = await footballAPI.get(`/fixtures/lineups?fixture=${fixtureId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Gagal ambil data lineup', detail: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`API jalan di http://localhost:${PORT}`);
});
