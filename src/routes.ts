import Router from "express-promise-router";
import getConfig from "./utils/config";
import * as games from "./handlers/games.handlers";
import * as players from "./handlers/players.handlers";
import * as users from "./handlers/users.handlers";
import checkJwtBuilder from "./middlewares/checkJwt";

const router = Router();
const config = getConfig();
const checkJwt = checkJwtBuilder(config);

router.get(
  "/api/games/:gameSlug/difficulty/:difficulty",
  [checkJwt],
  games.getGameBySlugAndDifficulty(config)
);

router.get("/api/games/:gameSlug/ranking", games.getRankingByGame(config));

router.post(
  "/api/players/:playerId/plays",
  [checkJwt],
  players.savePlayOfPlayer(config)
);

router.get(
  "/api/players/:playerId/stats",
  [checkJwt],
  players.getStatsByPlayer(config)
);

router.post("/api/signup", users.signUp(config));

router.post("/api/login", users.login(config));

export default router;
