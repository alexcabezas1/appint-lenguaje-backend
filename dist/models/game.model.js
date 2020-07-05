"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: uuid_1.v4,
    },
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    difficulty: {
        type: Map,
        of: mongoose_1.Schema.Types.Mixed,
        required: true,
    },
    options: [
        {
            type: mongoose_1.Schema.Types.Mixed,
            required: true,
        },
    ],
}, { timestamps: true });
var GameModel = mongoose_1.model("game", schema, "games", true);
exports.default = GameModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvZ2FtZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFvQztBQUNwQyxxQ0FBMEQ7QUFZMUQsSUFBTSxNQUFNLEdBQVcsSUFBSSxpQkFBTSxDQUMvQjtJQUNFLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLFNBQU07S0FDaEI7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsR0FBRztRQUNULEVBQUUsRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLO1FBQ3RCLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLElBQUksRUFBRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3hCLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7S0FDRjtDQUNGLEVBQ0QsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQ3JCLENBQUM7QUFFRixJQUFNLFNBQVMsR0FBZSxnQkFBSyxDQUNqQyxNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxJQUFJLENBQ0wsQ0FBQztBQUVGLGtCQUFlLFNBQVMsQ0FBQyJ9