import { SortOrder } from "../../util/SortOrder";

export type LogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  messageId?: SortOrder;
  timestamp?: SortOrder;
};
