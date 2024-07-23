import { Module } from "@nestjs/common";
import { MessageTransferService } from "./messagetransfer.service";
import { MessageTransferController } from "./messagetransfer.controller";
import { MessageTransferResolver } from "./messagetransfer.resolver";

@Module({
  controllers: [MessageTransferController],
  providers: [MessageTransferService, MessageTransferResolver],
  exports: [MessageTransferService],
})
export class MessageTransferModule {}
