import { InputJsonValue } from "../../types";
import { IphoneCreateNestedManyWithoutUsersInput } from "./IphoneCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  devices?: IphoneCreateNestedManyWithoutUsersInput;
};
