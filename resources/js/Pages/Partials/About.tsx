export default function About() {

    return (
        <section id="about" className="py-20 px-4 md:px-16">
            <div className="max-w-7xl mx-auto bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-10 rounded-xl border border-[#e6e4dc]">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#2e250a]">About Me</h2>
                <div className="space-y-6">
                    <p className="text-xl leading-relaxed text-[#2e250a]">
                        Hey! I'm Shawn — a <strong>Cloud/DevOps/Full-Stack Engineer</strong> who loves making infrastructure <em>smoother</em>, <em>faster</em>, and <em>easier</em> for developers.
                    </p>
                    <p className="text-xl leading-relaxed text-[#2e250a]">
                        I specialize in <strong>Kubernetes</strong> and <strong>Terraform</strong>, and I've spent the past few years building <strong>internal platforms</strong> that simplify cloud deployments, enforce best practices, and help teams ship with confidence.
                    </p>
                    <p className="text-xl leading-relaxed text-[#2e250a]">
                        I believe <strong>DevOps</strong> isn't just about <strong>automation</strong> — it's about creating <em>great developer experiences</em>. Whether I'm building <strong>reusable IaC modules</strong>, managing <strong>environments</strong> and <strong>pipelines</strong>, or spinning up <strong>custom tooling</strong>, my goal is always the same: to <em>reduce friction</em> and make ops feel <em>seamless</em>.
                    </p>
                    <p className="text-xl leading-relaxed text-[#2e250a]">
                        Lately, I've been diving into <strong>AI for cloud automation</strong> — using <strong>language models</strong> to <em>write Terraform faster</em>, or even <em>turn natural language into deployable infrastructure tasks</em>.
                    </p>
                    <p className="text-xl leading-relaxed text-[#2e250a]">
                        When I'm not automating something, I'm probably thinking about how to <em>automate it better</em>.
                    </p>
                </div>
            </div>
        </section>
    )
}
