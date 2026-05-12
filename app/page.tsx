const YOUTUBE_URL = "https://youtube.com/@outofoffice";
const TWITTER_URL = "https://x.com/outofoffice";

export default function Home() {
  return (
    <div className="min-h-dvh w-full bg-paper text-ink">
      <div className="mx-auto flex min-h-dvh w-full max-w-[72rem] flex-col px-8 py-8 md:px-16 md:py-10">
        {/* Masthead — publication folio */}
        <header className="flex items-baseline justify-between gap-6 border-t border-rule pt-3 text-[0.68rem] uppercase tracking-[0.22em] text-folio">
          <span>A Documentary Studio</span>
          <span className="hidden sm:inline">Decentralized Intelligence</span>
          <span>Vol. I · MMXXVI</span>
        </header>

        {/* Cover — stacked wordmark + editorial subtitle */}
        <section className="flex flex-1 flex-col items-center justify-center py-24 md:py-32">
          <h1
            aria-label="Out of Office"
            className="text-center font-extralight uppercase leading-[0.92] tracking-[0.02em]"
            style={{ fontSize: "clamp(3.5rem, 13vw, 9rem)" }}
          >
            <span className="block">Out&nbsp;of</span>
            <span className="block">Office</span>
          </h1>

          <p
            className="mt-14 max-w-[28ch] text-center font-light leading-[1.35] md:mt-20"
            style={{ fontSize: "clamp(1rem, 1.7vw, 1.25rem)" }}
          >
            Cinema for the decentralized intelligence era.
          </p>
        </section>

        {/* Editorial body — narrow column, offset right */}
        <section className="mb-24 flex justify-end md:mb-32">
          <p className="max-w-[38ch] text-[0.92rem] font-light leading-[1.85] md:text-[0.95rem]">
            Out of Office is a film studio covering the people, ideas, and
            protocols building artificial intelligence in the open.
          </p>
        </section>

        {/* Bottom folio — table of contents + page number */}
        <footer className="flex flex-col gap-3 border-t border-rule pt-3 text-[0.68rem] uppercase tracking-[0.22em] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <nav className="flex gap-6 md:gap-10">
            <FolioLink href={YOUTUBE_URL} index="01" label="Watch" channel="YT" ariaLabel="Watch on YouTube (opens in new tab)" />
            <FolioLink href={TWITTER_URL} index="02" label="Follow" channel="X" ariaLabel="Follow on Twitter (opens in new tab)" />
          </nav>
          <span className="text-folio">P. 01 / 01</span>
        </footer>
      </div>
    </div>
  );
}

function FolioLink({
  href,
  index,
  label,
  channel,
  ariaLabel,
}: {
  href: string;
  index: string;
  label: string;
  channel: string;
  ariaLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group inline-flex items-baseline gap-2 text-ink"
    >
      <span className="text-folio">{index}</span>
      <span className="border-b border-transparent transition-colors duration-200 group-hover:border-ink">
        {label}
      </span>
      <span className="text-folio">/ {channel}</span>
    </a>
  );
}
