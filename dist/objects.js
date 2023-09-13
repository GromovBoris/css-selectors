"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.level1 = void 0;
const levelclass_1 = __importDefault(require("./levelclass"));
exports.level1 = new levelclass_1.default("Level 1 of 10", "This is the first level of the game. You will be given some HTML code and your task is to find the correct answer.", "<div>Some HTML code here</div>", "Correct answer for level 1");
