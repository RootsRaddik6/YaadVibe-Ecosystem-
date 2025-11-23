// Auto-generated Modal stub
import React from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "8px",
          padding: "20px",
          maxWidth: "90vw",
          maxHeight: "90vh"
        }}
      >
        {children}
        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            padding: "8px 16px",
            border: "1px solid #000",
            background: "#f0f0f0",
            borderRadius: "4px"
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
