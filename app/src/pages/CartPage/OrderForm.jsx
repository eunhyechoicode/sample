import React from "react";

import * as MyForm from "../../lib/MyForm-reducer";
import FormControl from "../../components/FormControl";

const OrderForm = ({ onSubmit }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.deliveryAddress) {
      errors.deliveryAddress = "Please, enter address";
    }
    if (!values.deliveryContact) {
      errors.deliveryContact = "Please, enter contact";
    }
    if (!/^\d{2,3}-\d{3,4}-\d{4}$/.test(values.deliveryContact)) {
      errors.deliveryContact =
        "Please, enter phone number. (예: 010-1234-5678)";
    }

    return errors;
  };

  return (
    <MyForm.Form
      className="OrderForm"
      id="order-form"
      initialValue={{
        deliveryAddress: "",
        deliveryContact: "",
        paymentMethod: "",
        messageToShop: "",
        messageToRider: "",
      }}
      validate={validate}
      onSubmit={onSubmit}
    >
      <FormControl
        label="Address"
        htmlFor="deliveryAddress"
        required
        error={<MyForm.ErrorMessage name="deliveryAddress" />}
      >
        <MyForm.Field
          type="text"
          name="deliveryAddress"
          placeholder="Please, enter delivery address"
          autoFocus
        />
      </FormControl>
      <FormControl
        label="Contact"
        htmlFor="deliveryContact"
        required
        error={<MyForm.ErrorMessage name="deliveryContact" />}
      >
        <MyForm.Field
          type="text"
          name="deliveryContact"
          placeholder="Please, enter contact"
        />
      </FormControl>
      <FormControl label="Payment Method" htmlFor="paymentMethod" required>
        <MyForm.Field as="select" name="paymentMethod">
          <option value="mypay">mypay</option>
          <option value="direct-pay">Pay directly</option>
        </MyForm.Field>
      </FormControl>
      <FormControl label="Message To Shop" htmlFor="messageToShop">
        <MyForm.Field as="textarea" name="messageToShop" />
      </FormControl>
      <FormControl label="Message To Rider" htmlFor="messageToRider">
        <MyForm.Field as="textarea" name="messageToRider" />
      </FormControl>
    </MyForm.Form>
  );
};

export default OrderForm;
