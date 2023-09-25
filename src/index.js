const express = require('express');

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/app/v1/workouts',v1WorkoutRouter);

app.listen(PORT, ()=>{
    console.log(`the app is listening on port ${PORT}`)
});
