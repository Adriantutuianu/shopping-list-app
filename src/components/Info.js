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
        Info
      </Button>

      <Drawer
        title="Shopping List App"
        style={{ textAlign: "center" }}
        placement="right"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <Title
          style={{
            color: "var(--secondary-color)",
            borderTop: " 1px solid var(--secondary-color)",
            borderBottom: " 1px solid var(--secondary-color)",
          }}
          level={5}
        >
          Description
        </Title>
        <Paragraph>
          This is a single page created in React which includes a shopping list.
        </Paragraph>
        <Title
          style={{
            color: "var(--secondary-color)",
            borderBottom: " 1px solid var(--secondary-color)",
          }}
          level={5}
        >
          Instructions
        </Title>
        <Paragraph>You can add items and quantity in your list.</Paragraph>
        <Paragraph>You can tick them as completed.</Paragraph>
        <Paragraph>You can delete items selected.</Paragraph>
        <Title
          style={{
            color: "var(--secondary-color)",
            borderBottom: " 1px solid var(--secondary-color)",
          }}
          level={5}
        >
          Credits
        </Title>
        <Paragraph
          style={{
            borderBottom: " 1px solid var(--secondary-color)",
          }}
        >
          @2022 - All rights reserved @Adrian Tut.
        </Paragraph>
      </Drawer>
    </>
  );
};

export default Info;
