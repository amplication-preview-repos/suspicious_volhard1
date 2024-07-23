import { TextMessageWhereInput } from "./TextMessageWhereInput";
import { TextMessageOrderByInput } from "./TextMessageOrderByInput";

export type TextMessageFindManyArgs = {
  where?: TextMessageWhereInput;
  orderBy?: Array<TextMessageOrderByInput>;
  skip?: number;
  take?: number;
};
