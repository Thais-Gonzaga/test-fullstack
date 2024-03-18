import { NextFunction, Request, Response } from "express";

export type Handler = (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => void;

const validateForms: Handler = (req, _res, next) => {
  const { name, email, phone, status, individualTaxpayer } = req.body;
  const checked =
    !!name && !!phone && !!status && !!email && !!individualTaxpayer;

  if (!checked)
    return next({
      message: "Required fields are empty",
      status: 422,
    });

  return next();
};
export default validateForms;
