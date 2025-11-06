import * as React from "react";

type Props = {
  name?: string | null;
  email: string;
  message: string;
};

export default function ContactEmail({ name, email, message }: Props) {
  return (
    <div style={{ fontFamily: "system-ui,-apple-system,Segoe UI,Roboto" }}>
      <h2 style={{ margin: 0, fontSize: 18 }}>New portfolio contact</h2>
      <p style={{ margin: "12px 0 0" }}>
        <strong>Name:</strong> {name || "—"}
        <br />
        <strong>Email:</strong> {email}
      </p>
      <hr
        style={{ margin: "16px 0", border: 0, borderTop: "1px solid #eee" }}
      />
      <p style={{ whiteSpace: "pre-wrap", margin: 0 }}>{message}</p>
    </div>
  );
}
