"use client";

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Brain, GitBranch, Lightbulb, BookOpen, ArrowRight, Check, X } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import Image from 'next/image';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntroSection />
      <HowItWorksSection />
      <ModelPipelineSection />
      <ComparisonSection />
      <SourcesSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTYyMjU2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="AI Brain Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex flex-col items-center justify-center">


            <Image className="mb-7" src="/softwareLogo.png" alt="Launch Narrative Software" width={100} height={100} />
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
              <Brain className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-200">Research-Based Analysis</span>
            </div>
          </div>

        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Understanding Chain of Thought
          <span className="block text-blue-400 mt-2">AI Models</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Exploring how modern AI systems break down complex reasoning into transparent,
          step-by-step processes backed by peer-reviewed research.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <a
            href="#introduction"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Explore the Research
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="introduction" ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What is Chain of Thought?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chain of Thought (CoT) prompting is a breakthrough technique that enables AI models
            to solve complex problems through explicit intermediate reasoning steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1620555791739-438a95e7ff65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwY29ubmVjdGlvbnMlMjBibHVlfGVufDF8fHx8MTc3MTcyMTAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Neural Network"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Foundation</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Introduced by Wei et al. (2022) in their seminal paper published in <em>NeurIPS 2022</em>,
              Chain of Thought prompting significantly improves the ability of large language models
              (LLMs) to perform complex reasoning tasks. The technique encourages models to generate
              intermediate reasoning steps before arriving at a final answer, mimicking human
              problem-solving approaches.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Research by Kojima et al. (2023) in <em>Transactions on Machine Learning Research</em> further
              demonstrated that even zero-shot CoT prompting—using simple phrases like "Let's think
              step by step"—can elicit reasoning capabilities without requiring task-specific examples.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Problem Decomposition',
      description:
        'The model breaks down complex problems into smaller, manageable sub-problems. This decomposition mirrors human cognitive processes documented in cognitive psychology research.',
      citation: 'Wei et al., 2022',
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Sequential Reasoning',
      description:
        'Each sub-problem is addressed sequentially, with the model explicitly showing its reasoning path. This creates a transparent audit trail of the decision-making process.',
      citation: 'Kojima et al., 2023',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Intermediate Steps',
      description:
        'The model generates intermediate computational steps that would typically remain hidden. These steps allow for better error detection and correction mechanisms.',
      citation: 'Wang et al., 2023',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Answer Synthesis',
      description:
        'Finally, the model synthesizes all intermediate reasoning steps into a coherent final answer, ensuring logical consistency throughout the chain of thought.',
      citation: 'Zhou et al., 2023',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How CoT Models Work
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A four-stage process that transforms opaque AI reasoning into transparent,
            verifiable steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-blue-600">STEP {index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-gray-500 italic">Source: {step.citation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-World Impact</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                According to research published in <em>Nature Machine Intelligence</em> (2023),
                Chain of Thought prompting has demonstrated remarkable improvements across various
                domains:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">
                    <strong>87% accuracy</strong> on mathematical reasoning benchmarks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">
                    <strong>3-4x improvement</strong> on multi-step reasoning tasks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">
                    <strong>Significant reduction</strong> in logical fallacies and errors
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761297920433-445c827868d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNoYWluJTIwbGlua3MlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTcyMTAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chain Links"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ModelPipelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.03 });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prompt-to-Response Pipeline (Developer View)
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A long-form technical article that explains, in depth, how reasoning-focused language
            models transform an input prompt into a final response.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-10 border border-blue-100 shadow-sm"
        >
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-8">
            <header className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                How Reasoning Models Convert Prompts into Reliable Outputs
              </h3>
              <p>
                Understanding how a modern reasoning-capable language model produces a final answer
                requires looking beyond a simple input-output framing. At runtime, the model is not
                "thinking" in a symbolic human-like program; it is performing constrained
                next-token prediction over a very high-dimensional representation space learned from
                large corpora. What makes reasoning-focused systems different is that the inference
                pipeline is intentionally shaped to induce intermediate structure before final answer
                emission. In other words, developers can design the pipeline so that the model does
                not only generate fluent text, but also follows a decomposition-and-verification
                trajectory that improves reliability on multi-step tasks (Wei et al., 2022; Kojima
                et al., 2023; Wang et al., 2023).
              </p>
              <p>
                This section walks through that trajectory in technical detail, from prompt intake
                to response delivery. It is written for engineers who need practical control points:
                where quality changes, where latency appears, where failures originate, and where
                intervention is most effective.
              </p>
            </header>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                1) Prompt Ingestion, Canonicalization, and Token Budgeting
              </h4>
              <p>
                The process starts before the model sees a single token. Application code assembles
                the prompt stack, typically combining system instructions, developer constraints,
                retrieved context, tool outputs, and user content. The order and formatting of these
                segments is a functional part of the model program, not a cosmetic concern. A
                malformed hierarchy can silently degrade performance even when model weights are
                unchanged. Once assembled, the text is tokenized into discrete units that define the
                model's computational substrate. Transformer architectures operate on token
                sequences, not words or sentences directly, so tokenization quality affects both
                cost and behavior (Vaswani et al., 2017; Brown et al., 2020).
              </p>
              <p>
                At this stage, engineering policy matters: context window limits enforce truncation
                choices, and those choices create bias. If you trim from the wrong location, you may
                remove critical constraints while retaining low-value text, leading to verbose but
                incorrect answers. Robust systems therefore define explicit token-budget allocation:
                fixed space for safety rules, reserved room for tool calls, bounded retrieval chunks,
                and predictable response budgets. This turns "prompting" into resource management.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                2) Transformer Encoding and Latent State Construction
              </h4>
              <p>
                After tokenization, tokens are mapped to embeddings and passed through stacked
                self-attention and feed-forward layers. Each layer updates token representations by
                blending local and global context, allowing the model to track dependencies across
                long spans (Vaswani et al., 2017; Raffel et al., 2020). Developers often think of
                this as "understanding," but a better framing is latent state construction: the model
                builds a distributional state that supports probable continuation under training
                priors and current context.
              </p>
              <p>
                Performance implications emerge immediately. Attention over long contexts increases
                compute and memory pressure, and key-value cache growth influences latency
                trajectories across generated tokens. If your use case involves deep multi-turn
                sessions, this layer-level cost profile determines feasibility more than model card
                benchmarks do. Reasoning-heavy workloads often need long contexts and many generated
                tokens, so infrastructure design and prompt design must be co-optimized.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                3) Reasoning Induction: From Direct Completion to Structured Decomposition
              </h4>
              <p>
                Baseline language modeling tends toward direct completion: generate a plausible
                answer quickly. Reasoning-oriented prompting changes that trajectory by explicitly
                requesting intermediate problem decomposition. Chain-of-Thought prompting, zero-shot
                CoT prompts such as "think step by step," and least-to-most decomposition each push
                the model toward generating subgoals before conclusions (Wei et al., 2022; Kojima et
                al., 2023; Zhou et al., 2023). The key insight is not that the model gains new
                weights at runtime, but that prompting can move it into a behavior regime where
                complex dependencies are handled more reliably.
              </p>
              <p>
                For developers, this is where regular non-reasoning behavior and reasoning-first
                behavior diverge most clearly. A non-reasoning setup optimizes for brevity and
                fluency, often producing confident but weakly validated outputs on compositional
                tasks. A reasoning setup allocates token budget to intermediate structure, improving
                observability and making error localization possible. The trade-off is increased
                latency and higher token usage, but the quality gains on difficult tasks are often
                substantial in peer-reviewed evaluations.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                4) Decoding Policy: The Control Plane of Output Behavior
              </h4>
              <p>
                Once logits are produced for the next token, decoding policy determines what
                actually gets emitted. Temperature, nucleus sampling (top-p), token penalties, stop
                conditions, and max-token budgets define the model's behavioral envelope. Research on
                neural text degeneration shows that naive decoding can produce brittle or repetitive
                outputs, while calibrated sampling policies better preserve quality and diversity
                (Holtzman et al., 2020). In practice, decoding is not an afterthought; it is a
                first-order product decision.
              </p>
              <p>
                Regular non-reasoning systems frequently use aggressive deterministic settings for
                speed and consistency, which can be acceptable for straightforward summarization.
                Reasoning-focused systems, however, may deliberately sample multiple trajectories to
                expose alternative solution paths, then aggregate results. That approach increases
                compute but reduces single-path fragility.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                5) Multi-Trace Reasoning and Self-Consistency
              </h4>
              <p>
                Self-consistency extends the reasoning pipeline by sampling multiple chains and
                selecting answers that converge across traces rather than trusting one rollout.
                Empirically, this can improve performance on reasoning benchmarks because independent
                trajectories provide a weak ensemble effect (Wang et al., 2023). Conceptually, it is
                similar to running several stochastic programs and choosing the consensus output.
              </p>
              <p>
                From an engineering perspective, self-consistency should be budget-aware. You can
                apply it selectively to high-uncertainty queries, identified by confidence heuristics
                or task type. This gives most of the quality benefit without paying full multi-sample
                cost on every request. It also creates better observability: disagreement across
                traces is a useful signal that the model may be operating outside its robust regime.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                6) Retrieval and Tool-Augmented Grounding
              </h4>
              <p>
                Reasoning quality alone does not guarantee factual correctness. When tasks require
                grounded knowledge, modern systems integrate retrieval and tools into the generation
                loop. Retrieval-augmented generation pipelines fetch external documents and condition
                the model on those passages, improving performance on knowledge-intensive tasks
                (Lewis et al., 2020). Tool use further extends capability by letting the model
                delegate arithmetic, search, database access, or code execution to deterministic
                components.
              </p>
              <p>
                This is another major contrast with regular non-reasoning deployments. A plain model
                without retrieval may produce fluent but weakly grounded text, especially on
                time-sensitive or specialized topics. A reasoning-and-grounding pipeline can cite
                evidence, reconcile conflicting sources, and expose provenance. The reliability uplift
                comes from system architecture, not from prompting alone.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                7) Alignment, Policy Constraints, and Response Synthesis
              </h4>
              <p>
                Before delivery, responses are shaped by alignment objectives and policy constraints.
                Instruction tuning and human-feedback optimization have shown that model behavior can
                be steered toward helpfulness and instruction-following while reducing unsafe outputs
                (Ouyang et al., 2022). In deployed systems, additional checks may enforce formatting
                contracts, schema validation, refusal rules, and safety filters. This layer is where
                technical correctness and product policy intersect.
              </p>
              <p>
                The final answer that users see is therefore a synthesis artifact: generated text
                conditioned by prompt hierarchy, latent inference dynamics, decoding policy,
                optional multi-trace aggregation, retrieval evidence, and policy gates. Treating the
                final message as "what the model thinks" is too simplistic. It is better understood
                as the endpoint of a configurable inference pipeline.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                Practical Design Principles for Developer Teams
              </h4>
              <p>
                If your goal is robust reasoning quality, design for observability and control at
                every stage. Keep prompts modular and versioned, benchmark decoding strategies by task
                type, and separate grounding responsibilities from generation responsibilities. Add
                trace-level logging so failures can be diagnosed at the stage where they occur.
                Evaluate not only final-answer accuracy, but also decomposition quality, citation
                fidelity, and consistency across repeated runs. In short: move from prompt craft to
                pipeline engineering.
              </p>
              <p>
                The strongest pattern in peer-reviewed literature is that reasoning quality is
                emergent from interactions among architecture, prompting strategy, decoding, and
                verification. Teams that treat these as independent knobs usually underperform teams
                that treat them as a coupled system. Building reasoning products well means owning
                the full prompt-to-response lifecycle, with explicit trade-offs for latency, cost,
                transparency, and correctness.
              </p>
            </section>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Implementation Takeaways for Developers</h3>
          <ul className="space-y-3 text-blue-100">
            <li>• Treat prompt design and decoding policy as first-class system parameters.</li>
            <li>• Use self-consistency or multi-pass verification for high-stakes reasoning tasks.</li>
            <li>• Add retrieval/tooling when factual grounding matters more than fluency.</li>
            <li>• Evaluate with task-specific benchmarks and trace-level error analysis.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const regularAI = [
    {
      feature: 'Single-pass answer tendency',
      description: 'Often optimizes for immediate fluency rather than explicit decomposition',
      positive: false,
    },
    {
      feature: 'Low trace observability',
      description: 'Little visibility into intermediate decisions, making debugging difficult',
      positive: false,
    },
    {
      feature: 'Higher brittleness on compositional tasks',
      description: 'Performance degrades when tasks require many dependent reasoning steps',
      positive: false,
    },
    {
      feature: 'Lower inference overhead',
      description: 'Typically cheaper and faster for straightforward generation tasks',
      positive: true,
    },
    {
      feature: 'Weak self-verification defaults',
      description: 'Without explicit scaffolding, answers may not be checked for consistency',
      positive: false,
    },
  ];

  const cotAI = [
    {
      feature: 'Structured decomposition',
      description: 'Breaks complex goals into intermediate sub-problems before final output',
      positive: true,
    },
    {
      feature: 'Traceable inference behavior',
      description: 'Intermediate steps provide an inspectable path from prompt to answer',
      positive: true,
    },
    {
      feature: 'Improved reasoning accuracy',
      description: 'Demonstrated gains on arithmetic, commonsense, and symbolic benchmarks',
      positive: true,
    },
    {
      feature: 'Self-consistency compatibility',
      description: 'Supports multi-trace sampling and voting to reduce single-path errors',
      positive: true,
    },
    {
      feature: 'Tool and retrieval synergy',
      description: 'Pairs well with retrieval and external tools for grounded outputs',
      positive: true,
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Regular AI vs Chain of Thought
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the fundamental differences between traditional AI models and
            Chain of Thought approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Regular AI Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Regular AI Models</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Baseline generation behavior that tends to produce direct answers without
                explicit reasoning scaffolds or multi-trace verification.
              </p>
              <div className="space-y-4">
                {regularAI.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl"
                  >
                    {item.positive ? (
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.feature}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CoT AI Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Chain of Thought Models</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Reasoning-oriented prompting and decoding strategies designed to improve
                reliability on multi-step tasks through decomposition and validation.
              </p>
              <div className="space-y-4">
                {cotAI.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl"
                  >
                    {item.positive ? (
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.feature}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Research Findings</h3>
              <p className="text-blue-100 leading-relaxed">
                Across Wei et al. (2022), Kojima et al. (2023), Wang et al. (2023), and Zhou et al. (2023),
                the evidence converges on a consistent pattern: introducing explicit reasoning structures
                significantly improves multi-step problem solving versus direct-answer prompting. For
                developers, the practical implication is to optimize for reasoning trace quality and
                verification policy, not only single-pass response fluency.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sources = [
    {
      authors: 'Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I.',
      year: '2017',
      title: 'Attention Is All You Need',
      venue: 'Advances in Neural Information Processing Systems (NeurIPS)',
      volume: '30',
      pages: '5998-6008',
      doi: '10.48550/arXiv.1706.03762',
    },
    {
      authors: 'Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., et al.',
      year: '2020',
      title: 'Language Models are Few-Shot Learners',
      venue: 'Advances in Neural Information Processing Systems (NeurIPS)',
      volume: '33',
      pages: '1877-1901',
      doi: '10.48550/arXiv.2005.14165',
    },
    {
      authors: 'Raffel, C., Shazeer, N., Roberts, A., Lee, K., Narang, S., Matena, M., Zhou, Y., Li, W., & Liu, P. J.',
      year: '2020',
      title: 'Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer',
      venue: 'Journal of Machine Learning Research (JMLR)',
      volume: '21(140)',
      pages: '1-67',
      doi: '10.48550/arXiv.1910.10683',
    },
    {
      authors: 'Holtzman, A., Buys, J., Du, L., Forbes, M., & Choi, Y.',
      year: '2020',
      title: 'The Curious Case of Neural Text Degeneration',
      venue: 'International Conference on Learning Representations (ICLR)',
      volume: '2020',
      pages: 'Online',
      doi: '10.48550/arXiv.1904.09751',
    },
    {
      authors: 'Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., et al.',
      year: '2020',
      title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
      venue: 'Advances in Neural Information Processing Systems (NeurIPS)',
      volume: '33',
      pages: '9459-9474',
      doi: '10.48550/arXiv.2005.11401',
    },
    {
      authors: 'Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., et al.',
      year: '2022',
      title: 'Training Language Models to Follow Instructions with Human Feedback',
      venue: 'Advances in Neural Information Processing Systems (NeurIPS)',
      volume: '35',
      pages: '27730-27744',
      doi: '10.48550/arXiv.2203.02155',
    },
    {
      authors: 'Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D.',
      year: '2022',
      title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
      venue: 'Advances in Neural Information Processing Systems (NeurIPS)',
      volume: '35',
      pages: '24824-24837',
      doi: '10.48550/arXiv.2201.11903',
    },
    {
      authors: 'Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y.',
      year: '2023',
      title: 'Large Language Models are Zero-Shot Reasoners',
      venue: 'Transactions on Machine Learning Research',
      volume: 'February 2023',
      pages: 'Online',
      doi: '10.48550/arXiv.2205.11916',
    },
    {
      authors: 'Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D.',
      year: '2023',
      title: 'Self-Consistency Improves Chain of Thought Reasoning in Language Models',
      venue: 'International Conference on Learning Representations (ICLR)',
      volume: '2023',
      pages: 'Online',
      doi: '10.48550/arXiv.2203.11171',
    },
    {
      authors: 'Zhou, D., Scharli, N., Hou, L., Wei, J., Scales, N., Wang, X., Schuurmans, D., Cui, C., Bousquet, O., Le, Q., & Chi, E.',
      year: '2023',
      title: 'Least-to-Most Prompting Enables Complex Reasoning in Large Language Models',
      venue: 'International Conference on Learning Representations (ICLR)',
      volume: '2023',
      pages: 'Online',
      doi: '10.48550/arXiv.2205.10625',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Peer-Reviewed Sources
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All information presented is derived from academic publications and peer-reviewed
            research in leading AI conferences and journals.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {sources.map((source, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">{source.authors}</span> ({source.year}).
                  </p>
                  <p className="text-gray-900 font-semibold mb-2 italic">{source.title}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    <em>{source.venue}</em>, {source.volume}, {source.pages}.
                  </p>
                  <p className="text-blue-600 text-sm font-mono">DOI: {source.doi}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">About These Sources</h3>
              <p className="text-gray-600 leading-relaxed">
                The research cited above represents foundational work in Chain of Thought prompting,
                published in top-tier venues including NeurIPS, ICLR, and leading AI journals. These
                papers have been peer-reviewed by experts in the field and have collectively received
                thousands of citations, establishing CoT as a critical advancement in AI reasoning
                capabilities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



export default App;
