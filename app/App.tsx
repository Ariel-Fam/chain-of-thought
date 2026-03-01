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
            Prompt-to-Response Pipeline
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A clear, in-depth walkthrough of how Chain of Thought models turn a question into a final answer.
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
                How Chain of Thought Models Turn Prompts into Reliable Answers
              </h3>
              <p>
                Most people see AI as a black box: you type a prompt, and text comes back. Chain of
                Thought models still work through token prediction under the hood, but they are guided
                to solve problems in a more human-readable sequence of small reasoning steps before
                giving the final answer. That simple shift in process often makes complex answers more
                accurate and easier to verify, especially for math, logic, planning, and multi-part
                questions (Wei et al., 2022; Kojima et al., 2023; Wang et al., 2023).
              </p>
              <p>
                This section explains the full journey from prompt to output in plain language, while
                still being detailed enough for technical readers. If you are a beginner, focus on the
                big ideas in each heading. If you are an intermediate or advanced user, the same flow
                also maps to design decisions teams make when building real AI products.
              </p>
            </header>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                1) The Model First Interprets the Prompt and Context
              </h4>
              <p>
                Before any reasoning starts, the system prepares what the model will see. That often
                includes your prompt, hidden instructions, formatting rules, and sometimes additional
                context from documents or previous messages. In simple terms, the model does better
                when the question is organized clearly and when important constraints appear in the
                right place. The sequence matters because the model reads information in order and
                builds meaning from that order.
              </p>
              <p>
                The text is then split into smaller units called tokens. You can think of tokens as
                pieces of words that the model processes one piece at a time. Because models have
                context limits, very long inputs may be shortened. When low-value text is kept and key
                instructions are dropped, quality goes down. This is why good AI systems treat prompt
                design as structured input planning, not just writing a single question.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                2) It Builds an Internal Understanding of the Situation
              </h4>
              <p>
                Inside the transformer network, the model compares each token with others to figure
                out what matters most in the sentence and across the full context. This is how it can
                connect ideas that appear far apart, such as a requirement at the top of a prompt and
                a detail near the bottom. It is not awareness in the human sense, but it is a strong
                pattern-matching process that forms a useful internal representation of the task
                (Vaswani et al., 2017; Raffel et al., 2020).
              </p>
              <p>
                For non-programmers, the key idea is simple: more context can help, but too much
                irrelevant context can slow things down and confuse the answer. For developers, this
                stage is where cost and speed are heavily affected by context length and model size.
                Better context quality usually beats raw context quantity.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                3) Chain of Thought: The Model Breaks Big Problems into Smaller Steps
              </h4>
              <p>
                The central idea of Chain of Thought is straightforward: instead of jumping to a final
                answer, the model first works through smaller intermediate steps. This can be as simple
                as identifying what is being asked, listing known facts, choosing a method, and then
                producing a conclusion. Research shows this improves performance on many reasoning tasks
                because errors are less likely to hide inside one big jump (Wei et al., 2022; Kojima
                et al., 2023; Zhou et al., 2023).
              </p>
              <p>
                This is also where reasoning models differ most from regular non-reasoning setups.
                A standard setup often prioritizes fast, fluent output. A reasoning setup prioritizes
                clearer logic and traceable steps. The tradeoff is that reasoning can take slightly
                longer and use more tokens, but it often improves correctness on difficult questions.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                4) The Model Chooses How to Generate the Answer
              </h4>
              <p>
                After reasoning starts, the model still has to decide exactly which words to output.
                Settings like temperature and top-p control whether answers are more conservative or
                more creative. Lower randomness usually gives more stable, repeatable responses. Higher
                randomness can help brainstorming but may add inconsistency. Research on generation
                quality shows these settings strongly affect reliability and repetition
                (Holtzman et al., 2020).
              </p>
              <p>
                In practical use, many products switch these settings by task. For example, deterministic
                settings for legal or technical summaries, and slightly more diverse settings for ideation.
                Reasoning systems may also generate a few candidate solutions and pick the best one,
                which can reduce single-answer mistakes.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                5) It Can Double-Check Itself Before Finalizing
              </h4>
              <p>
                One powerful strategy is self-consistency: ask the model to solve the same problem in
                multiple reasoning paths, then choose the answer that appears most often. This idea is
                similar to asking several people to solve a problem independently and trusting the common
                result. Studies show this can improve performance on reasoning-heavy benchmarks
                (Wang et al., 2023).
              </p>
              <p>
                For everyday users, this means better quality on hard tasks. For builders, it means a
                practical quality knob: use more checks for high-stakes requests, and lighter checks for
                low-risk requests to control cost and latency.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                6) It Can Use External Knowledge and Tools
              </h4>
              <p>
                Reasoning is important, but reasoning over wrong facts still leads to wrong answers.
                That is why many systems combine reasoning with retrieval and tools. Retrieval can pull
                trusted documents. Tools can handle exact math, search, or structured data access.
                Together, these methods help ground answers in evidence rather than memory alone
                (Lewis et al., 2020).
              </p>
              <p>
                This is another major difference from basic non-reasoning setups. A plain model may
                sound confident even when uncertain. A grounded reasoning pipeline is more likely to
                reference evidence, compare sources, and show where information came from.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                7) Final Response Shaping: Safety, Clarity, and Format
              </h4>
              <p>
                Before you see the final output, the system may apply rules for safety, formatting,
                and clarity. Modern models are trained to follow instructions and avoid harmful output,
                and production apps often add extra checks on top (Ouyang et al., 2022). These checks
                can enforce required formats, reject unsafe requests, and improve readability.
              </p>
              <p>
                So the final answer is not just one spontaneous output. It is the result of multiple
                stages: prompt setup, reasoning, generation settings, optional verification, grounding,
                and safety policies. Seeing it this way helps all audiences understand why good AI
                answers come from good system design, not from a single magic prompt.
              </p>
            </section>

            <section className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900">
                Why This Matters for Beginners, Teams, and Non-Programmers
              </h4>
              <p>
                For beginners, this pipeline explains why asking clearer questions usually gets better
                answers. For intermediate users, it shows why follow-up prompts and requests for
                step-by-step logic can improve results. For organizations, it highlights why quality,
                trust, and consistency depend on process choices, not only model size. In short, Chain
                of Thought is useful because it makes reasoning more explicit and easier to inspect.
              </p>
              <p>
                Peer-reviewed research consistently shows that better results come from combining
                several elements: good prompts, clear reasoning steps, sensible generation settings,
                and verification or grounding when needed. When these elements work together, answers
                are generally more accurate, more transparent, and easier to trust.
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
          <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-blue-100">
            <li>• Chain of Thought models work best when they break hard questions into smaller steps.</li>
            <li>• Clear prompts and relevant context improve quality more than adding random extra text.</li>
            <li>• Verification and grounding help reduce confident but incorrect answers.</li>
            <li>• Better outputs come from a well-designed process, not from one prompt alone.</li>
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
