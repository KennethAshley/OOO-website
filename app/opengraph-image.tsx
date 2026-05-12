import { ImageResponse } from "next/og";

export const alt =
  "Out of Office — Cinema for the decentralized intelligence era.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(weight: number): Promise<ArrayBuffer | null> {
  try {
    const cssRes = await fetch(
      `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@${weight}&display=swap`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        },
      },
    );
    if (!cssRes.ok) return null;
    const css = await cssRes.text();
    const url = css.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)?.[1];
    if (!url) return null;
    const fontRes = await fetch(url);
    if (!fontRes.ok) return null;
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const [regular, medium] = await Promise.all([loadFont(400), loadFont(500)]);

  type OgFont = {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 500;
    style: "normal";
  };
  const fonts: OgFont[] = [];
  if (regular) fonts.push({ name: "JetBrains Mono", data: regular, weight: 400, style: "normal" });
  if (medium) fonts.push({ name: "JetBrains Mono", data: medium, weight: 500, style: "normal" });

  const fontFamily =
    fonts.length > 0
      ? "'JetBrains Mono', ui-monospace, monospace"
      : "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#ededed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          fontFamily,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #2a2a2a",
            paddingTop: 14,
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#666",
          }}
        >
          <span>Out-of-Office / Broadcast</span>
          <span>Transmission 01</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <div
            style={{
              fontSize: 104,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 500,
              lineHeight: 1.0,
            }}
          >
            Out of Office
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#ededed",
              maxWidth: 900,
              lineHeight: 1.35,
              fontWeight: 400,
            }}
          >
            Cinema for the decentralized intelligence era.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #2a2a2a",
            paddingTop: 14,
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#666",
          }}
        >
          <span>Decentralized AI / On Camera</span>
          <span>MMXXVI</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
