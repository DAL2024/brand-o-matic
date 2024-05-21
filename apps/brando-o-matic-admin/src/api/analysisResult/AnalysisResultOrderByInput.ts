import { SortOrder } from "../../util/SortOrder";

export type AnalysisResultOrderByInput = {
  analysisCategory?: SortOrder;
  analysisResult?: SortOrder;
  analysisType?: SortOrder;
  createdAt?: SortOrder;
  detailedResult?: SortOrder;
  id?: SortOrder;
  result?: SortOrder;
  updatedAt?: SortOrder;
};
