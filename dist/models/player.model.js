"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: false,
    },
});
var schema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: uuid_1.v4,
    },
    name: {
        type: String,
        required: true,
    },
    user: {
        type: userSchema,
        required: true,
    },
}, { timestamps: true });
var PlayerModel = mongoose_1.model("player", schema, "players", true);
exports.default = PlayerModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9wbGF5ZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBb0M7QUFDcEMscUNBQTBEO0FBa0IxRCxJQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDNUIsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxJQUFJO1FBQ1osS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLEtBQUs7S0FDaEI7Q0FDRixDQUFDLENBQUM7QUFFSCxJQUFNLE1BQU0sR0FBVyxJQUFJLGlCQUFNLENBQy9CO0lBQ0UsR0FBRyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsU0FBTTtLQUNoQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxVQUFVO1FBQ2hCLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FDRixFQUNELEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUNyQixDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQWlCLGdCQUFLLENBQ3JDLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULElBQUksQ0FDTCxDQUFDO0FBRUYsa0JBQWUsV0FBVyxDQUFDIn0=