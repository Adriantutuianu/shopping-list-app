import React from "react";
import { useState } from "react";

import { Drawer, Button, Typography } from "antd";

const Info = () => {
  const [visible, setVisible] = useState(false);

  const { Title } = Typography;

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
        title="Notes:"
        style={{ textAlign: "center" }}
        placement="right"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <Title level={5}>Description</Title>
        <Title level={5}>Instructions</Title>
        <Title level={5}>Credits</Title>
      </Drawer>
    </>
  );
};

export default Info;
