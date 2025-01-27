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
        const { name, description, url } = response.data;
        
        return res.status(200).json({ name, decription, url });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
