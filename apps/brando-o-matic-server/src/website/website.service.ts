import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebsiteServiceBase } from "./base/website.service.base";

@Injectable()
export class WebsiteService extends WebsiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
