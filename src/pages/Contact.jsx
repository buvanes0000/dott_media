import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faCommentDots, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactContainer = styled.div`
  padding: 60px 20px;
  background: #f9f9f9;
  color: #333;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #ff6b81;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FormInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px 15px 15px 50px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const FormTextareaWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 15px 15px 15px 50px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  height: 150px;
`;

const InputIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #ff6b81;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ff4757;
  }

  svg {
    margin-left: 10px;
  }
`;

const ResultMessage = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;

  &.success {
    color: green;
  }

  &.error {
    color: red;
  }
`;

const HCaptchaContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Contact = () => {
  const { register, reset, handleSubmit, setValue, watch } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  const [hcaptchaToken, setHcaptchaToken] = useState(null);

  const accessKey = "26a8f732-39d1-4540-8364-10176f1ed5ba";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      setHcaptchaToken(null);
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  const handleHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
    setHcaptchaToken(token);
  };

  const handleFormSubmit = (data) => {
    if (!hcaptchaToken) {
      setResult("Please complete the HCaptcha.");
      setIsSuccess(false);
      return;
    }

    onSubmit(data);
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Share Your feed Back</ContactTitle>
      <ContactForm onSubmit={handleSubmit(handleFormSubmit)}>
        <FormInputWrapper>
          <InputIcon icon={faUser} />
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <InputIcon icon={faEnvelope} />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
        </FormInputWrapper>
        <FormTextareaWrapper>
          <InputIcon icon={faCommentDots} style={{position:"relative", top:"3.1rem"}} />
          <FormTextarea
            name="message"
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
          ></FormTextarea>
        </FormTextareaWrapper>
        <HCaptchaContainer>
          <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            onVerify={handleHCaptchaChange}
          />
        </HCaptchaContainer>
        <SubmitButton type="submit">
          Send
          <FontAwesomeIcon icon={faPaperPlane} />
        </SubmitButton>
      </ContactForm>
      {result && (
        <ResultMessage className={isSuccess ? "success" : "error"}>
          {result}
        </ResultMessage>
      )}
    </ContactContainer>
  );
};

export default Contact;
