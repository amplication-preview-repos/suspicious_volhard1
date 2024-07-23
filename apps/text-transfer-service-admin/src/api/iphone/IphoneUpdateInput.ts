import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IphoneUpdateInput = {
  deviceName?: string | null;
  deviceId?: string | null;
  user?: UserWhereUniqueInput | null;
};
