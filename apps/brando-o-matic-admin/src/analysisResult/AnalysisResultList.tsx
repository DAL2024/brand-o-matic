import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AnalysisResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AnalysisResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="analysisCategory" source="analysisCategory" />
        <TextField label="analysisResult" source="analysisResult" />
        <TextField label="analysisType" source="analysisType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="detailedResult" source="detailedResult" />
        <TextField label="ID" source="id" />
        <TextField label="result" source="result" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
