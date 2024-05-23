import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WebsiteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="brandingAnalysis"
          multiline
          source="brandingAnalysis"
        />
        <TextInput label="colorPsychology" multiline source="colorPsychology" />
        <TextInput
          label="messagingAnalysis"
          multiline
          source="messagingAnalysis"
        />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
