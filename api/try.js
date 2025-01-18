const axios = require('axios');

exports.config = {
    name: 'xv',
    author: 'Developer',
    description: 'search your fav lyrics',
    method: 'get',
    category: 'search',
    link: ['/xdl?q=']
};

exports.initialize = async function ({ req, res }) {
    let { q } = req.query;
    if (!q) {
        return res.status(400).json({ error: 'No query provided' });
    }

    try {
        const response = await axios.get('https://api.joshweb.click/api/xdl?q=' + encodeURIComponent(q));
        const result = response.data.result;
        return res.json({ result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
