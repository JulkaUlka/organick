import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Label,
  Textarea,
  Error,
  Wrapper,
} from "./OrderedForm.styled";
import { ButtonStyled } from "../Button/Button.styled";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { deleteAllCart, saveShippingAddress } from "../../redux/cart/cartSlice";

export const OrderedForm = (cart, total) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Required";
    } else if (!/^[A-Za-z\s]{1,20}$/i.test(values.fullName)) {
      errors.fullName = "Invalid name";
    }

    if (!values.address) {
      errors.address = "Required";
    } else if (!/^[A-Za-z0-9\s]{1,40}$/i.test(values.address)) {
      errors.address = "Invalid address";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\d{0,10}$/i.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (values.message.length > 100) {
      errors.message = "Must be 100 characters or less";
    }

    return errors;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const errors = validate({
      fullName,
      email,
      address,
      phone,
      message,
    });

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      dispatch(
        saveShippingAddress({
          fullName: fullName,
          email: email,
          address: address,
          phone: phone,
          message: message,
        })
      );

      try {
        const { data } = await Axios.post("/api/orders", {
          orderItems: cart,
          shippingAddress: {
            fullName: fullName,
            email: email,
            address: address,
            phone: phone,
            message: message,
          },
          totalPrice: total,
        });
        console.log(data);

        dispatch(deleteAllCart());

        setTimeout(() => {
          navigate("/success");
        }, 0);
      } catch (err) {
        console.log(err);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Form>
      <Wrapper>
        <Label htmlFor="fullName">
          Full Name*
          <Input
            id="fullName"
            name="fullName"
            placeholder="Your full name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {formErrors.fullName && <Error>{formErrors.fullName}</Error>}
        </Label>
        <Label htmlFor="email">
          Your Email*
          <Input
            id="email"
            name="email"
            placeholder="example@yourmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && <Error>{formErrors.email}</Error>}
        </Label>
        <Label htmlFor="address">
          address*
          <Input
            id="address"
            name="address"
            placeholder="Your company  address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {formErrors.address && <Error>{formErrors.address}</Error>}
        </Label>
        <Label htmlFor="phone">
          Phone number*
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {formErrors.phone && <Error>{formErrors.phone}</Error>}
        </Label>
        <Label htmlFor="message">
          Message
          <Textarea
            id="message"
            name="message"
            placeholder="Some extra information"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {formErrors.message && <Error>{formErrors.message}</Error>}
        </Label>
      </Wrapper>
      <ButtonStyled
        type="button"
        onClick={(e) => onSubmitHandler(e)}
        disabled={isSubmitting}
      >
        Confirm
      </ButtonStyled>
    </Form>
  );
};
