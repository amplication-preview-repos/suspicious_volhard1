import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TextMessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="messageContent" source="messageContent" />
        <TextField label="senderDevice" source="senderDevice" />
        <TextField label="receiverDevice" source="receiverDevice" />
        <TextField label="timestamp" source="timestamp" />
      </SimpleShowLayout>
    </Show>
  );
};
