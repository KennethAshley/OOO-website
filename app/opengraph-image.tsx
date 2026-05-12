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
  const [light, regular] = await Promise.all([loadFont(300), loadFont(400)]);

  type OgFont = {
    name: string;
    data: ArrayBuffer;
    weight: 300 | 400;
    style: "normal";
  };
  const fonts: OgFont[] = [];
  if (light) fonts.push({ name: "JetBrains Mono", data: light, weight: 300, style: "normal" });
  if (regular) fonts.push({ name: "JetBrains Mono", data: regular, weight: 400, style: "normal" });

  const fontFamily =
    fonts.length > 0
      ? "'JetBrains Mono', ui-monospace, monospace"
      : "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

  const PAPER = "#f7f5f0";
  const INK = "#0a0a0a";
  const FOLIO = "#a8a39a";
  const RULE = "#d8d4cc";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: PAPER,
          color: INK,
          display: "flex",
          flexDirection: "column",
          padding: "48px 64px",
          fontFamily,
        }}
      >
        {/* Top folio */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${RULE}`,
            paddingTop: 14,
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: FOLIO,
          }}
        >
          <span>A Documentary Studio</span>
          <span>Vol. I · MMXXVI</span>
        </div>

        {/* Cover wordmark */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          <div
            style={{
              fontSize: 168,
              fontWeight: 300,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              lineHeight: 0.92,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Out of</span>
            <span>Office</span>
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 300,
              color: INK,
              textAlign: "center",
              lineHeight: 1.35,
              maxWidth: 760,
            }}
          >
            Cinema for the decentralized intelligence era.
          </div>
        </div>

        {/* Bottom folio */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${RULE}`,
            paddingTop: 14,
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: FOLIO,
          }}
        >
          <span>Out of Office</span>
          <span>P. 01 / 01</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
