const axios = require("axios");

exports.config = {
    name: 'try',
    author: 'try',
    description: 'try',
    method: 'get',
    category: 'downloader',
    link: ['/xdl']
};

exports.initialize = async function ({ req, res }) {
    try {
        const q = req.query;
        const response = await axios.get(`https://api.joshweb.click/api/xdl?q=${encodeURIComponent(q)}`);

        /*
        const response = await axios.get(
            "https://api.joshweb.click/api/xdl?q=" + encodeURIComponent(q)
        );*/

        const result = response.data;

        return res.status(200).json({ status: true, result, author: "yey" });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
