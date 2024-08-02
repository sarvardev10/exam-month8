"use client";
import React, { useState } from "react";
import { Input, Modal, Form, Button } from "antd";
import { Register } from "@/service/auth.service";
import "./style.css";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const register = async (values: any) => {
    const response = await Register(values);
    if (response && response.status === 200) {
      closeModal();
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <p className="cursor-pointer text-[#FBD029]" onClick={showModal}>
        {"Регистрация"}
      </p>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="p-[25px]"
      >
        <Form className="p-[25px] flex flex-col gap-3" onFinish={register}>
          <h1 className="text-[24px] font-medium">Вход в аккаунт</h1>
          <p className="w-[270px] text-[12px]">
            Если Вы Регистрированы, нажмите кнопку
            <button className="text-[#FBD029]" onClick={handleCancel}>
              {"Вход"}!
            </button>
          </p>
          <div className="flex gap-3">
            <Button className="w-[120px] h-[30px] bg-[#F2F2F2] rounded-lg">
              Google
            </Button>
            <Button className="w-[120px] h-[30px] bg-[#F2F2F2] rounded-lg">
              Facebook
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-1">
            <div>
              <h1>Имя</h1>
              <Form.Item
                name="first_name"
                rules={[
                  { required: true, message: "Пожалуйста, введите ваше имя!" },
                ]}
              >
                <Input placeholder="Имя" className="w-[180px]" />
              </Form.Item>
            </div>
            <div>
              <h1>Фамилия</h1>
              <Form.Item
                name="last_name"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите вашу фамилию!",
                  },
                ]}
              >
                <Input placeholder="Фамилия" className="w-[180px]" />
              </Form.Item>
            </div>
            <div>
              <h1>Гендер</h1>
              <Form.Item
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите ваш гендер!",
                  },
                ]}
              >
                <Input placeholder="Гендер" className="w-[180px]" />
              </Form.Item>
            </div>
          </div>
          <h1>
            Создайте свой постоянный логин и пароль для доступа к вашей учетной
            записи!
          </h1>
          <div className="flex gap-3">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Пожалуйста, введите ваш email!" },
              ]}
            >
              <Input placeholder="Login" className="w-[180px]" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Пожалуйста, введите ваш пароль!" },
              ]}
            >
              <Input.Password placeholder="Password" className="w-[180px]" />
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="custom-ok-button"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
