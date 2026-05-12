const YOUTUBE_URL = "https://youtube.com/@outofoffice";
const TWITTER_URL = "https://x.com/outofoffice";
const PLATE_SRC =
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  return (
    <div className="min-h-dvh w-full bg-paper text-ink">
      {/* Stop-press band — full-bleed red strip at the top edge */}
      <div aria-hidden className="h-1.5 w-full bg-stop md:h-2" />

      {/* Press credentials — top dispatch bar */}
      <header className="border-b-2 border-ink">
        <div className="mx-auto flex w-full max-w-[88rem] flex-wrap items-baseline justify-between gap-x-8 gap-y-1 px-6 py-3 font-mono text-[0.66rem] uppercase tracking-[0.2em] md:px-10">
          <span className="text-ink">Out of Office</span>
          <span className="text-folio">Dispatch No. 01</span>
          <span className="text-folio hidden sm:inline">Field · AI in the Open</span>
          <span className="text-folio">MMXXVI</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[88rem] px-6 md:px-10">
        {/* Broadside — wordmark + slab on the left, plate on the right */}
        <section className="grid grid-cols-12 gap-6 pt-6 md:gap-8 md:pt-10">
          <div className="col-span-12 md:col-span-8">
            <h1
              aria-label="Out of Office"
              className="font-display font-black uppercase leading-[0.84] tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(4rem, 20vw, 20rem)" }}
            >
              <span className="block">Out of</span>
              <span className="block">Office</span>
            </h1>

            {/* Slab + tagline — stop-press bar above the kicker */}
            <div className="mt-5 md:mt-6">
              <span
                aria-hidden
                className="block h-5 w-full bg-stop md:h-6"
              />
              <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-ink md:mt-4 md:text-[0.85rem]" style={{ textWrap: "balance" }}>
                Cinema for the decentralized intelligence era
              </p>
            </div>
          </div>

          {/* Plate — documentary still in the broadside upper-right */}
          <figure className="relative col-span-12 mt-3 md:col-span-4 md:col-start-9 md:mt-0">
            <img
              src={PLATE_SRC}
              alt="Open reference texts and a handwritten notebook in low light: field notes from research in progress."
              loading="eager"
              decoding="async"
              width={400}
              height={500}
              className="aspect-[3/2] w-full object-cover md:aspect-[4/5]"
              style={{ filter: "grayscale(1) contrast(1.4) brightness(0.92)" }}
            />

            {/* Press accreditation stamp — rotated, hand-positioned */}
            <div
              aria-hidden
              className="absolute right-3 top-3 select-none border-2 border-stop px-2 py-1 font-mono text-[0.55rem] uppercase leading-none tracking-[0.28em] text-stop md:right-4 md:top-4 md:text-[0.62rem]"
              style={{ transform: "rotate(-6deg)", backgroundColor: "rgba(247, 245, 240, 0.85)" }}
            >
              <span className="block">Filed</span>
              <span className="block">01 / MMXXVI</span>
            </div>

            <figcaption className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-folio md:text-[0.62rem]">
              Pl. 01 · <span style={{ whiteSpace: "nowrap" }}>Field notes</span>, in progress
            </figcaption>
          </figure>
        </section>

        {/* Manifesto — right-offset, asymmetric across all breakpoints */}
        <section className="mt-6 flex md:mt-8">
          <div className="ml-auto max-w-[30ch] md:max-w-[38ch]">
            <p
              className="font-serif font-light leading-[1.4] text-ink"
              style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.4rem)" }}
            >
              Out of Office is an independent film studio covering the
              people, ideas, and protocols building artificial intelligence{" "}
              <span className="text-stop">in the open</span>.
            </p>
            <p
              className="mt-4 font-serif italic font-light leading-[1.55] text-ink"
              style={{ fontSize: "clamp(0.95rem, 1.15vw, 1.05rem)" }}
            >
              On the record with a field that mostly speaks in press releases.
            </p>
          </div>
        </section>

        {/* Dispatches — film-credits footer */}
        <footer className="mt-10 border-t-2 border-ink pt-4 pb-8 md:mt-12">
          <div className="grid grid-cols-1 gap-y-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] lg:grid-cols-3 lg:items-baseline lg:gap-x-8">
            <DispatchLink
              href={YOUTUBE_URL}
              kicker="Watch"
              handle="youtube.com/@outofoffice"
              channel="YouTube"
            />
            <DispatchLink
              href={TWITTER_URL}
              kicker="Follow"
              handle="x.com/outofoffice"
              channel="X"
            />
            <span className="text-folio lg:text-right">© MMXXVI · Out of Office</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function DispatchLink({
  href,
  kicker,
  handle,
  channel,
}: {
  href: string;
  kicker: string;
  handle: string;
  channel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${kicker} on ${channel} (opens in new tab)`}
      className="group inline-flex items-baseline gap-3 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stop"
    >
      <span className="text-stop">{kicker}</span>
      <span className="border-b border-transparent transition-colors duration-200 group-hover:border-stop">
        {handle}
      </span>
    </a>
  );
}
