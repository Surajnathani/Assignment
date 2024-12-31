"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResource = exports.updateResource = exports.getResource = exports.getResources = exports.createResource = void 0;
const resource_1 = __importDefault(require("../models/resource"));
const createResource = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resource = yield resource_1.default.create(req.body);
        res.status(201).json(resource);
    }
    catch (error) {
        next(error);
    }
});
exports.createResource = createResource;
const getResources = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resources = yield resource_1.default.find(req.query);
        res.status(200).json(resources);
    }
    catch (error) {
        next(error);
    }
});
exports.getResources = getResources;
const getResource = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resource = yield resource_1.default.findById(req.params.id);
        if (!resource) {
            res.status(404).json({ message: "Resource not found" });
            return;
        }
        res.status(200).json(resource);
    }
    catch (error) {
        next(error);
    }
});
exports.getResource = getResource;
const updateResource = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resource = yield resource_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!resource) {
            res.status(404).json({ message: "Resource not found" });
            return;
        }
        res.status(200).json(resource);
    }
    catch (error) {
        next(error);
    }
});
exports.updateResource = updateResource;
const deleteResource = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resource = yield resource_1.default.findByIdAndDelete(req.params.id);
        if (!resource) {
            res.status(404).json({ message: "Resource not found" });
            return;
        }
        res.status(200).json({ message: "Resource deleted successfully" });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteResource = deleteResource;
