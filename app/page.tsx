export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Catch API Performance<br />
          <span className="text-[#58a6ff]">Regressions Instantly</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Continuously monitor your API endpoints, detect slowdowns the moment they happen, and get alerted before your users ever notice.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $9/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-1">Real-Time Detection</h3>
            <p className="text-[#8b949e] text-sm">Periodic probes catch regressions within seconds, not hours.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">📊</div>
            <h3 className="text-white font-semibold mb-1">Trend Dashboards</h3>
            <p className="text-[#8b949e] text-sm">Visualize p50/p95/p99 response times across all your endpoints.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🔔</div>
            <h3 className="text-white font-semibold mb-1">Webhook Alerts</h3>
            <p className="text-[#8b949e] text-sm">Get notified via Slack, PagerDuty, or any webhook when thresholds are breached.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited API endpoints",
              "60-second check intervals",
              "p50 / p95 / p99 metrics",
              "Configurable alert thresholds",
              "Webhook & Slack alerts",
              "30-day metric history"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does regression detection work?</h3>
            <p className="text-[#8b949e] text-sm">We compare recent response times against a rolling baseline. When the p95 latency exceeds your configured threshold, an alert fires immediately via your chosen channel.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which endpoints can I monitor?</h3>
            <p className="text-[#8b949e] text-sm">Any publicly reachable HTTP/HTTPS endpoint. Add as many as you need — REST, GraphQL, or plain health-check URLs all work.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} API Regression Alerter. All rights reserved.
      </footer>
    </main>
  );
}
