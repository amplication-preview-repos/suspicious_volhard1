import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IphoneWhereInput = {
  id?: StringFilter;
  deviceName?: StringNullableFilter;
  deviceId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
