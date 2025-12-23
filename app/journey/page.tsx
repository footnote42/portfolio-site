// app/journey/page.tsx
'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import { BrandHeading, BrandCard } from '../components/brand';

interface Milestone {
  id: string;
  date: string;
  title: string;
  preview: string;
  details: string[];
  phase: 1 | 2 | 3 | 4;
}

interface Phase {
  id: 1 | 2 | 3 | 4;
  title: string;
  period: string;
  quote?: string;
}

const phases: Phase[] = [
  { id: 1, title: 'Can This Actually Work?', period: 'Aug - Sep 2025' },
  { id: 2, title: 'Building Real Tools', period: 'October 2025' },
  { id: 3, title: 'Shipping with Confidence', period: 'November 2025' },
  { id: 4, title: 'Experimenting with Ideas', period: 'December 2025', quote: 'Not every project needs to solve a problem today. Sometimes you build to understand what\'s possible.' },
];

const milestones: Milestone[] = [
  {
    id: 'm1',
    date: '16 Aug 2025',
    title: 'The Pong Article',
    preview: 'Read GitHub blog about building Pong with Copilot',
    details: [
      'First exposure to "vibe coding" concept',
      'Thought: Could I actually do this?',
      'Started first conversation with Copilot',
    ],
    phase: 1,
  },
  {
    id: 'm2',
    date: '26 Aug 2025',
    title: 'First GitHub Commit',
    preview: 'Basic Pong clone - one paddle, no scoring',
    details: [
      'Learned GitHub basics',
      'Discovered VS Code',
      'Realized: This actually works',
    ],
    phase: 1,
  },
  {
    id: 'm3',
    date: '27 Sep 2025',
    title: 'First Claude Conversation',
    preview: 'Tried Claude for the first time',
    details: [
      'Different coaching style',
      'Code execution in app',
      'Tighter feedback loop',
    ],
    phase: 1,
  },
  {
    id: 'm4',
    date: '9 Oct 2025',
    title: 'Squad Rotation Tool',
    preview: 'First real tool for actual users',
    details: [
      'Built in Lovable',
      'Deployed and tested with real squad',
      'Solving actual problem',
    ],
    phase: 2,
  },
  {
    id: 'm5',
    date: '10 Oct 2025',
    title: 'Committed: Claude Pro',
    preview: 'Paid subscription - betting on methodology',
    details: [
      'Hit free tier limits',
      'Momentum was building',
      'This is viable, not just experiment',
    ],
    phase: 2,
  },
  {
    id: 'm6',
    date: '17 Oct 2025',
    title: 'Documentation System',
    preview: 'Adopted Obsidian for context retention',
    details: [
      'Reduced re-explaining across sessions',
      'Built knowledge base',
      'Project documentation structure',
    ],
    phase: 2,
  },
  {
    id: 'm7',
    date: '20 Nov 2025',
    title: 'Portfolio MVP',
    preview: 'Idea to deployed site in 2 days',
    details: [
      'GitHub integration',
      'Hybrid data architecture',
      'Shipped with confidence',
    ],
    phase: 3,
  },
  {
    id: 'm8',
    date: '12 Dec 2025',
    title: 'Session Comparison Tool',
    preview: 'Exploring AI-driven session plan validation through comparative analysis',
    details: [
      'Colleague\'s work with local LLMs debating topics inspired an experiment',
      'Can AI generate alternative coaching sessions and judge them systematically?',
      'Not solving an immediate problem—learning what\'s possible',
      'Technical learning: Small language model deployment concepts, comparative AI outputs',
    ],
    phase: 4,
  },
  {
    id: 'm9',
    date: '14 Dec 2025',
    title: 'Rugby Council AI Deployed',
    preview: 'Three-model collaboration system - from concept to working implementation',
    details: [
      'Built on the comparative analysis ideas from Dec 12 - but evolved into systematic delegation',
      'Three specialized models (analytical, structured, creative) independently plan sessions',
      'Models anonymously review each other\'s work, then a chairman synthesizes best elements',
      'First project using local LM Studio deployment - learning hardware limitations and API cost reduction',
      'Added to portfolio as "Unleashed" - functional tool, not just experiment',
    ],
    phase: 4,
  },
  {
    id: 'm10',
    date: '18-19 Dec 2025',
    title: 'Battlepoos: 24-Hour Build',
    preview: 'Built functioning multiplayer battleship game in one day',
    details: [
      'First real-time multiplayer project - WebSockets, Socket.io, state synchronization',
      'Full-stack TypeScript with shared types between client and server',
      'Instant matchmaking, ship placement, turn-based combat, audio feedback',
      'Learning moment: Real-time architecture is fundamentally different from REST APIs',
      'Not solving a problem - exploring what\'s possible with multiplayer games',
    ],
    phase: 4,
  },
];

