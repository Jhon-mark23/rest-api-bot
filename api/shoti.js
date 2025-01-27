const axios = require("axios");

exports.config = {
    name: 'shoti',
    author: 'Mark Martinez',
    description: 'Get a random shoti video',
    method: 'get',
    category: 'other',
    link: ['/shoti']
};

exports.initialize = async function ({ _, res }) {
    try {
        const response = await axios.get("https://random-use-api-production.up.railway.app/shoti");
        const data = response.data;
        const name = data.name;
        const description = data.description;
        const url = data.url;
        
        return res.status(200).json({ status: 200, name, description, url });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
