"use client";
import React, { useState } from "react";
import { Input, Modal, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Login } from "@/service/auth.service";
import "./style.css";
import Register from "./register";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (values: any) => {
    const response = await Login(values);
    if (response && response.status === 200) {
      notification.success({
        message: "Login Successful",
        description: "You have successfully logged in.",
      });
      closeModal();
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const values = { email, password };
    await login(values);
  };

  const closeModal = async () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <button
        className="w-[40px] h-[40px] bg-[#F2F2F2] rounded-lg flex items-center justify-center"
        onClick={showModal}
      >
        <UserOutlined />
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ className: "custom-ok-button" }}
        okText="Login"
        className="p-[25px]"
      >
        <form
          className="p-[25px] flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleOk();
          }}
        >
          <h1 className="text-[24px] font-medium">Вход в аккаунт</h1>
          <p className="w-[270px] text-[12px]">
            Если Вы не зарегистрированы, нажмите кнопку <Register />
          </p>
          <Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="button">Забыли пароль?</button>
        </form>
      </Modal>
    </>
  );
};

export default App;
