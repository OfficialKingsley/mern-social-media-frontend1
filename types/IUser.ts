type IUser = {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  email: string;
  profileImageUrl: string;
  profileImageId: string | null;
  coverImageUrl: string | null;
  coverImageId: string | null;
  isAdmin: boolean;
  isSuperuser: boolean;
  isVerified: boolean;
  token: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
};
