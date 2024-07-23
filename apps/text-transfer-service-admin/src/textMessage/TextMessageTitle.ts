import { TextMessage as TTextMessage } from "../api/textMessage/TextMessage";

export const TEXTMESSAGE_TITLE_FIELD = "senderDevice";

export const TextMessageTitle = (record: TTextMessage): string => {
  return record.senderDevice?.toString() || String(record.id);
};
