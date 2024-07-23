import { InputJsonValue } from "../../types";
import { IphoneUpdateManyWithoutUsersInput } from "./IphoneUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  devices?: IphoneUpdateManyWithoutUsersInput;
};
