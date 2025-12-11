// app/journey/page.tsx
'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

interface Milestone {
  id: string;
  date: string;
  title: string;
  preview: string;
  details: string[];
  phase: 1 | 2 | 3;
}

const phases = [
  { id: 1, title: 'Can This Actually Work?', period: 'Aug - Sep 2025' },
  { id: 2, title: 'Building Real Tools', period: 'October 2025' },
  { id: 3, title: 'Shipping with Confidence', period: 'November 2025' },
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
];

export default function JourneyPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">The Vibe Coding Journey</h1>
          <p className="text-xl text-slate-400">
            From "Can I do this?" to deployed portfolio in 3 months
          </p>
          <p className="text-sm text-slate-500 mt-2 italic">
            What stands in the way becomes the way
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pb-32">
          {/* Vertical line - solid (stops before future section) */}
          <div 
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500 to-emerald-500"
            style={{ height: 'calc(100% - 12rem)' }}
          />

          {phases.map((phase) => (
            <div key={phase.id} className="mb-12">
              {/* Phase Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center font-bold text-emerald-400 z-10">
                  {phase.id}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-100">
                    {phase.title}
                  </h2>
                  <p className="text-slate-400">{phase.period}</p>
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
                          <div className="w-8 h-8 rotate-45 bg-emerald-500/20 animate-ping" />
                        </div>
                      )}
                      
                      {/* Diamond shape */}
                      <div className="relative w-4 h-4 rotate-45 bg-emerald-500 border-2 border-slate-900 transition-all group-hover:scale-125 group-hover:bg-emerald-400" />
                    </div>

                    {/* Milestone card */}
                    <div
                      onClick={() => toggleExpand(milestone.id)}
                      className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 cursor-pointer hover:border-emerald-500/50 transition-all"
                    >
                      {/* Date and title */}
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-xs text-emerald-400 font-mono mb-1">
                            {milestone.date}
                          </p>
                          <h3 className="text-lg font-semibold">
                            {milestone.title}
                          </h3>
                        </div>
                        <span className="text-slate-500">
                          {expandedId === milestone.id ? '−' : '+'}
                        </span>
                      </div>

                      {/* Preview (always visible) */}
                      <p className="text-sm text-slate-400">{milestone.preview}</p>

                      {/* Expanded details */}
                      {expandedId === milestone.id && (
                        <div className="mt-4 pt-4 border-t border-slate-700">
                          <ul className="space-y-2">
                            {milestone.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-slate-300 flex items-start gap-2"
                              >
                                <span className="text-emerald-500 mt-1">→</span>
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
            <div className="absolute left-8 -ml-16 top-0 h-24 w-0.5 border-l-2 border-dashed border-emerald-500/30" />
            <div className="bg-slate-800/30 border border-dashed border-slate-700 rounded-lg p-6 text-center">
              <p className="text-slate-400">The journey continues...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}