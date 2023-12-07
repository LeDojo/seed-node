import express from "express";
import path from "path";
const app = express();
import volleyball from "volleyball";
import dotenv from "dotenv";
import travelRouter from "./routes/travelRoute";
import methodOverride from 'method-override'

dotenv.config();

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);
  console.log(`🦄📂🙈 [DATABASE] MongoDB connected !`)
}

const port = process.env.PORT;
app.set('view engine','pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(volleyball);
app.get("/", (req, res) => {
  res.json("BONJOUR");
});

app.use("/travels", travelRouter);
app.listen(port, () =>
  console.log(`🔥🐳⚡️ Server ⚡️ is  running on ${port}`)
);
