import React from "react";
import { useState } from "react";

import { Drawer, Button, Typography } from "antd";

const Info = () => {
  const [visible, setVisible] = useState(false);

  const { Title, Paragraph } = Typography;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button className="info-drawer" type="primary" onClick={showDrawer}>
        Info:
      </Button>

      <Drawer
        title="Shopping List App"
        style={{ textAlign: "center" }}
        placement="right"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <Title level={5}>Description</Title>
        <Paragraph>Description content</Paragraph>
        <Title level={5}>Instructions</Title>
        <Paragraph>Instruction content 1</Paragraph>
        <Paragraph>Instruction content 2</Paragraph>
        <Paragraph>Instruction content 3</Paragraph>
        <Title level={5}>Credits</Title>
        <Paragraph>Credits content</Paragraph>
      </Drawer>
    </>
  );
};

export default Info;
