import { Module } from "@nestjs/common";
import { WebsiteModuleBase } from "./base/website.module.base";
import { WebsiteService } from "./website.service";
import { WebsiteController } from "./website.controller";
import { WebsiteResolver } from "./website.resolver";

@Module({
  imports: [WebsiteModuleBase],
  controllers: [WebsiteController],
  providers: [WebsiteService, WebsiteResolver],
  exports: [WebsiteService],
})
export class WebsiteModule {}
