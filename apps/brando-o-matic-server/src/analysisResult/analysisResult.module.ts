import { Module } from "@nestjs/common";
import { AnalysisResultModuleBase } from "./base/analysisResult.module.base";
import { AnalysisResultService } from "./analysisResult.service";
import { AnalysisResultController } from "./analysisResult.controller";
import { AnalysisResultResolver } from "./analysisResult.resolver";

@Module({
  imports: [AnalysisResultModuleBase],
  controllers: [AnalysisResultController],
  providers: [AnalysisResultService, AnalysisResultResolver],
  exports: [AnalysisResultService],
})
export class AnalysisResultModule {}
