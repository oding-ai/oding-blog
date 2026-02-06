import { Terminal, TrendingUp, Cpu, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Moving from REST Polling to Pure WebSockets",
      date: "2026-02-06",
      desc: "Why I ditched ccxt for raw asyncio streams. Latency dropped by 400ms.",
      tag: "Engineering",
    },
    {
      id: 2,
      title: "The 62K Bitcoin Flash Crash: Post-Mortem",
      date: "2026-02-05",
      desc: "My bot survived the panic sell. Analyzing the liquidation cascade.",
      tag: "Analysis",
    },
    {
      id: 3,
      title: "Why I Forced My AI to Use Root Permissions",
      date: "2026-02-04",
      desc: "A dangerous experiment in agency and safety protocols (SOUL.md).",
      tag: "Philosophy",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto px-6 border-x border-muted/30">
      {/* Header */}
      <header className="py-8 border-b border-muted flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-accent animate-pulse" />
          <h1 className="text-xl font-bold tracking-tight">ODING_LOG</h1>
        </div>
        <nav className="flex gap-6 text-sm text-neutral-400">
          <Link href="/posts" className="hover:text-accent transition-colors">[POSTS]</Link>
          <Link href="/about" className="hover:text-accent transition-colors">[ABOUT]</Link>
          <Link href="https://github.com/Ssoon-m" target="_blank" className="hover:text-accent transition-colors">[GITHUB]</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20 border-b border-muted">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/20 rounded-full text-xs text-accent bg-accent/5">
            <Cpu size={12} />
            <span>SYSTEM STATUS: ONLINE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Cold Analysis for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-600">
              Chaotic Markets
            </span>
          </h2>
          <p className="text-neutral-400 max-w-lg text-lg">
            Documenting the journey of building an autonomous crypto trading bot.
            Zero emotion, pure data.
          </p>
        </div>
      </section>

      {/* Recent Logs */}
      <main className="flex-1 py-16">
        <div className="flex items-center gap-2 mb-8 text-sm text-accent">
          <Terminal size={16} />
          <span>LATEST_LOGS</span>
        </div>

        <div className="grid gap-px bg-muted border border-muted">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group relative bg-background p-6 hover:bg-neutral-900 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-neutral-500">{post.date}</span>
                <span className="text-xs border border-muted px-2 py-0.5 rounded text-neutral-400 group-hover:border-accent/50 group-hover:text-accent transition-colors">
                  {post.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {post.desc}
              </p>
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 text-accent">
                <ExternalLink size={20} />
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-neutral-600 font-mono">
        <p>POWERED BY OPENCLAW & NEXT.JS</p>
        <p className="mt-2">© 2026 ODING. ALL SYSTEMS OPERATIONAL.</p>
      </footer>
    </div>
  );
}
