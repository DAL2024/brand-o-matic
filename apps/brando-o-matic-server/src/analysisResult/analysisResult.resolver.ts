import * as graphql from "@nestjs/graphql";
import { AnalysisResultResolverBase } from "./base/analysisResult.resolver.base";
import { AnalysisResult } from "./base/AnalysisResult";
import { AnalysisResultService } from "./analysisResult.service";

@graphql.Resolver(() => AnalysisResult)
export class AnalysisResultResolver extends AnalysisResultResolverBase {
  constructor(protected readonly service: AnalysisResultService) {
    super(service);
  }
}
