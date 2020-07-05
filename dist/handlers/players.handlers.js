"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatsByPlayer = exports.savePlayOfPlayer = void 0;
var player_model_1 = __importDefault(require("../models/player.model"));
var play_model_1 = __importDefault(require("../models/play.model"));
var game_model_1 = __importDefault(require("../models/game.model"));
function getPlayerById(id) {
    return player_model_1.default.findById(id);
}
exports.savePlayOfPlayer = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, params, playerId, gameId, difficulty, points, player, game, play, playResponse, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body, params = req.params;
                playerId = params.playerId;
                gameId = body.gameId, difficulty = body.difficulty, points = body.points;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                return [4 /*yield*/, getPlayerById(playerId)];
            case 2:
                player = _a.sent();
                if (!player) {
                    return [2 /*return*/, res.status(404).json({ message: "player not found" })];
                }
                return [4 /*yield*/, game_model_1.default.findById(gameId)];
            case 3:
                game = _a.sent();
                if (!game) {
                    return [2 /*return*/, res.status(404).json({ message: "game not found" })];
                }
                play = new play_model_1.default({
                    player: player._id,
                    game: game._id,
                    difficulty: difficulty.toUpperCase(),
                    points: points,
                });
                return [4 /*yield*/, play.save()];
            case 4:
                _a.sent();
                playResponse = {
                    game: game.slug,
                    difficulty: difficulty,
                    points: points,
                };
                return [2 /*return*/, res.status(200).json({ message: "play saved", play: playResponse })];
            case 5:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: "something wrong happened" })];
            case 6: return [2 /*return*/];
        }
    });
}); }; };
exports.getStatsByPlayer = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, playerId, player, stats, statsResponse, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.params;
                playerId = params.playerId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, getPlayerById(playerId)];
            case 2:
                player = _a.sent();
                if (!player) {
                    return [2 /*return*/, res.status(404).json({ message: "player not found" })];
                }
                return [4 /*yield*/, play_model_1.default.aggregate([
                        { $match: { player: playerId } },
                        {
                            $group: {
                                _id: { game: "$game", player: "$player" },
                                playsCount: { $sum: 1 },
                                totalPoints: { $sum: "$points" },
                                pointsAvg: { $avg: "$points" },
                                minPoints: { $min: "$points" },
                                maxPoints: { $max: "$points" },
                            },
                        },
                        {
                            $lookup: {
                                from: "games",
                                localField: "_id.game",
                                foreignField: "_id",
                                as: "game",
                            },
                        },
                        {
                            $project: {
                                _id: 0,
                                "game.name": 1,
                                playsCount: 1,
                                totalPoints: 1,
                                pointsAvg: 1,
                                minPoints: 1,
                                maxPoints: 1,
                            },
                        },
                    ])];
            case 3:
                stats = _a.sent();
                statsResponse = stats.map(function (element) {
                    var game = element.game, playsCount = element.playsCount, totalPoints = element.totalPoints, pointsAvg = element.pointsAvg, minPoints = element.minPoints, maxPoints = element.maxPoints;
                    var name = game[0].name;
                    return { name: name, playsCount: playsCount, totalPoints: totalPoints, pointsAvg: pointsAvg, minPoints: minPoints, maxPoints: maxPoints };
                });
                return [2 /*return*/, res.status(200).json(statsResponse)];
            case 4:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: "something wrong happened" })];
            case 5: return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5oYW5kbGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9wbGF5ZXJzLmhhbmRsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHdFQUFzRTtBQUN0RSxvRUFBZ0U7QUFDaEUsb0VBQWdFO0FBRWhFLFNBQVMsYUFBYSxDQUNwQixFQUFVO0lBRVYsT0FBTyxzQkFBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxVQUFDLE1BQXNCLElBQUssT0FBQSxVQUMxRCxHQUFZLEVBQ1osR0FBYTs7Ozs7Z0JBRUwsSUFBSSxHQUFhLEdBQUcsS0FBaEIsRUFBRSxNQUFNLEdBQUssR0FBRyxPQUFSLENBQVM7Z0JBQ3JCLFFBQVEsR0FBSyxNQUFNLFNBQVgsQ0FBWTtnQkFDcEIsTUFBTSxHQUF5QixJQUFJLE9BQTdCLEVBQUUsVUFBVSxHQUFhLElBQUksV0FBakIsRUFBRSxNQUFNLEdBQUssSUFBSSxPQUFULENBQVU7Ozs7Z0JBR0gscUJBQU0sYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFBOztnQkFBOUQsTUFBTSxHQUEyQixTQUE2QjtnQkFDcEUsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDWCxzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxDQUFDLEVBQUM7aUJBQzlEO2dCQUVrQyxxQkFBTSxvQkFBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQTs7Z0JBQTdELElBQUksR0FBeUIsU0FBZ0M7Z0JBQ25FLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ1Qsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFP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