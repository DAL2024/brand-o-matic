import { AnalysisResult as TAnalysisResult } from "../api/analysisResult/AnalysisResult";

export const ANALYSISRESULT_TITLE_FIELD = "id";

export const AnalysisResultTitle = (record: TAnalysisResult): string => {
  return record.id?.toString() || String(record.id);
};
