import { ImageResponse } from "next/og";

export const alt = "Ganesh Chincholkar, software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F8FAFC",
          color: "#111827",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            color: "#64748B",
            textTransform: "uppercase",
          }}
        >
          Software engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 920,
            }}
          >
            Building scalable systems and useful products.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#64748B" }}>
            Ganesh Chincholkar
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
