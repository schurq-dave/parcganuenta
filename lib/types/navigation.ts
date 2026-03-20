export interface NavLink {
  label: string
  href: string
  isButton?: boolean
}

export interface NavigationData {
  primary: NavLink[]
  footer: {
    columns: FooterColumn[]
    legal: NavLink[]
    socials: SocialLink[]
    copyright: string
  }
}

export interface SocialLink {
  platform: string
  href: string
  icon: string // We'll use this for the SVG path
}

export interface FooterColumn {
  heading: string
  links: NavLink[]
}
