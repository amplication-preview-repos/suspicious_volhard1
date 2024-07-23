import * as graphql from "@nestjs/graphql";
import { IphoneResolverBase } from "./base/iphone.resolver.base";
import { Iphone } from "./base/Iphone";
import { IphoneService } from "./iphone.service";

@graphql.Resolver(() => Iphone)
export class IphoneResolver extends IphoneResolverBase {
  constructor(protected readonly service: IphoneService) {
    super(service);
  }
}
