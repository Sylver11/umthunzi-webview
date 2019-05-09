const express = require('express');
const app = express();
// const path = require('path');
app.use(express.static('/home/justus/umthunzi-webview'));
app.listen(4000, () => console.log('Server is ready and listens at 4000'))