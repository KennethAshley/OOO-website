const YOUTUBE_URL = "https://youtube.com/@outofoffice";
const TWITTER_URL = "https://x.com/outofoffice";

const META: ReadonlyArray<[string, string]> = [
  ["Status", "Active"],
  ["Est.", "MMXXVI"],
  ["Focus", "Decentralized AI"],
  ["Format", "Film"],
  ["Channels", "YT / X"],
  ["Transmission", "01"],
];

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-[80rem] flex-1 flex-col px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16">
        {/* Top transmission bar */}
        <div className="flex items-center justify-between border-t border-rule pt-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted">
          <span>Out-of-Office / Broadcast</span>
          <span aria-hidden="true">◐ Live</span>
        </div>

        {/* Main two-column grid */}
        <main className="mt-12 grid flex-1 grid-cols-1 gap-12 md:mt-16 md:grid-cols-[1.4fr_1fr] md:gap-0">
          {/* LEFT COLUMN */}
          <section className="flex flex-col gap-10 md:pr-12 lg:pr-16">
            <h1
              className="font-medium uppercase leading-[1.02] tracking-[0.18em]"
              style={{ fontSize: "clamp(1.75rem, 5.6vw, 3.5rem)" }}
            >
              Out of Office
            </h1>

            <p
              className="text-lg leading-[1.45] text-foreground"
              style={{ maxWidth: "30ch" }}
            >
              Cinema for the decentralized intelligence era.
            </p>

            <p
              className="text-sm leading-[1.7] text-foreground/85"
              style={{ maxWidth: "46ch" }}
            >
              Out of Office is a film studio covering the people, ideas, and
              protocols building AI in the open.
            </p>
          </section>

          {/* RIGHT COLUMN — divider on desktop, top border on mobile */}
          <aside className="flex flex-col gap-8 border-t border-rule pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0 lg:pl-16">
            <dl className="grid grid-cols-[7.5rem_1fr] gap-x-4 gap-y-3 text-[0.72rem] uppercase tracking-[0.14em] sm:grid-cols-[8.5rem_1fr]">
              {META.map(([label, value]) => (
                <div key={label} className="contents">
                  <dt className="text-muted">{label}</dt>
                  <dd className="text-foreground">{value}</dd>
                </div>
              ))}
            </dl>

            <hr className="border-t border-rule" />

            <div className="flex flex-col gap-3">
              <ChannelLink
                href={YOUTUBE_URL}
                label="Watch on YouTube"
                ariaLabel="Watch Out of Office on YouTube (opens in new tab)"
              />
              <ChannelLink
                href={TWITTER_URL}
                label="Follow on Twitter"
                ariaLabel="Follow Out of Office on Twitter (opens in new tab)"
              />
            </div>
          </aside>
        </main>

        {/* Footer */}
        <footer className="mt-16 flex items-center justify-between border-t border-rule pt-4 text-[0.7rem] uppercase tracking-[0.18em] text-muted md:mt-20">
          <span>Out of Office © MMXXVI</span>
          <span className="flex items-center gap-2">
            <span>End of transmission</span>
            <span className="ooo-caret" aria-hidden="true" />
          </span>
        </footer>
      </div>
    </div>
  );
}

function ChannelLink({
  href,
  label,
  ariaLabel,
}: {
  href: string;
  label: string;
  ariaLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group flex items-center justify-between border border-rule px-4 py-4 text-[0.72rem] uppercase tracking-[0.16em] transition-colors duration-150 hover:bg-foreground hover:text-background hover:border-foreground"
    >
      <span className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-block h-2.5 w-2.5 border border-current transition-colors"
        />
        {label}
      </span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-150 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
      >
        ↗
      </span>
    </a>
  );
}
