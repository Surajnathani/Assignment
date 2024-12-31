export interface IResource {
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IResourceResponse {
  status: string;
  data?: any;
  message?: string;
  results?: number;
}
