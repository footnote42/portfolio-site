---
title: "Building Battlepoos"
date: "2025-12-19"
excerpt: "Real-time multiplayer isn't just about code. It's about understanding state, timing, and what happens when two players click at once."
slug: "building-battlepoos"
featured: false
---

Battleship with a poo theme. That's the hook. But the real project was learning how WebSockets work.

## Why This One?

I'd built React apps. I'd built backend services. But I hadn't built something where two users interact in real time.

That's a different problem. You're not just handling requests and responses. You're managing state across multiple clients, dealing with latency, and figuring out what happens when both players fire at the same time.

## What I Learned

**WebSocket architecture isn't like REST**. You can't just think in terms of requests. You have to think about connections, broadcasts, and what happens when connections drop.

**Shared types matter**. The frontend and backend need to speak the same language. Using TypeScript across both sides meant fewer bugs and faster iterations.

**State synchronization is subtle**. Who owns the source of truth? How do you handle conflicts? What gets validated where?

## The Fun Parts

- Instant matchmaking - no lobbies, just click and play
- Audio feedback that actually works on mobile (harder than it sounds)
- Ship placement with rotation controls that feel right
- Visual feedback for every action (hits, misses, sinks)

## What It Taught Me

Building Battlepoos was less about the game and more about understanding real-time architecture. Socket.io made the hard parts manageable, but you still have to think through the edge cases.

When two players both try to take a turn. When someone refreshes mid-game. When the connection drops for three seconds.

Those are the problems that teach you how multiplayer actually works.

Not revolutionary. Just another step in learning what's possible.
