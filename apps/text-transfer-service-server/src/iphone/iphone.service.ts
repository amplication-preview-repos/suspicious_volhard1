import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IphoneServiceBase } from "./base/iphone.service.base";

@Injectable()
export class IphoneService extends IphoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
