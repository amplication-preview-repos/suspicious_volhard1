import { SortOrder } from "../../util/SortOrder";

export type TextMessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  messageContent?: SortOrder;
  senderDevice?: SortOrder;
  receiverDevice?: SortOrder;
  timestamp?: SortOrder;
};
