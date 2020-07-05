"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var compression_1 = __importDefault(require("compression"));
var body_parser_1 = __importDefault(require("body-parser"));
var lusca_1 = __importDefault(require("lusca"));
var mongoose_1 = __importDefault(require("mongoose"));
var bluebird_1 = __importDefault(require("bluebird"));
var errorhandler_1 = __importDefault(require("errorhandler"));
var config_1 = __importDefault(require("./utils/config"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
mongoose_1.default.Promise = bluebird_1.default;
var config = config_1.default();
var node_env = config.get("node_env");
var app = express_1.default();
var mongoUrl = config.get("mongodb:url") + "/" + config.get("mongodb:database");
var mongoOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    w: "majority",
    retryWrites: true,
};
var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    exposedHeaders: "x-access-token",
};
mongoose_1.default
    .connect(mongoUrl, mongoOpts)
    .then(function () {
    console.log("Connected to the MongoDB database");
})
    .catch(function (e) {
    console.log("Cannot connect to the MongoDB database");
    console.log(e);
});
app.set("port", config.get("app:port"));
app.use(cors_1.default(corsOptions));
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(lusca_1.default.xframe("SAMEORIGIN"));
app.use(lusca_1.default.xssProtection(true));
if (node_env === "development") {
    app.use(errorhandler_1.default());
}
app.use(routes_1.default);
app.get("/", function (_, res) {
    res.send("Hello World");
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE4QjtBQUM5Qiw0REFBc0M7QUFDdEMsNERBQXFDO0FBQ3JDLGdEQUEwQjtBQUMxQixzREFBZ0M7QUFDaEMsc0RBQWdDO0FBQ2hDLDhEQUF3QztBQUN4QywwREFBdUM7QUFDdkMsb0RBQThCO0FBQzlCLDhDQUF3QjtBQUN4QixrQkFBUSxDQUFDLE9BQU8sR0FBRyxrQkFBUSxDQUFDO0FBRTVCLElBQU0sTUFBTSxHQUFHLGdCQUFTLEVBQUUsQ0FBQztBQUMzQixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hDLElBQU0sR0FBRyxHQUF3QixpQkFBTyxFQUFFLENBQUM7QUFDM0MsSUFBTSxRQUFRLEdBQ1osTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRW5FLElBQU0sU0FBUyxHQUFHO0lBQ2hCLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsZUFBZSxFQUFFLElBQUk7SUFDckIsQ0FBQyxFQUFFLFVBQVU7SUFDYixXQUFXLEVBQUUsSUFBSTtDQUNsQixDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUc7SUFDbEIsTUFBTSxFQUFFLHVCQUF1QjtJQUMvQixvQkFBb0IsRUFBRSxHQUFHO0lBQ3pCLGNBQWMsRUFBRSxnQkFBZ0I7Q0FDakMsQ0FBQztBQUVGLGtCQUFRO0tBQ0wsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7S0FDNUIsSUFBSSxDQUFDO0lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxVQUFDLENBQUM7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixDQUFDLENBQUMsQ0FBQztBQUVMLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVcsRUFBRSxDQUFDLENBQUM7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFbkMsSUFBSSxRQUFRLEtBQUssYUFBYSxFQUFFO0lBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQVksRUFBRSxDQUFDLENBQUM7Q0FDekI7QUFFRCxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsQ0FBQztBQUVoQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsRUFBRSxHQUFHO0lBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxHQUFHLENBQUMifQ==