import React from "react";
import { useState } from "react";

import { Drawer, Button } from "antd";

const Notes = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Notes
      </Button>

      <Drawer
        title="Notes:"
        style={{ textAlign: "center" }}
        placement="left"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Notes;
