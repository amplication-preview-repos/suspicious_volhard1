import { Injectable } from "@nestjs/common";
import { SendTextMessageInput } from "../messageTransfer/SendTextMessageInput";

@Injectable()
export class MessageTransferService {
  constructor() {}
  async SendTextMessage(args: SendTextMessageInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
