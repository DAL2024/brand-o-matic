import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const AnalysisResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="analysisCategory"
          label="analysisCategory"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="analysisResult" multiline source="analysisResult" />
        <SelectInput
          source="analysisType"
          label="analysisType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="detailedResult" multiline source="detailedResult" />
        <TextInput label="result" multiline source="result" />
      </SimpleForm>
    </Create>
  );
};
