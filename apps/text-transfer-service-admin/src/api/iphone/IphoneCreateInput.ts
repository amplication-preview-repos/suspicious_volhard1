import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IphoneCreateInput = {
  deviceName?: string | null;
  deviceId?: string | null;
  user?: UserWhereUniqueInput | null;
};
