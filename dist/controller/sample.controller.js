"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleRequest = void 0;
const sampleRequest = (_, res) => {
    return res
        .status(200)
        .json({ success: "OK", message: "Sample controller test Successful" });
};
exports.sampleRequest = sampleRequest;
