"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_promise_router_1 = __importDefault(require("express-promise-router"));
var config_1 = __importDefault(require("./utils/config"));
var games = __importStar(require("./handlers/games.handlers"));
var players = __importStar(require("./handlers/players.handlers"));
var users = __importStar(require("./handlers/users.handlers"));
var checkJwt_1 = __importDefault(require("./middlewares/checkJwt"));
var router = express_promise_router_1.default();
var config = config_1.default();
var checkJwt = checkJwt_1.default(config);
router.get("/api/games/:gameSlug/difficulty/:difficulty", [checkJwt], games.getGameBySlugAndDifficulty(config));
router.get("/api/games/:gameSlug/ranking", games.getRankingByGame(config));
router.post("/api/players/:playerId/plays", [checkJwt], players.savePlayOfPlayer(config));
router.get("/api/players/:playerId/stats", [checkJwt], players.getStatsByPlayer(config));
router.post("/api/signup", users.signUp(config));
router.post("/api/login", users.login(config));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRkFBNEM7QUFDNUMsMERBQXVDO0FBQ3ZDLCtEQUFtRDtBQUNuRCxtRUFBdUQ7QUFDdkQsK0RBQW1EO0FBQ25ELG9FQUFxRDtBQUVyRCxJQUFNLE1BQU0sR0FBRyxnQ0FBTSxFQUFFLENBQUM7QUFDeEIsSUFBTSxNQUFNLEdBQUcsZ0JBQVMsRUFBRSxDQUFDO0FBQzNCLElBQU0sUUFBUSxHQUFHLGtCQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFekMsTUFBTSxDQUFDLEdBQUcsQ0FDUiw2Q0FBNkMsRUFDN0MsQ0FBQyxRQUFRLENBQUMsRUFDVixLQUFLLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQ3pDLENBQUM7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRTNFLE1BQU0sQ0FBQyxJQUFJLENBQ1QsOEJBQThCLEVBQzlCLENBQUMsUUFBUSxDQUFDLEVBQ1YsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUNqQyxDQUFDO0FBRUYsTUFBTSxDQUFDLEdBQUcsQ0FDUiw4QkFBOEIsRUFDOUIsQ0FBQyxRQUFRLENBQUMsRUFDVixPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQ2pDLENBQUM7QUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFakQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRS9DLGtCQUFlLE1BQU0sQ0FBQyJ9