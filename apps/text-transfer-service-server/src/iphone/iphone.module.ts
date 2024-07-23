import { Module } from "@nestjs/common";
import { IphoneModuleBase } from "./base/iphone.module.base";
import { IphoneService } from "./iphone.service";
import { IphoneController } from "./iphone.controller";
import { IphoneResolver } from "./iphone.resolver";

@Module({
  imports: [IphoneModuleBase],
  controllers: [IphoneController],
  providers: [IphoneService, IphoneResolver],
  exports: [IphoneService],
})
export class IphoneModule {}
