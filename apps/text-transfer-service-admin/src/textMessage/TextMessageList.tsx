import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TextMessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TextMessages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="messageContent" source="messageContent" />
        <TextField label="senderDevice" source="senderDevice" />
        <TextField label="receiverDevice" source="receiverDevice" />
        <TextField label="timestamp" source="timestamp" />
      </Datagrid>
    </List>
  );
};
