"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lightship_1 = require("lightship");
var app_1 = __importDefault(require("./app"));
var lightship = lightship_1.createLightship();
var server = app_1.default.listen(app_1.default.get("port"), function () {
    console.log("  App is running at http://localhost:%d in %s mode", app_1.default.get("port"), app_1.default.get("env"));
    console.log("  Press CTRL-C to stop\n");
    lightship.signalReady();
});
exports.default = server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVDQUE0QztBQUM1Qyw4Q0FBd0I7QUFFeEIsSUFBTSxTQUFTLEdBQUcsMkJBQWUsRUFBRSxDQUFDO0FBRXBDLElBQU0sTUFBTSxHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUMsYUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUNULG9EQUFvRCxFQUNwRCxhQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUNmLGFBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQ2YsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN4QyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxNQUFNLENBQUMifQ==