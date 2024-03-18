import { NextFunction, Request, Response } from "express";
import { checkedIndividualTaxpayer } from "../utils/checkedIndividualTaxpayer";

export type Handler = (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => void;

const validateIndividualTaxpayer: Handler = (req, _res, next) => {
  const { individualTaxpayer } = req.body;
  const checked = checkedIndividualTaxpayer(individualTaxpayer);

  if (!checked)
    return next({
      message: "Invalid individual Taxpayer",
      status: 406,
    });

  return next();
};
export default validateIndividualTaxpayer;
