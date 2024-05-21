import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalysisResultServiceBase } from "./base/analysisResult.service.base";

@Injectable()
export class AnalysisResultService extends AnalysisResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
