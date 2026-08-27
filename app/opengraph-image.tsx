import { ImageResponse } from "next/og";
import { loadArchivo } from "@/lib/og-font";

export const alt = "AM Salt — Not a wellness blend. Just salt.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const archivoExtraBold = await loadArchivo(800);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFBFD",
          padding: "72px 80px",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#FF8524",
              display: "flex",
            }}
          />
          <div
            style={{
              color: "#5E6C85",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            AM SALT
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#0F1A2E",
            fontSize: 74,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -2,
            maxWidth: 980,
          }}
        >
          <div style={{ display: "flex" }}>You&rsquo;re not tired.</div>
          <div style={{ display: "flex" }}>You&rsquo;re dry.</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            color: "#5E6C85",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 64,
              height: 6,
              background: "#FF8524",
              display: "flex",
            }}
          />
          <div style={{ display: "flex" }}>No sugar</div>
          <div style={{ display: "flex" }}>No crash</div>
          <div style={{ display: "flex" }}>Fully alert</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Archivo",
          data: archivoExtraBold,
          style: "normal",
          weight: 800,
        },
      ],
    }
  );
}
