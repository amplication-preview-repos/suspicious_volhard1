import { JsonValue } from "type-fest";
import { Iphone } from "../iphone/Iphone";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  devices?: Array<Iphone>;
};
