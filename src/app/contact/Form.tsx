"use client";
import React, { FunctionComponent } from "react";
import InputRow from "./form/InputRow";
import TextInput from "./form/TextInput";
import Textarea from "./form/Textarea";
import Button from "./form/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import transporter from "./nodemailer";
// import { sendContactForm } from "../lib/api";

// const handleSubmit

const ContactForm: FunctionComponent = () => {
  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any,
  ) => {
    try {
      await transporter.sendMail({
        from: "your-email@gmail.com",
        to: "recipient@example.com",
        subject: "New Contact Form Submission",
        html: `
          <p>Name: ${values.name}</p>
          <p>Email: ${values.email}</p>
          <p>Message: ${values.message}</p>
        `,
      });

      // Email sent successfully
      resetForm();
      setSubmitting(false);
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error, show a message to the user, etc.
    }
  };

  return (
    <div>
      <h3 className="mb-6 text-center text-xl font-medium md:text-base">
        Write to me
      </h3>

      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          message: Yup.string().required("Message is required"),
        })}
        // onSubmit={async (values, { setSubmitting }) => {
        //   // setTimeout(() => {
        //   //   // alert(JSON.stringify(values, null, 2));

        //   // }, 400);
        //   await sendContactForm
        //   setSubmitting(false);
        // }}
        // onSubmit={async (values) => {
        //   await sendContactForm(values);
        //   // alert(JSON.stringify(values, null, 2));
        // }}
        onSubmit={handleSubmit}
      >
        <Form className="flex w-[360px] flex-col items-center justify-center gap-8 sm:mx-auto sm:my-0 ss:w-full">
          <InputRow>
            <TextInput
              label="Name"
              name="name"
              id="name"
              type="text"
              placeholder="Enter your Name"
            />
          </InputRow>

          <InputRow>
            <TextInput
              label="EMail"
              name="email"
              id="email"
              type="email"
              placeholder="Enter your Email"
            />
          </InputRow>

          <InputRow optionalClass="min-h-[11rem]">
            <Textarea
              label="Message"
              name="message"
              id="textarea"
              type="textarea"
              placeholder="Enter your message"
            />
          </InputRow>

          <Button />
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
