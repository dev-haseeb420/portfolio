import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0a0d10",
        color: "#e8ebee",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 72,
          height: 72,
          borderRadius: 20,
          background: "#2dd4bf",
          color: "#08201c",
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 40,
        }}
      >
        {profile.initials}
      </div>
      <div style={{ display: "flex", fontSize: 62, fontWeight: 700 }}>{profile.name}</div>
      <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#2dd4bf" }}>
        {profile.role} · {profile.subRole}
      </div>
      <div style={{ display: "flex", marginTop: 28, fontSize: 22, color: "#93999f" }}>
        AWS · Azure · Kubernetes · Terraform · CI/CD · DevSecOps
      </div>
    </div>,
    { ...size },
  );
}
