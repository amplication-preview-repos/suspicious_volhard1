import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TextMessageServiceBase } from "./base/textMessage.service.base";

@Injectable()
export class TextMessageService extends TextMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
