import { User } from "../user/User";

export type Iphone = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deviceName: string | null;
  deviceId: string | null;
  user?: User | null;
};
