const YOUTUBE_URL = "https://youtube.com/@outofoffice";
const TWITTER_URL = "https://x.com/outofoffice";
const PARTNERSHIPS_URL = "mailto:studio@outofoffice.media";

const WORK = [
  {
    title: "Long-form explainers",
    desc: "What this is, why it matters, why now. In the tradition of Johnny Harris and the better Vox short docs.",
  },
  {
    title: "Founder profiles",
    desc: "The people, not the protocols. On the record. Filmed where the work happens.",
  },
  {
    title: "Documentary series",
    desc: "Arcs that compound across months, not stacked content. Built to outlast the news cycle.",
  },
  {
    title: "Field reporting",
    desc: "The conferences, the rooms, the moments worth filming before they get cleaned up for press.",
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-paper text-ink">
      <article className="mx-auto w-full max-w-[40rem] px-5 py-10 md:px-6 md:py-16">
        <EmailHeader />
        <SubjectLine />
        <Body />
        <Signature />
      </article>
    </main>
  );
}

function EmailHeader() {
  return (
    <header className="mb-7 leading-[1.55] text-ink">
      <div className="text-[1.25rem] font-bold leading-[1.3] md:text-[1.375rem]">
        Out of Office
      </div>
      <div className="mt-1 text-[0.8125rem] md:text-[0.875rem]">
        &lt;studio@outofoffice.media&gt;
      </div>
      <div className="text-[0.8125rem] md:text-[0.875rem]">
        to anyone still reading
      </div>
      <div className="text-[0.8125rem] md:text-[0.875rem]">
        Tue, May 15, 2026 at 9:00 AM EST
      </div>
    </header>
  );
}

function SubjectLine() {
  return (
    <h1 className="mb-8 text-[1.1875rem] font-bold leading-[1.35] md:text-[1.3125rem]">
      Re: automatic reply{" "}
      <span className="font-normal">(no reply expected)</span>
    </h1>
  );
}

function Body() {
  return (
    <div className="space-y-[1.1em] text-[1rem] leading-[1.65] md:text-[1.0625rem]">
      <p>We are out of office.</p>

      <p>
        Out of Office Media Group is an independent studio covering the people
        building artificial intelligence in the open. The decentralized side of
        the field, not the big-lab corporate story.
      </p>

      <p>
        We make the narrative layer for what comes next. Long-form. Cinematic.
        On the record. We film the founders, the protocols, and the rooms where
        the next stack gets argued into existence.
      </p>

      <p>
        The first dispatch is in production. We are looking for subjects,
        sources, and crew.
      </p>

      <p>What we make:</p>

      <ol className="ml-5 list-decimal space-y-[0.7em]">
        {WORK.map((w) => (
          <li key={w.title} className="pl-1">
            <span className="font-semibold">{w.title}.</span> {w.desc}
          </li>
        ))}
      </ol>

      <p className="italic">Cinema for the decentralized intelligence era.</p>
    </div>
  );
}

function Signature() {
  return (
    <footer className="mt-10 text-[0.9375rem] leading-[1.6] md:text-[1rem]">
      <div className="mb-3 text-[0.8125rem]">--</div>
      <div className="mb-3">Out of Office, LLC</div>
      <ul className="space-y-1">
        <li>
          YouTube:{" "}
          <SigLink href={YOUTUBE_URL}>youtube.com/@outofoffice</SigLink>
        </li>
        <li>
          X: <SigLink href={TWITTER_URL}>@outofoffice</SigLink>
        </li>
        <li>
          Studio inquiries:{" "}
          <SigLink href={PARTNERSHIPS_URL}>studio@outofoffice.media</SigLink>
        </li>
      </ul>
    </footer>
  );
}

function SigLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-orange underline decoration-orange/50 underline-offset-2 transition-colors hover:decoration-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
    >
      {children}
    </a>
  );
}
