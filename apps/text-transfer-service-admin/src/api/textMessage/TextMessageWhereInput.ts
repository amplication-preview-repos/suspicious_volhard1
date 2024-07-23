import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TextMessageWhereInput = {
  id?: StringFilter;
  messageContent?: StringNullableFilter;
  senderDevice?: StringNullableFilter;
  receiverDevice?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
