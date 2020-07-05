"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var checkJwtBuilder = function (config) { return function (req, res, next) {
    var tokenName = "x-access-token";
    var token = req.headers[tokenName];
    var secret = config.get("app:secret");
    var jwtExpiration = config.get("jwt:expiration");
    if (!token) {
        res.status(500).json({ auth: false, message: "no token provided" });
        res.end();
    }
    var jwtPayload;
    try {
        jwtPayload = jsonwebtoken_1.default.verify(token, secret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (_a) {
        res
            .status(401)
            .json({ auth: false, message: "token authentication failed" });
        res.end();
    }
    var playerId = jwtPayload.playerId;
    var newToken = jsonwebtoken_1.default.sign({ playerId: playerId }, secret, {
        expiresIn: jwtExpiration,
    });
    res.append(tokenName, newToken);
    next();
}; };
exports.default = checkJwtBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tKd3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvY2hlY2tKd3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBK0I7QUFHL0IsSUFBTSxlQUFlLEdBQUcsVUFBQyxNQUFzQixJQUFLLE9BQUEsVUFDbEQsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtJQUVsQixJQUFNLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNuQyxJQUFNLEtBQUssR0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRW5ELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUNwRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDWDtJQUVELElBQUksVUFBVSxDQUFDO0lBRWYsSUFBSTtRQUNGLFVBQVUsR0FBUSxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQ3BDO0lBQUMsV0FBTTtRQUNOLEdBQUc7YUFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1gsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNYO0lBRU8sSUFBQSxRQUFRLEdBQUssVUFBVSxTQUFmLENBQWdCO0lBQ2hDLElBQU0sUUFBUSxHQUFHLHNCQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsRUFBRSxNQUFNLEVBQUU7UUFDOUMsU0FBUyxFQUFFLGFBQWE7S0FDekIsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFaEMsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDLEVBbENtRCxDQWtDbkQsQ0FBQztBQUVGLGtCQUFlLGVBQWUsQ0FBQyJ9