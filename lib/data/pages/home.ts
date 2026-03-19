import type { HomePage } from '@/lib/types/pages/home'

export const homePageData: HomePage = {
  seo: {
    metaTitle: 'Parc Ganuenta — Luxe Wellness Vakantievilla\'s aan de Oosterschelde',
    metaDescription:
      'Koop of huur een exclusieve wellness vakantievilla aan de Oosterschelde in Zeeland. Parc Ganuenta biedt rust, luxe en natuur op unieke locatie.',
    slug: '/',
    keywords: [
      'vakantievilla kopen Zeeland',
      'wellness villa Oosterschelde',
      'luxe vakantiepark Zeeland',
      'stadsvilla kopen',
      'Parc Ganuenta',
    ],
    ogImageUrl: '/og-home.jpg',
  },

  hero: {
    heading: 'Luxe vakantievilla\'s\nom in te genieten',
    subheading:
      'Koop uw prachtige wellness vakantievilla, direct aan de Oosterschelde in het hart van Zeeland.',
    ctaLabel: 'Bekijk ons aanbod',
    ctaHref: '/stadsvilla-kopen',
    backgroundImageUrl: '/images/hero-parc-ganuenta.jpg',
    backgroundVideoUrl: '/videos/hero.mp4',
  },

  intro: {
    label: 'Welkom bij Parc Ganuenta',
    heading: 'Waar rust en\nluxe samenkomen',
    body: 'Parc Ganuenta is een exclusief kleinschalig villapark direct aan de Oosterschelde. Omringd door natuur, met eigen wellness en uitzicht op het water, bieden onze stadsVilla\'s een unieke combinatie van comfort, rust en beleving. Of u nu zoekt naar een eigen vakantieverblijf of een waardevolle investering — hier vindt u het.',
    ctas: [
      {
        _key: 'cta-stadsvilla',
        label: 'Bekijk de stadsVilla\'s',
        href: '/stadsvilla-kopen',
        variant: 'primary',
      },
      {
        _key: 'cta-over-ons',
        label: 'Over Parc Ganuenta',
        href: '/over-ons',
        variant: 'ghost',
      },
    ],
  },

  aanbod: {
    label: 'Ons aanbod',
    heading: 'De villa\'s',
    subheading:
      'Parc Ganuenta biedt twee typen exclusieve stadsVilla\'s — elk ontworpen voor maximaal comfort en een tijdloze uitstraling.',
    villas: [
      {
        _key: 'villa-blok-a',
        title: 'StadsVilla Blok A',
        subtitle: 'Ruim & licht',
        description:
          'De ruimste villa\'s van het park, met een open woonkeuken, royaal terras en privé wellness. Ideaal voor wie maximale ruimte en comfort zoekt.',
        priceLabel: 'Vanaf € 495.000',
        specs: [
          { _key: 'spec-a1', label: 'Oppervlakte', value: '120 m²' },
          { _key: 'spec-a2', label: 'Slaapkamers', value: '3' },
          { _key: 'spec-a3', label: 'Badkamers', value: '2' },
          { _key: 'spec-a4', label: 'Wellness', value: 'Privé sauna & jacuzzi' },
        ],
        imageUrl: '/images/villa-blok-a.jpg',
        href: '/stadsvilla-kopen#blok-a',
        ctaLabel: 'Meer over Blok A',
      },
      {
        _key: 'villa-blok-b',
        title: 'StadsVilla Blok B',
        subtitle: 'Intiem & verfijnd',
        description:
          'Compact en stijlvol ingericht, met alle luxe voorzieningen. De perfecte keuze voor stellen die van rust en privacy houden.',
        priceLabel: 'Vanaf € 385.000',
        specs: [
          { _key: 'spec-b1', label: 'Oppervlakte', value: '85 m²' },
          { _key: 'spec-b2', label: 'Slaapkamers', value: '2' },
          { _key: 'spec-b3', label: 'Badkamers', value: '1' },
          { _key: 'spec-b4', label: 'Wellness', value: 'Sauna & bubbelbad' },
        ],
        imageUrl: '/images/villa-blok-b.jpg',
        href: '/stadsvilla-kopen#blok-b',
        ctaLabel: 'Meer over Blok B',
      },
    ],
  },

  omgeving: {
    label: 'De omgeving',
    heading: 'Zeeland op zijn\nmooiste',
    body: 'Parc Ganuenta ligt direct aan de Oosterschelde — een van de mooiste watergebieden van Nederland. Wandel over de dijken, verken de Zeeuwse cultuur of geniet van verse zeevangst in een van de sfeervolle havens. De natuur is hier altijd dichtbij.',
    ctaLabel: 'Ontdek de omgeving',
    ctaHref: '/omgeving',
    backgroundImageUrl: '/images/omgeving-oosterschelde.jpg',
    backgroundVideoUrl: '/videos/park-algemeen.mp4',
  },

  reviews: {
    label: 'Wat onze gasten zeggen',
    heading: 'Ervaringen die\nblijven',
    reviews: [
      {
        _key: 'review-1',
        quote:
          '"Een uitzonderlijk verblijf. De combinatie van de privé sauna, het uitzicht op het water en de rust van het park maakte dit een week die we nooit vergeten."',
        authorName: 'Familie De Vries',
        authorDetails: 'Amsterdam',
        villaLabel: 'StadsVilla Blok A',
        villaHref: '/stadsvilla-kopen#blok-a',
        imageUrl: '/images/review-1.jpg',
      },
      {
        _key: 'review-2',
        quote:
          '"Precies wat we zochten — rust, luxe en de natuur om de hoek. De villa was perfect ingericht en het park voelt exclusief en verzorgd aan."',
        authorName: 'Marieke & Tom',
        authorDetails: 'Utrecht',
        villaLabel: 'StadsVilla Blok B',
        villaHref: '/stadsvilla-kopen#blok-b',
        imageUrl: '/images/review-2.jpg',
      },
      {
        _key: 'review-3',
        quote:
          '"Het strand, de natuur en de villa — alles klopte. We kwamen tot rust en genieten. Hier komen we zeker terug."',
        authorName: 'Familie Janssen',
        authorDetails: 'Rotterdam',
        villaLabel: 'StadsVilla Blok A',
        villaHref: '/stadsvilla-kopen#blok-a',
        imageUrl: '/images/review-3.jpg',
      },
    ],
  },

  cta: {
    heading: 'Klaar om uw droomvilla\nte ontdekken?',
    subheading:
      'Plan een vrijblijvend bezoek en ervaar zelf de sfeer van Parc Ganuenta.',
    ctaLabel: 'Neem contact op',
    ctaHref: '/contact',
    backgroundImageUrl: '/images/cta-band.jpg',
    backgroundVideoUrl: '/videos/het-plein.mp4',
  },
}
