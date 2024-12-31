import Resource from "../models/resource";
import { IResource } from "../interface/resource.interface";
import { AppError } from "../middleware/errorHandler";

export class ResourceService {
  static async create(data: IResource) {
    return await Resource.create(data);
  }

  static async findAll(filter: any) {
    return await Resource.find(filter);
  }

  static async findById(id: string) {
    const resource = await Resource.findById(id);
    if (!resource) {
      throw new AppError("Resource not found", 404);
    }
    return resource;
  }

  static async update(id: string, data: Partial<IResource>) {
    const resource = await Resource.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!resource) {
      throw new AppError("Resource not found", 404);
    }
    return resource;
  }

  static async delete(id: string) {
    const resource = await Resource.findByIdAndDelete(id);
    if (!resource) {
      throw new AppError("Resource not found", 404);
    }
    return resource;
  }
}
