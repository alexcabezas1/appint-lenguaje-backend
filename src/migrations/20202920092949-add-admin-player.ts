import moment from "moment";
import bcrypt from "bcrypt";
import PlayerModel, { IPlayerDocument } from "../models/player.model";

export async function up() {
  const passwordPlayer1 = await bcrypt.hash("adminator1ABC", 8);
  const player1: IPlayerDocument = new PlayerModel({
    name: "GodPlayer1",
    user: {
      fullname: "Administrator 1",
      username: "admin1",
      password: passwordPlayer1,
      email: "admin1@gmail.com",
      birthdate: moment("1970-01-01", "YYYY-MM-DD"),
    },
  });

  await player1.save();

  const passwordPlayer2 = await bcrypt.hash("adminator2ABC", 8);
  const player2: IPlayerDocument = new PlayerModel({
    name: "GodPlayer2",
    user: {
      fullname: "Administrator 2",
      username: "admin2",
      password: passwordPlayer2,
      email: "admin2@gmail.com",
      birthdate: moment("1970-01-02", "YYYY-MM-DD"),
    },
  });

  await player2.save();
}

export async function down() {
  await PlayerModel.deleteOne({ "user.username": "admin1" });
  await PlayerModel.deleteOne({ "user.username": "admin2" });
}
