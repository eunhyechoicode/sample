import { useNavigate } from "react-router-dom";
import * as MyLayout from "../../lib/MyLayout";
import Dialog from "../../components/Dialog";
import Button from "../../components/Button";

const PaymentSuccessDialog = () => {
  const navigate = useNavigate();;
  const { closeDialog } = MyLayout.useDialog();

  const handleClickNo = () => {
    closeDialog();
    navigate("/");
  };

  const handleClickYes = () => {
    closeDialog();
    navigate("/order");
  };

  return (
    <Dialog
      header={<>Payment Success</>}
      footer={
        <>
          <Button style={{ marginRight: "8px" }} onClick={handleClickNo}>
            No
          </Button>
          <Button styleType="brand" onClick={handleClickYes}>
            Yes, check the order Status
          </Button>
        </>
      }
    >
      Payment Success. Do you want to check the order status?
    </Dialog>
  );
};

export default PaymentSuccessDialog;
