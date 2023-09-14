"use client";
import React, { FunctionComponent } from "react";
import InputRow from "./form/InputRow";
import TextInput from "./form/TextInput";
import Textarea from "./form/Textarea";
import Button from "./form/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ContactForm: FunctionComponent = () => {
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
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
