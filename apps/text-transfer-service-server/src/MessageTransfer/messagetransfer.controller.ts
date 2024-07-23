import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MessageTransferService } from "./messagetransfer.service";
import { SendTextMessageInput } from "../messageTransfer/SendTextMessageInput";

@swagger.ApiTags("messageTransfers")
@common.Controller("messageTransfers")
export class MessageTransferController {
  constructor(protected readonly service: MessageTransferService) {}

  @common.Post("/send-text")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendTextMessage(
    @common.Body()
    body: SendTextMessageInput
  ): Promise<string> {
        return this.service.SendTextMessage(body);
      }
}
