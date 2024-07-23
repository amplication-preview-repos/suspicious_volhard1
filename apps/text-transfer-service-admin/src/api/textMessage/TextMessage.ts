export type TextMessage = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  messageContent: string | null;
  senderDevice: string | null;
  receiverDevice: string | null;
  timestamp: Date | null;
};
