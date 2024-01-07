import Card from "../../components/Card";

const OrderPaymentCard = ({ order }) => {
  const {
    totalPrice,
    paymentMethod,
    productPrice,
    deliveryPrice,
    discountPrice,
  } = order;

  return (
    <Card
      header={
        <>
          Total: USD {totalPrice.toLocaleString()}
          <br />
          Payment Method: {paymentMethod}
        </>
      }
      data={[
        {
          term: "Price",
          description: <>USD {productPrice.toLocaleString()}</>,
        },
        {
          term: "Delivery Price",
          description: <>USD {deliveryPrice.toLocaleString()}</>,
        },
        {
          term: "Discount",
          description: <>USD {discountPrice.toLocaleString()}</>,
        },
      ]}
    />
  );
};

export default OrderPaymentCard;
