import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const userData = req.body;
  const result = await UserService.createUser(userData);

  res.send("result");
};

export const UserController = {
  createUser,
};
