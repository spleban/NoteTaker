const express = require('express');
const app = express();

require("./apiRoutes")(app);
require("./htmlRoutes")(app);