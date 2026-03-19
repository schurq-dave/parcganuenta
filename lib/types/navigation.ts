export interface NavLink {
  label: string
  href: string
}

export interface NavigationData {
  primary: NavLink[]
  footer: {
    columns: FooterColumn[]
    legal: NavLink[]
    copyright: string
  }
}

export interface FooterColumn {
  heading: string
  links: NavLink[]
}
