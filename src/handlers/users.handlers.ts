import { Request, Response } from "express";
import bcrypt from "bcrypt";
import moment from "moment";
import jwt from "jsonwebtoken";
import nconf from "nconf";
import PlayerModel, { IPlayerDocument } from "../models/player.model";

function getToken(config: nconf.Provider, data: Object): string {
  const secret = config.get("app:secret");
  const jwtExpiration = config.get("jwt:expiration");

  return jwt.sign(data, secret, {
    expiresIn: jwtExpiration,
  });
}

export const signUp = (config: nconf.Provider) => async (
  req: Request,
  res: Response
) => {
  const { body } = req;
  const {
    fullname,
    email,
    username: usernameParam,
    playerName: playerNameParam,
    birthdate: birthDateParam,
    password: passwordParam,
  } = body;

  try {
    const playerName = playerNameParam.toLowerCase().replace(/\s/g, "");

    const playerWithSameName: IPlayerDocument | null = await PlayerModel.findOne(
      {
        name: playerName,
      }
    );
    if (playerWithSameName) {
      return res
        .status(400)
        .json({ message: "a player with the same name already exists" });
    }

    const username = usernameParam.toLowerCase();
    const userWithSameUsername: IPlayerDocument | null = await PlayerModel.findOne(
      {
        "user.username": username,
      }
    );
    if (userWithSameUsername) {
      return res
        .status(400)
        .json({ message: "a user with the same username already exists" });
    }

    const password = await bcrypt.hash(passwordParam, 8);
    const birthdate = moment(birthDateParam, "YYYY-MM-DD");

    const newPlayer: IPlayerDocument = new PlayerModel({
      name: playerName,
      user: {
        fullname,
        username,
        password,
        email,
        birthdate,
      },
    });
    await newPlayer.save();

    const token = getToken(config, { playerId: newPlayer._id });

    const playerData = {
      id: newPlayer._id,
      name: newPlayer.name,
      fullname: newPlayer.user.fullname,
      username: newPlayer.user.username,
      email: newPlayer.user.email,
      birthdate: newPlayer.user.birthdate,
    };

    res.append("x-access-token", token);
    return res
      .status(201)
      .json({ message: "user created", player: playerData });
  } catch (err) {
    return res.status(500).json({ message: "something wrong happened" });
  }
};

export const login = (config: nconf.Provider) => async (
  req: Request,
  res: Response
) => {
  const { body } = req;
  const { username, password } = body;

  try {
    const player: IPlayerDocument | null = await PlayerModel.findOne({
      "user.username": username,
    });
    if (!player) {
      return res.status(404).json({ message: "invalid username/password" });
    }

    const passwordCheck = await bcrypt.compare(password, player.user.password);
    if (!passwordCheck) {
      return res.status(400).json({ message: "invalid username/password" });
    }

    const token = getToken(config, { playerId: player._id });

    const playerData = {
      id: player._id,
      name: player.name,
      fullname: player.user.fullname,
      username: player.user.username,
      email: player.user.email,
      birthdate: player.user.birthdate,
    };

    res.append("x-access-token", token);
    return res.status(200).json({ message: "user logged", player: playerData });
  } catch {
    return res.status(500).json({ message: "something wrong happened" });
  }
};
