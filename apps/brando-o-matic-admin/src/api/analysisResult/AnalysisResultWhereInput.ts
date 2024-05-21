import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AnalysisResultWhereInput = {
  analysisCategory?: "Option1";
  analysisResult?: StringNullableFilter;
  analysisType?: "Option1";
  detailedResult?: StringNullableFilter;
  id?: StringFilter;
  result?: StringNullableFilter;
};
