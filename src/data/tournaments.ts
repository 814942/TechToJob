export interface Tournament {
  title: string
  description: string
  status: 'open' | 'closed'
  deadline: string
}

export const tournaments: Tournament[] = [
  {
    title: 'Tournament #2: Landing Page',
    description: 'Build TechToJob\'s landing page from scratch. React, Next.js, Tailwind.',
    status: 'open',
    deadline: '2026-10-01',
  },
  {
    title: 'Tournament #1: Dashboard',
    description: 'Build a developer dashboard with stats and project showcase.',
    status: 'closed',
    deadline: '2026-09-01',
  },
  {
    title: 'Tournament #3: API Design',
    description: 'Design and implement a RESTful API for a job platform.',
    status: 'open',
    deadline: '2026-10-15',
  },
]
