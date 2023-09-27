const express = require('express');

const bodyParser = require('body-parser');
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(bodyParser.json());

app.use(cache("2 minutes"));
app.use('/app/v1/workouts',v1WorkoutRouter);

app.listen(PORT, ()=>{
    console.log(`the app is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});
