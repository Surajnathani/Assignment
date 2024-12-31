import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../middleware/errorHandler";
import Resource from "../models/resource";

export const createResource = catchAsync(
  async (req: Request, res: Response) => {
    const resource = await Resource.create(req.body);
    res.status(201).json({
      status: "success",
      data: resource,
    });
  }
);

export const getResources = catchAsync(async (req: Request, res: Response) => {
  const resources = await Resource.find(req.query);
  res.status(200).json({
    status: "success",
    results: resources.length,
    data: resources,
  });
});

export const getResource = catchAsync(async (req: Request, res: Response) => {
  const resource = await Resource.findById(req.params.id);

  if (!resource) {
    throw new AppError("Resource not found", 404);
  }

  res.status(200).json({
    status: "success",
    data: resource,
  });
});

export const updateResource = catchAsync(
  async (req: Request, res: Response) => {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!resource) {
      throw new AppError("Resource not found", 404);
    }

    res.status(200).json({
      status: "success",
      data: resource,
    });
  }
);

export const deleteResource = catchAsync(
  async (req: Request, res: Response) => {
    const resource = await Resource.findByIdAndDelete(req.params.id);

    if (!resource) {
      throw new AppError("Resource not found", 404);
    }

    res.status(200).json({
      status: "success",
      message: "Resource deleted successfully",
    });
  }
);
