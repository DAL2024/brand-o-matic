import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WebsiteWhereInput = {
  brandingAnalysis?: StringNullableFilter;
  colorPsychology?: StringNullableFilter;
  id?: StringFilter;
  messagingAnalysis?: StringNullableFilter;
  url?: StringNullableFilter;
};
