const axios = require('axios');

exports.config = {
    name: 'xv',
    author: 'Developer',
    description: 'search your fav lyrics',
    method: 'get',
    category: 'search',
    link: ['/search?s=']
};

exports.initialize = async function ({ req, res }) {
    let { s } = req.query;
    if (!s) {
        return res.status(400).json({ error: 'No query provided' });
    }

    try {
        const response = await axios.get('https://api.joshweb.click/prn/' + encodeURIComponent(s));
        const result = response.data;
        return res.json({ result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
