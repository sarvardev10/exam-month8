"use client"
import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

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
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <SubMenu key="sub1" title="Services">
            <Menu.Item key="3">Service 1</Menu.Item>
            <Menu.Item key="4">Service 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="5">Contact</Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default App;
