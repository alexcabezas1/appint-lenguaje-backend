import { Request, Response } from "express";
import { DocumentQuery } from "mongoose";
import nconf from "nconf";
//import { check, sanitize, validationResult } from "express-validator";
import GameModel, { IGameDocument } from "../models/game.model";
import PlayModel from "../models/play.model";

function getGameBySlug(
  slug: String
): DocumentQuery<IGameDocument | null, IGameDocument, {}> {
  return GameModel.findOne({
    slug: slug.toLowerCase(),
  });
}

export const getGameBySlugAndDifficulty = (config: nconf.Provider) => async (
  req: Request,
  res: Response
) => {
  const { params } = req;
  const { gameSlug, difficulty: difficultyParam } = params;

  try {
    const game: IGameDocument | null = await getGameBySlug(gameSlug);

    if (!game) {
      return res.status(404).json({ message: "game not found" });
    }

    const { _id, name, slug, difficulty, options } = game;
    const gameResponse = {
      id: _id,
      name,
      slug,
      difficulty: difficulty.get(difficultyParam.toUpperCase()),
      options,
    };

    return res.status(200).json({ game: gameResponse });
  } catch (err) {
    return res.status(500).json({ message: "something wrong happened" });
  }
};

export const getRankingByGame = (config: nconf.Provider) => async (
  req: Request,
  res: Response
) => {
  const { params } = req;
  const { gameSlug } = params;

  try {
    const game: IGameDocument | null = await getGameBySlug(gameSlug);

    if (!game) {
      return res.status(404).json({ message: "game not found" });
    }
    const { _id: gameId } = game;

    const ranking = await PlayModel.aggregate([
      { $match: { game: gameId } },
      { $group: { _id: "$player", totalPoints: { $sum: "$points" } } },
      { $sort: { totalPoints: -1 } },
      {
        $lookup: {
          from: "players",
          localField: "_id",
          foreignField: "_id",
          as: "player",
        },
      },
      { $project: { totalPoints: 1, "player.name": 1, "player._id": 1 } },
    ]);

    const rankingResponse = ranking.map((element, index) => ({
      position: index + 1,
      player: {
        _id: element.player[0]._id,
        name: element.player[0].name,
      },
      totalPoints: element.totalPoints,
    }));

    return res.status(200).json({ ranking: rankingResponse });
  } catch (err) {
    return res.status(500).json({ message: "something wrong happened" });
  }
};
