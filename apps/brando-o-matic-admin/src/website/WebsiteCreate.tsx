import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WebsiteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
