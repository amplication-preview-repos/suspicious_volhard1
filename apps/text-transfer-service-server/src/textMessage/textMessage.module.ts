import { Module } from "@nestjs/common";
import { TextMessageModuleBase } from "./base/textMessage.module.base";
import { TextMessageService } from "./textMessage.service";
import { TextMessageController } from "./textMessage.controller";
import { TextMessageResolver } from "./textMessage.resolver";

@Module({
  imports: [TextMessageModuleBase],
  controllers: [TextMessageController],
  providers: [TextMessageService, TextMessageResolver],
  exports: [TextMessageService],
})
export class TextMessageModule {}
