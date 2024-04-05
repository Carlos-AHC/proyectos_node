const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://cholguin65:<Itz41rLhjyRs71yl>@clusteradso2557466.yq2xxof.mongodb.net/?retryWrites=true&w=majority&appName=ClusterADSO2557466`
mongoose.connect(URI);

module.exports = mongoose