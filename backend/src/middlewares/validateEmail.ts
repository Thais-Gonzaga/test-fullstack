import { NextFunction, Request, Response } from "express";
export type Handler = (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => void;

const validateEmail: Handler = (req, _res, next) => {
  const { email } = req.body;

  const emailRegexp = /^[\w_.]+@[a-z]+\.[a-z]+(\.[a-z]{2})?$/;

  if (!emailRegexp.test(email))
    return next({
      message: "invalid email format",
      status: 406,
    });

  return next();
};
export default validateEmail;
