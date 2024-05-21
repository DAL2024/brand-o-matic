import * as graphql from "@nestjs/graphql";
import { WebsiteResolverBase } from "./base/website.resolver.base";
import { Website } from "./base/Website";
import { WebsiteService } from "./website.service";

@graphql.Resolver(() => Website)
export class WebsiteResolver extends WebsiteResolverBase {
  constructor(protected readonly service: WebsiteService) {
    super(service);
  }
}
