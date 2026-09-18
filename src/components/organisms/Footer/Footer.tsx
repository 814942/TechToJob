import { type FC } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Globe, ExternalLink, Share2, MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'

const socialLinks = [
  { icon: Globe, href: SITE.linkedin, label: 'LinkedIn' },
  { icon: ExternalLink, href: SITE.x, label: 'X' },
  { icon: Share2, href: SITE.instagram, label: 'Instagram' },
  { icon: MessageCircle, href: SITE.discord, label: 'Discord' },
]

interface FooterLink {
  label: string
  href: string
}

interface FooterGroup {
  title: string
  links: FooterLink[]
}

export const Footer: FC = () => {
  const t = useTranslations('footer')
  const groups = ['talent', 'companies', 'community', 'legal'] as const

  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => {
            const data = t.raw(group) as FooterGroup
            return (
              <div key={group}>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {data.title}
                </h3>
                <ul className="space-y-2">
                  {data.links.map((link) => {
                    const isExternal = link.href.startsWith('http')
                    return (
                      <li key={link.label}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/70 transition-colors hover:text-white"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-white/70 transition-colors hover:text-white"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/10 pt-8">
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/60 transition-colors hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-white/60">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
