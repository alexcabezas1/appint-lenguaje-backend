import { Request, Response } from "express";
import { DocumentQuery } from "mongoose";
import nconf from "nconf";
import PlayerModel, { IPlayerDocument } from "../models/player.model";
import PlayModel, { IPlayDocument } from "../models/play.model";
import GameModel, { IGameDocument } from "../models/game.model";

function getPlayerById(
  id: string
): DocumentQuery<IPlayerDocument | null, IPlayerDocument, {}> {
  return PlayerModel.findById(id);
}

export const savePlayOfPlayer = (config: nconf.Provider) => async (
  req: Request,
  res: Response
) => {
  const { body, params } = req;
  const { playerId } = params;
  const { gameId, difficulty, points } = body;

  try {
    const player: IPlayerDocument | null = await getPlayerById(playerId);
    if (!player) {
      return res.status(404).json({ message: "player not found" });
    }

    const game: IGameDocument | null = await GameModel.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: "game not found" });
    }

    const play: IPlayDocument = new PlayModel({
      player: player._id,
      game: game._id,
      difficulty: difficulty.toUpperCase(),
      points,
    });
    await play.save();

    const playResponse = {
      game: game.slug,
      difficulty,
      points,
    };

    return res.status(200).json({ message: "play saved", play: playResponse });
  } catch (err) {
    return res.status(500).json({ message: "something wrong happened" });
  }
};

export const getStatsByPlayer = (config: nconf.Provider) => async (
  req: Request,
  res: Response
) => {
  const { params } = req;
  const { playerId } = params;

  try {
    const player: IPlayerDocument | null = await getPlayerById(playerId);
    if (!player) {
      return res.status(404).json({ message: "player not found" });
    }

    const stats = await PlayModel.aggregate([
      { $match: { player: playerId } },
      {
        $group: {
          _id: { game: "$game", player: "$player" },
          playsCount: { $sum: 1 },
          totalPoints: { $sum: "$points" },
          pointsAvg: { $avg: "$points" },
          minPoints: { $min: "$points" },
          maxPoints: { $max: "$points" },
        },
      },
      {
        $lookup: {
          from: "games",
          localField: "_id.game",
          foreignField: "_id",
          as: "game",
        },
      },
      {
        $project: {
          _id: 0,
          "game.name": 1,
          playsCount: 1,
          totalPoints: 1,
          pointsAvg: 1,
          minPoints: 1,
          maxPoints: 1,
        },
      },
    ]);

    const statsResponse = stats.map((element) => {
      const {
        game,
        playsCount,
        totalPoints,
        pointsAvg,
        minPoints,
        maxPoints,
      } = element;
      const { name } = game[0];

      return { name, playsCount, totalPoints, pointsAvg, minPoints, maxPoints };
    });

    return res.status(200).json(statsResponse);
  } catch (err) {
    return res.status(500).json({ message: "something wrong happened" });
  }
};
