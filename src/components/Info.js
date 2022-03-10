import React from "react";
import { useState } from "react";

import { Drawer, Button, Typography, Switch } from "antd";

const Info = () => {
  const [visible, setVisible] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  const { Title, Paragraph } = Typography;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  function onChangeSwitch(checked) {
    setSwitchValue(checked);
  }

  return (
    <>
      <Button className="info-drawer" type="primary" onClick={showDrawer}>
        Info
      </Button>

      <Drawer
        title="Shopping List App"
        headerStyle={{ borderBottom: " 1px solid var(--secondary-color)" }}
        placement="right"
        width={500}
        onClose={onClose}
        visible={visible}
        keyboard={false}
      >
        <Title
          style={{
            color: "var(--secondary-color)",
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
            padding: "5px",
          }}
          level={5}
        >
          {!switchValue ? "View credits?" : "Hide credits?"}
          <Switch
            onChange={onChangeSwitch}
            style={{ marginLeft: "10px" }}
            defaultChecked={switchValue}
          />
        </Title>
        {switchValue && (
          <Paragraph>@2022 - All rights reserved @Adrian Tut.</Paragraph>
        )}
      </Drawer>
    </>
  );
};

export default Info;
