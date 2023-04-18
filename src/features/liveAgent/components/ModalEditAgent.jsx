import { Input, Modal } from "antd";
import React from "react";

export default function ModalEditAgent({
  isEditModalOpen,
  handleToggleEditModal,
}) {
  return (
    <Modal
      closable={false}
      title="Edit Agent"
      open={isEditModalOpen}
      okText="Edit"
      okButtonProps={{
        htmlType: "submit",
        form: "editAgentForm",
      }}
      //   onOk={handleOk}
      onCancel={() => handleToggleEditModal()}>
      <form id="editAgentForm" className="py-2">
        <p className="label">Username</p>
        <Input required className="mb-2" type="text" name="username" />
        <p className="label">Email</p>
        <Input required className="mb-2" type="text" name="email" />
        <p className="label">Password</p>
        <Input required className="mb-2" type="password" name="password" />
        <p className="label">Department</p>
        <Input required className="mb-2" type="text" name="department" />
      </form>
    </Modal>
  );
}
