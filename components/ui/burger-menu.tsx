"use client"
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Link from "next/link";

const App = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={closeDrawer}
        visible={visible}
      >
        <div className="flex flex-col space-y-4">
          <li className="text-xl list-none">
            <Link href="/products">Продукты</Link>
          </li>
          <li className="text-xl list-none">
            <Link href="/contact">Контакты</Link>
          </li>
          <li className="text-xl list-none">
            <Link href="/pay">Оплата и Доставка</Link>
          </li>
          <li className="text-xl list-none">
            <Link href="/about">О нас</Link>
          </li>
        </div>
      </Drawer>
    </div>
  );
};

export default App;
