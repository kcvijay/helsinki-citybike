"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../utilities/config");
const connectDB = async () => {
    if (!config_1.MONGO_URI) {
        console.log("MONGO URI is not defined or incorrect.");
        process.exit(1);
    }
    try {
        await mongoose_1.default.connect(config_1.MONGO_URI);
        console.log("Database connected.");
    }
    catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
