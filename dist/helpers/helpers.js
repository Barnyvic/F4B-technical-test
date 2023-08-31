"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueAccountNumber = void 0;
const generateUniqueAccountNumber = () => {
    const randomAccountNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return randomAccountNumber.toString();
};
exports.generateUniqueAccountNumber = generateUniqueAccountNumber;
//# sourceMappingURL=helpers.js.map