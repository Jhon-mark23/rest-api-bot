const axios = require("axios");

exports.config = {
    name: 'random',
    author: 'mark ',
    description: 'random',
    method: 'get',
    category: 'other',
    link: ['/random']
};

exports.initialize = async function ({ req, res }) {
    try {
       
        const response = await axios.get(
            "https://random-hugot-api.onrender.com/random" + encodeURIComponent()
        );

        const result = response.data.random;

        return res.status(200).json({ status: true, result, author: "mark" });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
