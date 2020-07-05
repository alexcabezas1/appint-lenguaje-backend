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
exports.login = exports.signUp = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
var moment_1 = __importDefault(require("moment"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var player_model_1 = __importDefault(require("../models/player.model"));
function getToken(config, data) {
    var secret = config.get("app:secret");
    var jwtExpiration = config.get("jwt:expiration");
    return jsonwebtoken_1.default.sign(data, secret, {
        expiresIn: jwtExpiration,
    });
}
exports.signUp = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, fullname, email, usernameParam, playerNameParam, birthDateParam, passwordParam, playerName, playerWithSameName, username, userWithSameUsername, password, birthdate, newPlayer, token, playerData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                fullname = body.fullname, email = body.email, usernameParam = body.username, playerNameParam = body.playerName, birthDateParam = body.birthdate, passwordParam = body.password;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                playerName = playerNameParam.toLowerCase().replace(/\s/g, "");
                return [4 /*yield*/, player_model_1.default.findOne({
                        name: playerName,
                    })];
            case 2:
                playerWithSameName = _a.sent();
                if (playerWithSameName) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ message: "a player with the same name already exists" })];
                }
                username = usernameParam.toLowerCase();
                return [4 /*yield*/, player_model_1.default.findOne({
                        "user.username": username,
                    })];
            case 3:
                userWithSameUsername = _a.sent();
                if (userWithSameUsername) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ message: "a user with the same username already exists" })];
                }
                return [4 /*yield*/, bcrypt_1.default.hash(passwordParam, 8)];
            case 4:
                password = _a.sent();
                birthdate = moment_1.default(birthDateParam, "YYYY-MM-DD");
                newPlayer = new player_model_1.default({
                    name: playerName,
                    user: {
                        fullname: fullname,
                        username: username,
                        password: password,
                        email: email,
                        birthdate: birthdate,
                    },
                });
                return [4 /*yield*/, newPlayer.save()];
            case 5:
                _a.sent();
                token = getToken(config, { playerId: newPlayer._id });
                playerData = {
                    id: newPlayer._id,
                    name: newPlayer.name,
                    fullname: newPlayer.user.fullname,
                    username: newPlayer.user.username,
                    email: newPlayer.user.email,
                    birthdate: newPlayer.user.birthdate,
                };
                res.append("x-access-token", token);
                return [2 /*return*/, res
                        .status(201)
                        .json({ message: "user created", player: playerData })];
            case 6:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: "something wrong happened" })];
            case 7: return [2 /*return*/];
        }
    });
}); }; };
exports.login = function (config) { return function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, username, password, player, passwordCheck, token, playerData, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                body = req.body;
                username = body.username, password = body.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, player_model_1.default.findOne({
                        "user.username": username,
                    })];
            case 2:
                player = _b.sent();
                if (!player) {
                    return [2 /*return*/, res.status(404).json({ message: "invalid username/password" })];
                }
                return [4 /*yield*/, bcrypt_1.default.compare(password, player.user.password)];
            case 3:
                passwordCheck = _b.sent();
                if (!passwordCheck) {
                    return [2 /*return*/, res.status(400).json({ message: "invalid username/password" })];
                }
                token = getToken(config, { playerId: player._id });
                playerData = {
                    id: player._id,
                    name: player.name,
                    fullname: player.user.fullname,
                    username: player.user.username,
                    email: player.user.email,
                    birthdate: player.user.birthdate,
                };
                res.append("x-access-token", token);
                return [2 /*return*/, res.status(200).json({ message: "user logged", player: playerData })];
            case 4:
                _a = _b.sent();
                return [2 /*return*/, res.status(500).json({ message: "something wrong happened" })];
            case 5: return [2 /*return*/];
        }
    });
}); }; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuaGFuZGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGFuZGxlcnMvdXNlcnMuaGFuZGxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTRCO0FBQzVCLGtEQUE0QjtBQUM1Qiw4REFBK0I7QUFFL0Isd0VBQXNFO0FBRXRFLFNBQVMsUUFBUSxDQUFDLE1BQXNCLEVBQUUsSUFBWTtJQUNwRCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUVuRCxPQUFPLHNCQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDNUIsU0FBUyxFQUFFLGFBQWE7S0FDekIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVZLFFBQUEsTUFBTSxHQUFHLFVBQUMsTUFBc0IsSUFBSyxPQUFBLFVBQ2hELEdBQVksRUFDWixHQUFhOzs7OztnQkFFTCxJQUFJLEdBQUssR0FBRyxLQUFSLENBQVM7Z0JBRW5CLFFBQVEsR0FNTixJQUFJLFNBTkUsRUFDUixLQUFLLEdBS0gsSUFBSSxNQUxELEVBQ0ssYUFBYSxHQUlyQixJQUFJLFNBSmlCLEVBQ1gsZUFBZSxHQUd6QixJQUFJLFdBSHFCLEVBQ2hCLGNBQWMsR0FFdkIsSUFBSSxVQUZtQixFQUNmLGFBQWEsR0FDckIsSUFBSSxTQURpQixDQUNoQjs7OztnQkFHRCxVQUFVLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRWpCLHFCQUFNLHNCQUFXLENBQUMsT0FBTyxDQUMxRTt3QkFDRSxJQUFJLEVBQUUsVUFBVTtxQkFDakIsQ0FDRixFQUFBOztnQkFKSyxrQkFB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