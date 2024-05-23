import { AnalysisResultWhereInput } from "./AnalysisResultWhereInput";
import { AnalysisResultOrderByInput } from "./AnalysisResultOrderByInput";

export type AnalysisResultFindManyArgs = {
  where?: AnalysisResultWhereInput;
  orderBy?: Array<AnalysisResultOrderByInput>;
  skip?: number;
  take?: number;
};
