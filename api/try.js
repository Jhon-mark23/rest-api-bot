const axios = require("axios");

exports.config = {
    name: 'try',
    author: 'try',
    description: 'try',
    method: 'get',
    category: 'other',
    link: ['/dltry?q=']
};

exports.initialize = async function ({ req, res }) {
    try {
        const q = req.query.q;
        if (!q) return res.status(400).json({ error: "Missing q parameter!" });

        const response = await axios.get(
            "https://api.joshweb.click/api/xdl?q=" + encodeURIComponent(q)
        );

        const result = response.data;

        return res.status(200).json({ status: true, result, author: "joshua Apostol" });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
