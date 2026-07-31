export const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Preview', href: '#preview' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const trustedCompanies = [
  { name: 'TechFlow', logo: '⚡ TechFlow' },
  { name: 'Acme Corp', logo: '▲ Acme Corp' },
  { name: 'DevPulse', logo: '◈ DevPulse' },
  { name: 'CloudVertex', logo: '☁ CloudVertex' },
  { name: 'Nexus AI', logo: '❖ Nexus AI' },
  { name: 'Synthetix', logo: '✦ Synthetix' },
];

export const featuresData = [
  {
    id: 1,
    title: 'AI Code Generator',
    description: 'Transform human natural language prompts into clean, production-ready code across 30+ languages instantly.',
    iconName: 'HiOutlineCode',
    badge: 'Popular',
  },
  {
    id: 2,
    title: 'Bug Detection & Fix',
    description: 'Scans your codebase in real-time, identifying memory leaks, security flaws, and subtle runtime errors before deployment.',
    iconName: 'HiOutlineBugAnt',
    badge: 'Real-time',
  },
  {
    id: 3,
    title: 'Code Explanation',
    description: 'Demystify legacy spaghetti codebases. Get step-by-step plain text breakdowns and structural architecture maps.',
    iconName: 'HiOutlineLightBulb',
    badge: 'Insight',
  },
  {
    id: 4,
    title: 'Documentation Generator',
    description: 'Automatically generate comprehensive JSDoc, OpenAPI specs, and README files with a single click.',
    iconName: 'HiOutlineDocumentText',
    badge: 'Automated',
  },
  {
    id: 5,
    title: 'Smart Refactoring',
    description: 'Optimize execution speed and readability. Upgrade outdated patterns to modern ESNext and TypeScript best practices.',
    iconName: 'HiOutlineSparkles',
    badge: 'Optimization',
  },
  {
    id: 6,
    title: 'Team Collaboration',
    description: 'Share AI coding contexts, prompt presets, and custom style guide rules effortlessly across your entire engineering team.',
    iconName: 'HiOutlineUserGroup',
    badge: 'Enterprise',
  },
];

export const stepsData = [
  {
    step: '01',
    title: 'Write Your Prompt',
    description: 'Describe the feature, bug fix, or logic you need in plain English or paste your existing code block.',
    iconName: 'HiOutlinePencilSquare',
    tag: 'Step 1',
  },
  {
    step: '02',
    title: 'AI Generates Solution',
    description: 'Our proprietary deep-code model analyzes your context, runs unit checks, and drafts optimized code in seconds.',
    iconName: 'HiOutlineCpuChip',
    tag: 'Step 2',
  },
  {
    step: '03',
    title: 'Deploy Faster',
    description: 'Review the generated code diff, run automated tests, and commit with total confidence into your repository.',
    iconName: 'HiOutlineRocketLaunch',
    tag: 'Step 3',
  },
];

export const pricingTiers = [
  {
    name: 'Starter',
    tagline: 'Ideal for hobbyists, students, and side projects.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    popular: false,
    buttonText: 'Start Free Today',
    features: [
      '50 AI code generations per month',
      'Basic bug detection scan',
      'Community Discord access',
      'Standard model speed',
      'Supports JavaScript & Python',
    ],
  },
  {
    name: 'Pro',
    tagline: 'Perfect for individual developers and fast freelancers.',
    monthlyPrice: 29,
    yearlyPrice: 24,
    popular: true,
    buttonText: 'Start 14-Day Free Trial',
    features: [
      'Unlimited AI code generations',
      'Advanced multi-file bug detection',
      'Automatic documentation builder',
      'Ultra-fast priority response time',
      'Supports 30+ programming languages',
      'VS Code & JetBrains extension',
      'Git integration & PR summaries',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'Tailored for scaling engineering teams and orgs.',
    monthlyPrice: 99,
    yearlyPrice: 79,
    popular: false,
    buttonText: 'Contact Sales',
    features: [
      'Everything in Pro plan',
      'Dedicated private cloud model',
      'Custom fine-tuned team models',
      'SOC2 Type II & Zero-data retention',
      '24/7 Priority SLA support',
      'Unlimited team workspace seats',
      'Custom API access & webhooks',
    ],
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Lead Frontend Architect',
    company: 'Vortex Labs',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    review: 'CodeGenius AI cut our sprint cycle times by nearly 40%. The context awareness when refactoring legacy React components is genuinely mind-blowing.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Senior Backend Engineer',
    company: 'CloudScale',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    review: 'The automatic bug detection caught a race condition in our Go microservices that three peer reviews missed. It has become an essential part of our CI/CD pipeline.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'CTO & Co-founder',
    company: 'HyperFlow Studio',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    review: 'As a small engineering team, CodeGenius AI feels like having two extra senior engineers sitting next to us. The ROI was immediate on day one.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Full Stack Developer',
    company: 'SaaSify',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    review: 'Writing documentation used to consume half my Fridays. Now CodeGenius reads my PRs and outputs pristine Markdown docs in seconds.',
    rating: 5,
  },
];

export const faqData = [
  {
    question: 'How does CodeGenius AI integrate with my current workflow?',
    answer: 'CodeGenius AI integrates seamlessly into your existing development environment through VS Code extensions, JetBrains plugins, GitHub Actions, and a CLI tool. You can also paste code directly into our web studio.',
  },
  {
    question: 'Is my code private and secure when using CodeGenius AI?',
    answer: 'Yes! Enterprise security is our top priority. We guarantee zero-data retention on your source code. Your code is never used to train global public models, and all transmissions are encrypted end-to-end.',
  },
  {
    question: 'Which programming languages and frameworks are supported?',
    answer: 'CodeGenius AI supports over 30 languages including JavaScript, TypeScript, Python, Rust, Go, Java, C++, PHP, Ruby, SQL, HTML/CSS, React, Vue, Next.js, and more.',
  },
  {
    question: 'Can CodeGenius AI help me refactor legacy codebases?',
    answer: 'Absolutely. CodeGenius AI specializes in legacy migration—converting JavaScript to strict TypeScript, updating class components to modern React Hooks, or upgrading deprecated APIs efficiently.',
  },
  {
    question: 'What is the difference between the Pro and Enterprise plans?',
    answer: 'The Pro plan is designed for solo developers and freelancers needing unlimited AI generations. Enterprise includes team seats, custom fine-tuned models trained on your codebase conventions, SOC2 compliance, and dedicated SLA support.',
  },
  {
    question: 'Can I cancel or change my subscription at any time?',
    answer: 'Yes. You can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard setting without any hidden cancellation fees.',
  },
];

export const codeExamples = {
  javascript: `// CodeGenius AI Auto-Generated React Custom Hook
import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}`,
  python: `# CodeGenius AI Fast-API Endpoint Generation
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel

app = FastAPI(title="CodeGenius AI API Service")

class QueryRequest(BaseModel):
    prompt: str
    language: str = "python"

@app.post("/api/v1/generate")
async def generate_code(request: QueryRequest):
    if not request.prompt:
        raise HTTPException(status_code=400, detail="Prompt is required")
    return {"status": "success", "tokens": 240, "code": "# Solution generated"}`,
  rust: `// CodeGenius AI High Performance Concurrency Worker
use tokio::sync::mpsc;
use std::time::Duration;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let (tx, mut rx) = mpsc::channel(32);

    tokio::spawn(async move {
        tx.send("CodeGenius task completed").await.unwrap();
    });

    while let Some(message) = rx.recv().await {
        println!("Received: {}", message);
    }
    Ok(())
}`
};
