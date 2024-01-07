import Card from "../../components/Card";

const OrderDeliveryCard = ({ order }) => {
  const { deliveryAddress, deliveryContact, messageToShop, messageToRider } =
    order;

  return (
    <Card
      data={[
        { term: "Delivery Address", description: deliveryAddress },
        { term: "Delivery Contact", description: deliveryContact },
        { term: "Message To Shop", description: messageToShop },
        { term: "Message To Rider", description: messageToRider },
      ]}
    />
  );
};

export default OrderDeliveryCard;
