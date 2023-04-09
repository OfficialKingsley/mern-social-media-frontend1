import { IUser } from "./IUser";

export interface IPost {
  _id: string;
  user: IUser;
  text: string;
  imageUrl: string;
  imageId?: string;
  createdAt: string;
  updatedAt: string;
}
