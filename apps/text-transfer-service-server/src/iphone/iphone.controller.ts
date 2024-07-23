import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IphoneService } from "./iphone.service";
import { IphoneControllerBase } from "./base/iphone.controller.base";

@swagger.ApiTags("iphones")
@common.Controller("iphones")
export class IphoneController extends IphoneControllerBase {
  constructor(protected readonly service: IphoneService) {
    super(service);
  }
}
