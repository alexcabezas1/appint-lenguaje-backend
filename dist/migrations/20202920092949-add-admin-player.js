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
exports.down = exports.up = void 0;
var moment_1 = __importDefault(require("moment"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var player_model_1 = __importDefault(require("../models/player.model"));
function up() {
    return __awaiter(this, void 0, void 0, function () {
        var passwordPlayer1, player1, passwordPlayer2, player2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt_1.default.hash("adminator1ABC", 8)];
                case 1:
                    passwordPlayer1 = _a.sent();
                    player1 = new player_model_1.default({
                        name: "GodPlayer1",
                        user: {
                            fullname: "Administrator 1",
                            username: "admin1",
                            password: passwordPlayer1,
                            email: "admin1@gmail.com",
                            birthdate: moment_1.default("1970-01-01", "YYYY-MM-DD"),
                        },
                    });
                    return [4 /*yield*/, player1.save()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, bcrypt_1.default.hash("adminator2ABC", 8)];
                case 3:
                    passwordPlayer2 = _a.sent();
                    player2 = new player_model_1.default({
                        name: "GodPlayer2",
                        user: {
                            fullname: "Administrator 2",
                            username: "admin2",
                            password: passwordPlayer2,
                            email: "admin2@gmail.com",
                            birthdate: moment_1.default("1970-01-02", "YYYY-MM-DD"),
                        },
                    });
                    return [4 /*yield*/, player2.save()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.up = up;
function down() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, player_model_1.default.deleteOne({ "user.username": "admin1" })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, player_model_1.default.deleteOne({ "user.username": "admin2" })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.down = down;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyMDI5MjAwOTI5NDktYWRkLWFkbWluLXBsYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWdyYXRpb25zLzIwMjAyOTIwMDkyOTQ5LWFkZC1hZG1pbi1wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTRCO0FBQzVCLGtEQUE0QjtBQUM1Qix3RUFBc0U7QUFFdEUsU0FBc0IsRUFBRTs7Ozs7d0JBQ0UscUJBQU0sZ0JBQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxFQUFBOztvQkFBdkQsZUFBZSxHQUFHLFNBQXFDO29CQUN2RCxPQUFPLEdBQW9CLElBQUksc0JBQVcsQ0FBQzt3QkFDL0MsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLElBQUksRUFBRTs0QkFDSixRQUFRLEVBQUUsaUJBQWlCOzRCQUMzQixRQUFRLEVBQUUsUUFBUTs0QkFDbEIsUUFBUSxFQUFFLGVBQWU7NEJBQ3pCLEtBQUssRUFBRSxrQkFBa0I7NEJBQ3pCLFNBQVMsRUFBRSxnQkFBTSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7eUJBQzlDO3FCQUNGLENBQUMsQ0FBQztvQkFFSCxxQkFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUE7O29CQUFwQixTQUFvQixDQUFDO29CQUVHLHFCQUFNLGdCQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBQTs7b0JBQXZELGVBQWUsR0FBRyxTQUFxQztvQkFDdkQsT0FBTyxHQUFvQixJQUFJLHNCQUFXLENBQUM7d0JBQy9DLElBQUksRUFBRSxZQUFZO3dCQUNsQixJQUFJLEVBQUU7NEJBQ0osUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLFFBQVEsRUFBRSxlQUFlOzRCQUN6QixLQUFLLEVBQUUsa0JBQWtCOzRCQUN6QixTQUFTLEVBQUUsZ0JBQU0sQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO3lCQUM5QztxQkFDRixDQUFDLENBQUM7b0JBRUgscUJBQU0sT0FBTyxDQUFDLElBQUksRUFBRSxFQUFBOztvQkFBcEIsU0FBb0IsQ0FBQzs7Ozs7Q0FDdEI7QUE1QkQsZ0JBNEJDO0FBRUQsU0FBc0IsSUFBSTs7Ozt3QkFDeEIscUJBQU0sc0JBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBQTs7b0JBQTFELFNBQTBELENBQUM7b0JBQzNELHFCQUFNLHNCQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUE7O29CQUExRCxTQUEwRCxDQUFDOzs7OztDQUM1RDtBQUhELG9CQUdDIn0=