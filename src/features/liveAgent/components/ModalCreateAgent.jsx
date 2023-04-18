import { Input, Modal } from "antd";
import React from "react";

export default function ModalCreateAgent({
  isCreateModalOpen,
  handleToggleCreateModal,
}) {
  return (
    <Modal
      closable={false}
      title="Add New Agent"
      open={isCreateModalOpen}
      okText="Invite"
      okButtonProps={{
        htmlType: "submit",
        form: "createAgentForm",
        className: "bg-warning text-dark",
      }}
      //   onOk={handleOk}
      onCancel={() => handleToggleCreateModal()}>
      <form id="createAgentForm" className="py-2">
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
