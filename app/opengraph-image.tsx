import { ImageResponse } from "next/og";

export const alt =
  "Out of Office — Cinema for the decentralized intelligence era.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer | null> {
  try {
    const cssRes = await fetch(
      `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`,
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
  const display = await loadGoogleFont("Big Shoulders Display", 900);

  type OgFont = {
    name: string;
    data: ArrayBuffer;
    weight: 900;
    style: "normal";
  };
  const fonts: OgFont[] = [];
  if (display)
    fonts.push({
      name: "Big Shoulders Display",
      data: display,
      weight: 900,
      style: "normal",
    });

  const displayFamily =
    fonts.length > 0
      ? "'Big Shoulders Display', Impact, sans-serif"
      : "Impact, 'Helvetica Neue Condensed Bold', sans-serif";
  const monoFamily = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

  const PAPER = "#f7f5f0";
  const INK = "#0a0a0a";
  const FOLIO = "#6a6458";
  const STOP = "#b14000";

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
        }}
      >
        {/* Top press-credentials bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderBottom: `3px solid ${INK}`,
            padding: "20px 56px",
            fontFamily: monoFamily,
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: INK }}>Out of Office</span>
          <span style={{ color: FOLIO }}>Dispatch No. 01 · MMXXVI</span>
        </div>

        {/* Broadside body */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 56px",
          }}
        >
          <div
            style={{
              fontFamily: displayFamily,
              fontSize: 248,
              fontWeight: 900,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              lineHeight: 0.84,
              display: "flex",
              flexDirection: "column",
              color: INK,
            }}
          >
            <span>Out of</span>
            <span>Office</span>
          </div>

          {/* Slab + tagline — stop-press bar above the kicker */}
          <div
            style={{
              marginTop: 36,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 14,
                background: STOP,
              }}
            />
            <div
              style={{
                marginTop: 16,
                fontFamily: monoFamily,
                fontSize: 22,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: INK,
              }}
            >
              Cinema for the decentralized intelligence era
            </div>
          </div>
        </div>

        {/* Bottom dispatch bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderTop: `3px solid ${INK}`,
            padding: "20px 56px",
            fontFamily: monoFamily,
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            <span>
              <span style={{ color: STOP }}>Watch</span>
              <span style={{ color: INK, marginLeft: 12 }}>
                youtube.com/@outofoffice
              </span>
            </span>
            <span>
              <span style={{ color: STOP }}>Follow</span>
              <span style={{ color: INK, marginLeft: 12 }}>
                x.com/outofoffice
              </span>
            </span>
          </div>
          <span style={{ color: FOLIO }}>© MMXXVI</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
