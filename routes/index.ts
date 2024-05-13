import { Router } from "express";
import { main } from "../controllers";

const mainRouter = Router();

mainRouter.get('/', main);

export default mainRouter;