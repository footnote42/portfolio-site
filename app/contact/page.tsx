'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

     setStatus('pending'); // <-- This line sets the loading state
    
    try {
      const response = await fetch('https://formspree.io/f/xwpzbwaw', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-900">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Get in Touch
        </h1>
        
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Interested in collaborating on a project? Have questions about my AI-assisted 
          coding approach? Want to discuss rugby coaching tools or just chat about 
          learning to code? I'd be glad to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-stone-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-stone-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              placeholder="your@email.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-2 border border-stone-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              placeholder="What would you like to discuss?"
            />
          </div>

          {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'pending'}
                className={`w-full px-6 py-3 font-medium rounded-lg transition-colors ${
                    status === 'pending'
                    ? 'bg-slate-400 cursor-not-allowed'
                    : 'bg-amber-600 hover:bg-amber-700'
                } text-white`}
            >
                {status === 'pending' ? 'Sending...' : 'Send Message'}
            </button>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
              <p className="text-emerald-700 dark:text-emerald-400">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-700 dark:text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            </div>
          )}
        </form>

        {/* Alternative Contact */}
        <div className="mt-12 pt-8 border-t border-stone-200 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            You can also find me on:
          </p>

          <a
            href="https://github.com/footnote42"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-slate-800 mt-32">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <p className="text-sm text-slate-400 dark:text-slate-600 italic">
            What stands in the way becomes the way.
          </p>
        </div>
      </footer>
    </div>
  );
}