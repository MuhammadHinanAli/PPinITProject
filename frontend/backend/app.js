//IMPORTS
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";


const app = express();
const router = express.Router();

config({ path: "./config.env" });  //CONFIG CONNECTS CONFIG.ENV FILE

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true
    })
);  //CORS

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async (req, res, next) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return next(
            res.status(400).json({
                success: false,
                message: "PLEASE PROVIDE CORRECT DETAILS",
            })
        );
    }   //IF STATEMENT FOR THE FORM IN FRONTEND
    try {
        await sendEmail({
            email: "corruptmolvi@gmail.com",   //EMAIL WHICH RECIEVES 
            subject: "GYM WEBSITE CONTACT",    //SUBJECT
            message,                           //MESSAGE
            userEmail: email,                  // USER EMAIL
        });
        res.status(200).json({
            success: true,
            message: "Message Send Successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }// TRY CATCH
}); //POST METHOD WITH REQ AND RES

app.use(router);   //APP USING ROUTER

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});  //APP LISTENING