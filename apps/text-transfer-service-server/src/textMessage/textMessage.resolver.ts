import * as graphql from "@nestjs/graphql";
import { TextMessageResolverBase } from "./base/textMessage.resolver.base";
import { TextMessage } from "./base/TextMessage";
import { TextMessageService } from "./textMessage.service";

@graphql.Resolver(() => TextMessage)
export class TextMessageResolver extends TextMessageResolverBase {
  constructor(protected readonly service: TextMessageService) {
    super(service);
  }
}
