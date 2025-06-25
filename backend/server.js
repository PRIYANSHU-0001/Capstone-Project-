import dotenv from 'dotenv';
import app from './app.js'; // ✅ this line is missing

dotenv.config({ path: './config/config.env' });

console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);

app.listen(process.env.PORT, () => {
  console.log(`✅ SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
