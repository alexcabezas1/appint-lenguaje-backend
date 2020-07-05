"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: uuid_1.v4,
    },
    player: {
        type: String,
        required: true,
    },
    game: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
var PlayModel = mongoose_1.model("play", schema, "plays", true);
exports.default = PlayModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcGxheS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFvQztBQUNwQyxxQ0FBMEQ7QUFjMUQsSUFBSSxNQUFNLEdBQVcsSUFBSSxpQkFBTSxDQUM3QjtJQUNFLEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLFNBQU07S0FDaEI7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FDRixFQUNELEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUNyQixDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQWUsZ0JBQUssQ0FDakMsTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsSUFBSSxDQUNMLENBQUM7QUFFRixrQkFBZSxTQUFTLENBQUMifQ==