import { Iphone as TIphone } from "../api/iphone/Iphone";

export const IPHONE_TITLE_FIELD = "deviceName";

export const IphoneTitle = (record: TIphone): string => {
  return record.deviceName?.toString() || String(record.id);
};
