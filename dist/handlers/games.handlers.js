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
exports.getRankingByGame = exports.getGameBySlugAndDifficulty = void 0;
//import { check, sanitize, validationResult } from "express-validator";
var game_model_1 = __importDefault(require("../models/game.model"));
var play_model_1 = __importDefault(require("../models/play.model"));
function getGameBySlug(slug) {
    return game_model_1.default.findOne({
        slug: slug.toLowerCase(),
    });
}
exports.getGameBySlugAndDifficulty = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, gameSlug, difficultyParam, game, _id, name_1, slug, difficulty, options, gameResponse, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.params;
                gameSlug = params.gameSlug, difficultyParam = params.difficulty;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, getGameBySlug(gameSlug)];
            case 2:
                game = _a.sent();
                if (!game) {
                    return [2 /*return*/, res.status(404).json({ message: "game not found" })];
                }
                _id = game._id, name_1 = game.name, slug = game.slug, difficulty = game.difficulty, options = game.options;
                gameResponse = {
                    id: _id,
                    name: name_1,
                    slug: slug,
                    difficulty: difficulty.get(difficultyParam.toUpperCase()),
                    options: options,
                };
                return [2 /*return*/, res.status(200).json({ game: gameResponse })];
            case 3:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: "something wrong happened" })];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
exports.getRankingByGame = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, gameSlug, game, gameId, ranking, rankingResponse, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                params = req.params;
                gameSlug = params.gameSlug;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, getGameBySlug(gameSlug)];
            case 2:
                game = _a.sent();
                if (!game) {
                    return [2 /*return*/, res.status(404).json({ message: "game not found" })];
                }
                gameId = game._id;
                return [4 /*yield*/, play_model_1.default.aggregate([
                        { $match: { game: gameId } },
                        { $group: { _id: "$player", totalPoints: { $sum: "$points" } } },
                        { $sort: { totalPoints: -1 } },
                        {
                            $lookup: {
                                from: "players",
                                localField: "_id",
                                foreignField: "_id",
                                as: "player",
                            },
                        },
                        { $project: { totalPoints: 1, "player.name": 1, "player._id": 1 } },
                    ])];
            case 3:
                ranking = _a.sent();
                rankingResponse = ranking.map(function (element, index) { return ({
                    position: index + 1,
                    player: {
                        _id: element.player[0]._id,
                        name: element.player[0].name,
                    },
                    totalPoints: element.totalPoints,
                }); });
                return [2 /*return*/, res.status(200).json({ ranking: rankingResponse })];
            case 4:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: "something wrong happened" })];
            case 5: return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZXMuaGFuZGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGFuZGxlcnMvZ2FtZXMuaGFuZGxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Esd0VBQXdFO0FBQ3hFLG9FQUFnRTtBQUNoRSxvRUFBNkM7QUFFN0MsU0FBUyxhQUFhLENBQ3BCLElBQVk7SUFFWixPQUFPLG9CQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO0tBQ3pCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFWSxRQUFBLDBCQUEwQixHQUFHLFVBQUMsTUFBc0IsSUFBSyxPQUFBLFVBQ3BFLEdBQVksRUFDWixHQUFhOzs7OztnQkFFTCxNQUFNLEdBQUssR0FBRyxPQUFSLENBQVM7Z0JBQ2YsUUFBUSxHQUFrQyxNQUFNLFNBQXhDLEVBQWMsZUFBZSxHQUFLLE1BQU0sV0FBWCxDQUFZOzs7O2dCQUdwQixxQkFBTSxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUE7O2dCQUExRCxJQUFJLEdBQXlCLFNBQTZCO2dCQUVoRSxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLENBQUMsRUFBQztpQkFDNUQ7Z0JBRU8sR0FBRyxHQUFzQyxJQUFJLElBQTFDLEVBQUUsU0FBb0MsSUFBSSxLQUFwQyxFQUFFLElBQUksR0FBMEIsSUFBSSxLQUE5QixFQUFFLFVBQVUsR0FBYyxJQUFJLFdBQWxCLEVBQUUsT0FBTyxHQUFLLElBQUksUUFBVCxDQUFVO2dCQUNoRCxZQUFZLEdBQUc7b0JBQ25CLEVBQUUsRUFBRSxHQUFHO29CQUNQLElBQUksUUFBQTtvQkFDSixJQUFJLE1BQUE7b0JBQ0osVUFBVSxFQUFF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