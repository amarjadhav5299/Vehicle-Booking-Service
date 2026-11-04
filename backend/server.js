
    require("dotenv").config();

    const express = require("express");
    const cors = require("cors");
    const path = require("path");
    const connectDB = require("./config/db");
    const bookingRoutes = require("./routes/bookingRoutes");
    const authRoutes = require("./routes/authRoutes");

    const app = express();
    app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
    }));

    // Read JSON data from frontend
    app.use(express.json());

    // Show frontend files node in browser
    app.use(express.static(path.join(__dirname, "../frontend")));

    // Connect API routes
    app.use("/api/bookings", bookingRoutes);
    app.use("/api/auth", authRoutes);

    const PORT = process.env.PORT || 5000;

    const startServer = async () => {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    };

    startServer();
