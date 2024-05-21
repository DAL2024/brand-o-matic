import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AnalysisResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="analysisCategory" source="analysisCategory" />
        <TextField label="analysisResult" source="analysisResult" />
        <TextField label="analysisType" source="analysisType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="detailedResult" source="detailedResult" />
        <TextField label="ID" source="id" />
        <TextField label="result" source="result" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
