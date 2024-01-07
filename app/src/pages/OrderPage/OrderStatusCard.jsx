import React from "react";
import * as MyLayout from "../../lib/MyLayout";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Dialog from "../../components/Dialog";

const OrderStatusCard = ({ order }) => {
  const { status, name, orderDate, id, position = [] } = order;
  const { openDialog, closeDialog } = MyLayout.useDialog();

  const calculateDeliveryMinute = () => {
    console.log("calculateDeliveryMinute");

    const MaxTime = 99999;
    for (let i = 0; i < MaxTime; i++) {}

    if (!position[0]) return "-";
    return `${position[0]} Minute`;
  };

  const expectedDeliveryMinutes = React.useMemo(calculateDeliveryMinute, [
    position[0],
  ]);

  const handleClick = React.useCallback(() => {
    openDialog(
      <Dialog footer={<Button onClick={closeDialog}>확인</Button>}>
        <ul>
          <li>Latitude: {position[0]}</li>
          <li>Longitude: {position[1]}</li>
        </ul>
      </Dialog>
    );
  }, [position[0], position[1]]);

  return (
    <Card
      header={
        <>
          <strong>{status}</strong>
          <br />
          {name}
        </>
      }
      data={[
        { term: "Order Date", description: orderDate },
        { term: "Order Id", description: id },
        {
          term: "Expected Delivery Minutes",
          description: (
            <ExpectedDeliveryMinutes
              value={expectedDeliveryMinutes}
              onClick={handleClick}
            />
          ),
        },
      ]}
      footer={
        <>
          <Button>Phone</Button>
          <Button>View</Button>
        </>
      }
    />
  );
};

export default OrderStatusCard;

const ExpectedDeliveryMinutes = React.memo(({ value, onClick }) => {
  console.log("ExpectedDeliveryMinutes rendered");

  return (
    <>
      {value}
      <Button onClick={onClick}>View the location</Button>
    </>
  );
});
