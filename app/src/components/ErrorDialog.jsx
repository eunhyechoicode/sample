import * as MyLayout from "../lib/MyLayout";
import Dialog from "./Dialog";
import Button from "./Button";

const ErrorDialog = () => {
  const { closeDialog } = MyLayout.useDialog();

  return (
    <Dialog
      header={<>Error</>}
      footer={<Button onClick={closeDialog}>Yes</Button>}
    >
      Please, try again later.
    </Dialog>
  );
};

export default ErrorDialog;
