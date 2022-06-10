import app from "./app"

import "dotenv/config";

app.listen(process.env.SERVER_PORT, function () {
    console.log('Server is running on port ' + process.env.SERVER_PORT);
});
