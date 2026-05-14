import { ImageResponse } from "next/og";

export const alt =
  "Out of Office. Cinema for the decentralized intelligence era.";
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
            "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",
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
  const [anton, sansRegular, sansBold] = await Promise.all([
    loadGoogleFont("Anton", 400),
    loadGoogleFont("Public Sans", 400),
    loadGoogleFont("Public Sans", 700),
  ]);

  type OgFont = {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 700;
    style: "normal";
  };
  const fonts: OgFont[] = [];
  if (anton)
    fonts.push({ name: "Anton", data: anton, weight: 400, style: "normal" });
  if (sansRegular)
    fonts.push({
      name: "Public Sans",
      data: sansRegular,
      weight: 400,
      style: "normal",
    });
  if (sansBold)
    fonts.push({
      name: "Public Sans",
      data: sansBold,
      weight: 700,
      style: "normal",
    });

  const display =
    anton !== null
      ? "'Anton', 'Public Sans', sans-serif"
      : "'Public Sans', system-ui, sans-serif";
  const body =
    sansRegular !== null
      ? "'Public Sans', system-ui, sans-serif"
      : "system-ui, sans-serif";

  const PAPER = "#f0ebe2";
  const INK = "#1c1916";
  const RUST = "#b5451b";
  const MID = "#7a7469";
  const RULE = "rgba(28,25,22,0.18)";

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
          fontFamily: body,
        }}
      >
        {/* Masthead */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "40px 64px 28px",
            borderBottom: `1px solid ${RULE}`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: display,
              fontSize: 32,
              textTransform: "uppercase",
              lineHeight: 0.95,
              letterSpacing: "0.01em",
            }}
          >
            <span>Out of Office</span>
            <span>Media Group</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 28,
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: MID,
            }}
          >
            <span>Issue 01</span>
            <span>May 2026</span>
            <span>Raleigh NC</span>
            <span style={{ color: RUST }}>On the record</span>
          </div>
        </div>

        {/* Hero stack */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "56px 64px",
          }}
        >
          <span
            style={{
              fontFamily: display,
              fontSize: 132,
              lineHeight: 0.92,
              textTransform: "uppercase",
              letterSpacing: "0.005em",
              color: INK,
            }}
          >
            I am currently
          </span>
          <span
            style={{
              fontFamily: display,
              fontSize: 132,
              lineHeight: 0.92,
              textTransform: "uppercase",
              letterSpacing: "0.005em",
              color: INK,
            }}
          >
            out of office.
          </span>
          <span
            style={{
              display: "flex",
              width: 72,
              height: 3,
              background: INK,
              marginTop: 32,
              marginBottom: 28,
            }}
          />
          <span
            style={{
              fontFamily: body,
              fontWeight: 700,
              fontSize: 40,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: INK,
              maxWidth: 880,
            }}
          >
            Cinema for the decentralized intelligence era.
          </span>
        </div>

        {/* Colophon strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            padding: "20px 64px 28px",
            borderTop: `1px solid ${RULE}`,
            fontSize: 15,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: MID,
          }}
        >
          <span>Out of Office Media Group · 2026</span>
          <span>Ken Nicholson &amp; Andre Payne</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
