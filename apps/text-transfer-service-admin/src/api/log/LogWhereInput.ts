import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LogWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  messageId?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
