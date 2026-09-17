export interface Testimonial {
  name: string
  role: string
  quote: string
}

export interface NewsItem {
  title: string
  date: string
  category: string
  excerpt: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}
