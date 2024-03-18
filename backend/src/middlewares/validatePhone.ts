import { NextFunction, Request, Response } from "express";
export type Handler = (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => void;

const validatePhone: Handler = (req, _res, next) => {
  const { phone } = req.body;

  const regexPhone = /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/;

  if (!regexPhone.test(phone))
    return next({
      message: "invalid phone format",
      status: 406,
    });

  return next();
};
export default validatePhone;
