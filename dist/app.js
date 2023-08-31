"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const account_route_1 = __importDefault(require("./routes/account-route"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/akiva-bank", account_route_1.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.use("*", (req, res) => {
    return res.status(404).json({ message: "Route not found" });
});
exports.default = app;
//# sourceMappingURL=app.js.map