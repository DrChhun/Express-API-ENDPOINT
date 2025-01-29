import { body } from "express-validator"

export const createBookValidator = [
    body("title")
        .trim()
        .matches(/^[A-Za-z\s]+$/).withMessage("Title must contain only letters and spaces")
        .notEmpty().withMessage("Title cannot be empty or blank")
        .isLength({ min: 3 }).withMessage("Title must be more than 3 letters"),

    body("author")
        .trim()
        .notEmpty().withMessage("Author cannot be empty or blank"),

    body("year")
        .isNumeric().withMessage("Year must be a number"),

    body("genre")
        .trim()
        .notEmpty().withMessage("Genre cannot be empty or blank")
        .isString().withMessage("Genre must be a string"),
]