export default function JourneyPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <BrandHeading level={1} className="mb-4">
            The Vibe Coding Journey
          </BrandHeading>
          <p className="text-xl text-[var(--color-text)] opacity-70 font-[family-name:var(--font-inter)]">
            From "Can I do this?" to deployed portfolio in 3 months
          </p>
          <p className="text-sm text-[var(--color-text)] opacity-50 mt-2 italic font-[family-name:var(--font-inter)]">
            What stands in the way becomes the way
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pb-32">
          {/* Vertical line - solid (stops before future section) */}
          <div
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-[var(--color-accent-cyan)] via-[var(--color-accent-cyan)] to-[var(--color-accent-cyan)]"
            style={{ height: 'calc(100% - 12rem)' }}
          />

          {phases.map((phase) => (
            <div key={phase.id} className="mb-12">
              {/* Phase Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent-cyan)] flex items-center justify-center font-[family-name:var(--font-jetbrains-mono)] font-bold text-[var(--color-accent-cyan)] z-10">
                  {phase.id}
                </div>
                <div>
                  <BrandHeading level={2}>
                    {phase.title}
                  </BrandHeading>
                  <p className="text-[var(--color-text)] opacity-70 font-[family-name:var(--font-inter)]">{phase.period}</p>
                  {phase.quote && (
                    <p className="text-sm text-[var(--color-text)] opacity-50 mt-2 italic font-[family-name:var(--font-inter)]">
                      {phase.quote}
                    </p>
                  )}
                </div>
              </div>

              {/* Milestones in this phase */}
              {milestones
                .filter((m) => m.phase === phase.id)
                .map((milestone) => (
                  <div key={milestone.id} className="ml-16 mb-8 relative">
                    {/* Diamond milestone marker - positioned to clear the line */}
                    <div
                      className="absolute -left-6 top-3 z-10 cursor-pointer group"
                      onMouseEnter={() => setHoveredId(milestone.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => toggleExpand(milestone.id)}
                    >
                      {/* Hover splash effect */}
                      {hoveredId === milestone.id && (
                        <div className="absolute inset-0 -m-2">
                          <div className="w-8 h-8 rotate-45 bg-[var(--color-accent-cyan)]/20 animate-ping" />
                        </div>
                      )}

                      {/* Diamond shape */}
                      <div className="relative w-4 h-4 rotate-45 bg-[var(--color-accent-cyan)] border-2 border-[var(--color-bg)] transition-all group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(0,217,255,0.4)]" />
                    </div>

                    {/* Milestone card */}
                    <div
                      onClick={() => toggleExpand(milestone.id)}
                      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4 cursor-pointer hover:border-[var(--color-accent-cyan)]/50 hover:shadow-[0_0_20px_rgba(0,217,255,0.08)] transition-all"
                    >
                      {/* Date and title */}
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-xs text-[var(--color-accent-cyan)] font-[family-name:var(--font-jetbrains-mono)] mb-1">
                            {milestone.date}
                          </p>
                          <h3 className="text-lg font-semibold text-[var(--color-text)] font-[family-name:var(--font-jetbrains-mono)]">
                            {milestone.title}
                          </h3>
                        </div>
                        <span className="text-[var(--color-text)] opacity-50 font-[family-name:var(--font-jetbrains-mono)]">
                          {expandedId === milestone.id ? '−' : '+'}
                        </span>
                      </div>

                      {/* Preview (always visible) */}
                      <p className="text-sm text-[var(--color-text)] opacity-70 font-[family-name:var(--font-inter)]">{milestone.preview}</p>

                      {/* Expanded details */}
                      {expandedId === milestone.id && (
                        <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                          <ul className="space-y-2">
                            {milestone.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-[var(--color-text)] opacity-90 flex items-start gap-2 font-[family-name:var(--font-inter)]"
                              >
                                <span className="text-[var(--color-accent-cyan)] mt-1">→</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}

          {/* Future section - dashed line only */}
          <div className="ml-16 relative">
            <div className="absolute left-8 -ml-16 top-0 h-24 w-0.5 border-l-2 border-dashed border-[var(--color-accent-cyan)]/30" />
            <div className="bg-[var(--color-surface)]/30 border border-dashed border-[var(--color-border)] rounded-lg p-6 text-center">
              <p className="text-[var(--color-text)] opacity-70 font-[family-name:var(--font-inter)]">The journey continues...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}