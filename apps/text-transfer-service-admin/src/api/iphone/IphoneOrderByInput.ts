import { SortOrder } from "../../util/SortOrder";

export type IphoneOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deviceName?: SortOrder;
  deviceId?: SortOrder;
  userId?: SortOrder;
};
