import { v4 as uuidv4 } from "uuid";
import { Schema, Document, Model, model } from "mongoose";
import { IGameDocument } from "./game.model";
import { IPlayerDocument } from "./player.model";

export interface IPlayDocument extends Document {
  _id: string;
  player: IPlayerDocument["_id"];
  game: IGameDocument["_id"];
  difficulty: string;
  points: number;
}

export interface IPlayModel extends Model<IPlayDocument> {}

let schema: Schema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
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
  },
  { timestamps: true }
);

const PlayModel: IPlayModel = model<IPlayDocument, IPlayModel>(
  "play",
  schema,
  "plays",
  true
);

export default PlayModel;
