import * as graphql from "@nestjs/graphql";
import { SendTextMessageInput } from "../messageTransfer/SendTextMessageInput";
import { MessageTransferService } from "./messagetransfer.service";

export class MessageTransferResolver {
  constructor(protected readonly service: MessageTransferService) {}

  @graphql.Mutation(() => String)
  async SendTextMessage(
    @graphql.Args()
    args: SendTextMessageInput
  ): Promise<string> {
    return this.service.SendTextMessage(args);
  }
}
