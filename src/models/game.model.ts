import { v4 as uuidv4 } from "uuid";
import { Schema, Document, Model, model } from "mongoose";

export interface IGameDocument extends Document {
  _id: string;
  name: string;
  slug: string;
  difficulty: Record<string, any>;
  options: any[];
}

export interface IGameModel extends Model<IGameDocument> {}

const schema: Schema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
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
      of: Schema.Types.Mixed,
      required: true,
    },
    options: [
      {
        type: Schema.Types.Mixed,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const GameModel: IGameModel = model<IGameDocument, IGameModel>(
  "game",
  schema,
  "games",
  true
);

export default GameModel;
