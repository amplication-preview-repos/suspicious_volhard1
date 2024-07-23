import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TextMessageService } from "./textMessage.service";
import { TextMessageControllerBase } from "./base/textMessage.controller.base";

@swagger.ApiTags("textMessages")
@common.Controller("textMessages")
export class TextMessageController extends TextMessageControllerBase {
  constructor(protected readonly service: TextMessageService) {
    super(service);
  }
}
