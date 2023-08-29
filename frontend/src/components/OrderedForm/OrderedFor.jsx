// import React, { useContext, useState} from "react";
// import { useNavigate } from "react-router-dom";

// import { useFormik } from "formik";
// import {
//   Form,
//   Input,
//   Label,
//   Textarea,
//   Error,
//   Wrapper,
// } from "./OrderedForm.styled";
// import { ButtonArrowStyled } from "../Button/Button.styled";
// import Axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   deleteAllCart,
//   saveShippingAddress,
  
// } from "../../redux/cart/cartSlice";

// export const OrderedForm = (cart, total) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validate = (values) => {
//     const errors = {};
  
//     if (!values.fullName) {
//       errors.fullName = "Required";
//     } else if (!/^[A-Za-z\s]{1,20}$/i.test(values.fullName)) {
//       errors.fullName = "Invalid name";
//     }
  
//     if (!values.address) {
//       errors.address = "Required";
//     } else if (!/^[A-Za-z0-9\s]{1,40}$/i.test(values.address)) {
//       errors.address = "Invalid address";
//     }
  
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
//     if (!values.phone) {
//       errors.phone = "Required";
//     } else if (!/^\d{0,9}$/i.test(values.phone)) {
//       errors.phone = "Invalid phone number";
//     }
//     if (values.message.length > 100) {
//       errors.message = "Must be 100 characters or less";
//     }
  
//     return errors;
//   };

//   const onSubmit = async (values) => {
//     setIsSubmitting(true);
//     dispatch(
//         saveShippingAddress({
//           fullName: values.fullName,
//           email: values.email,
//           address: values.address,
//           phone: values.phone,
//           message: values.message,
//         })
//       );
//     try {
//       const { data } = await Axios.post("/api/orders", {
//          orderItems: cart,
//         // shippingAddress: {
//         //     fullName: values.fullName,
//         //     email: values.email,
//         //     address: values.address,
//         //     phone: values.phone,
//         //     message: values.message,
//         // },
//         totalPrice: total,
//       });

//       console.log(data);
//       dispatch(deleteAllCart());
//       navigate("/success");
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   const formik = useFormik({
//     initialValues: {
//       fullName: "",
//       email: "",
//       address: "",
//       phone: "",
//       message: "",
//     },
//     validate,
//     onSubmit,
//   });
//   return (
//     <Form onSubmit={formik.handleSubmit}>
//       <Wrapper>
//         <Label htmlFor="fullName">
//           Full Name*
//           <Input
//             id="fullName"
//             name="fullName"
//             placeholder="Your full name"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.fullName}
//           />
//           {formik.touched.fullName && formik.errors.fullName ? (
//             <Error>{formik.errors.fullName}</Error>
//           ) : null}
//         </Label>
//         <Label htmlFor="email">
//           Your Email*
//           <Input
//             id="email"
//             name="email"
//             placeholder="example@yourmail.com"
//             type="email"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <Error>{formik.errors.email}</Error>
//           ) : null}
//         </Label>
//         <Label htmlFor="address">
//           address*
//           <Input
//             id="address"
//             name="address"
//             placeholder="Your company  address"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.address}
//           />
//           {formik.touched.address && formik.errors.address ? (
//             <Error>{formik.errors.address}</Error>
//           ) : null}
//         </Label>
//         <Label htmlFor="phone">
//           Phone number*
//           <Input
//             id="phone"
//             name="phone"
//             placeholder="Enter your phone"
//             type="number"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.phone}
//           />
//           {formik.touched.phone && formik.errors.phone ? (
//             <Error>{formik.errors.phone}</Error>
//           ) : null}
//         </Label>
//         <Label htmlFor="message">
//           Message
//           <Textarea
//             id="message"
//             name="message"
//             placeholder="Some extra information"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.message}
//           />
//           {formik.touched.message && formik.errors.message ? (
//             <Error>{formik.errors.message}</Error>
//           ) : null}
//         </Label>
//       </Wrapper>
//       <ButtonArrowStyled type="submit" disabled={isSubmitting}>Confirm</ButtonArrowStyled>
//     </Form>
//   );
// };
