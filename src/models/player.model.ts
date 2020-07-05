import { v4 as uuidv4 } from "uuid";
import { Schema, Document, Model, model } from "mongoose";

export interface IUserSubDocument extends Document {
  fullname: string;
  username: string;
  password: string;
  email: string;
  birthdate: Date;
}

export interface IPlayerDocument extends Document {
  _id: string;
  name: string;
  user: IUserSubDocument;
}

export interface IPlayerModel extends Model<IPlayerDocument> {}

const userSchema = new Schema({
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
    user: {
      type: userSchema,
      required: true,
    },
  },
  { timestamps: true }
);

const PlayerModel: IPlayerModel = model<IPlayerDocument, IPlayerModel>(
  "player",
  schema,
  "players",
  true
);

export default PlayerModel;
