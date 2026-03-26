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
    heading: 'Luxe vakantievilla\'s\nom in te <span class="font-serif italic font-normal pr-2 text-brand-platinum">genieten</span>',
    subheading:
      'Koop uw prachtige wellness vakantievilla, direct aan de Oosterschelde in het hart van Zeeland.',
    ctaLabel: 'Bekijk ons aanbod',
    ctaHref: '/stadsvilla-kopen',
    backgroundImageUrl: '/images/hero-background.png',
    backgroundVideoUrl: '/videos/hero.mov',
  },

  intro: {
    label: 'Welkom bij Parc Ganuenta',
    heading: 'Waar rust en\nluxe <span class="font-serif italic font-normal pr-2">samenkomen</span>',
    body: 'Parc Ganuenta is een exclusief kleinschalig villapark direct aan de Oosterschelde. Omringd door natuur, met eigen wellness en uitzicht op het water, bieden onze stadsVilla\'s een unieke combinatie van comfort, rust en beleving. Of u nu zoekt naar een eigen vakantieverblijf of een waardevolle investering — hier vindt u het.',
    ctas: [
      {
        _key: 'cta-stadsvilla',
        label: 'Bekijk de stadsVilla\'s',
        href: '/stadsvilla-kopen',
        variant: 'accent',
      },
      {
        _key: 'cta-over-ons',
        label: 'Over Parc Ganuenta',
        href: '/over-ons',
        variant: 'ghost',
      },
    ],
    imageUrl: '/images/intro-family.png',
  },


  experience: {
    heading:
      'Een inkijkje in uw\n<span class="font-serif italic font-normal pr-2">verblijf</span>',
    subheading:
      'Ontdek hoe rust, licht en luxe samenkomen — van privé wellness tot het terras en het hart van uw villa.',
    slides: [
      {
        _key: 'exp-sauna',
        title: 'Privé wellness',
        caption:
          'Warm hout, zacht licht en de stilte van uw eigen sauna — het perfecte moment om los te laten.',
        image: {
          asset: {
            url: '/images/experience-sauna.png',
            alt: 'Licht houten interieur van een privé sauna met banken en warme sfeerverlichting',
          },
        },
      },
      {
        _key: 'exp-bedroom',
        title: 'Sereen slapen',
        caption:
          'Strakke lijnen, natuurlijke materialen en een rustige slaapkamer om volledig tot rust te komen.',
        image: {
          asset: {
            url: '/images/experience-bedroom.png',
            alt: 'Moderne slaapkamer met houten vloer en zicht op een warme accentmuur',
          },
        },
      },
      {
        _key: 'exp-veranda',
        title: 'Binnen en buiten',
        caption:
          'Een overdekt terras waar binnen en buiten in elkaar overlopen — het hele jaar door genieten.',
        image: {
          asset: {
            url: '/images/experience-veranda.png',
            alt: 'Luxe overdekt terras met loungebank, houten plafond en uitzicht op de tuin',
          },
        },
      },
      {
        _key: 'exp-living',
        title: 'Leven & genieten',
        caption:
          'Ruime woon- en eethoek met warme tinten — de plek om samen te eten, te ontspannen en te genieten.',
        image: {
          asset: {
            url: '/images/experience-living.png',
            alt: 'Open woon- en eetruimte met houten vloer, designverlichting en eettafel',
          },
        },
      },
    ],
  },

  aanbod: {
    label: 'Ons aanbod',
    heading: 'De <span class="font-serif italic font-normal pr-2">villa\'s</span>',
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
    heading: 'Zeeland op zijn\n<span class="font-serif italic font-normal pr-2">mooiste</span>',
    body: 'Parc Ganuenta ligt direct aan de Oosterschelde — een van de mooiste watergebieden van Nederland. Wandel over de dijken, verken de Zeeuwse cultuur of geniet van verse zeevangst in een van de sfeervolle havens. De natuur is hier altijd dichtbij.',
    ctaLabel: 'Ontdek de omgeving',
    ctaHref: '/omgeving',
    backgroundImageUrl: '/images/omgeving-oosterschelde.jpg',
    backgroundVideoUrl: '/videos/park-algemeen.mp4',
  },

  reviews: {
    label: 'Wat onze gasten zeggen',
    heading: 'Ervaringen die\n<span class="font-serif italic font-normal pr-2">blijven</span>',
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

  faq: {
    label: 'Veelgestelde vragen',
    heading: 'Alles wat u wilt <span class="font-serif italic font-normal pr-2">weten</span>',
    items: [
      {
        _key: 'faq-1',
        question: 'Kan ik een stadsVilla kopen als vakantiewoning?',
        answer: 'Ja. De stadsVilla\'s van Parc Ganuenta zijn uitsluitend bestemd als vakantiewoning. U koopt de villa in volledige eigendom en mag deze het hele jaar door gebruiken voor eigen verblijf en verhuur.',
      },
      {
        _key: 'faq-2',
        question: 'Is verhuur van mijn villa mogelijk?',
        answer: 'Absoluut. Verhuur is toegestaan en wij bieden optionele verhuurbegeleiding aan. Zo geniet u van uw investering ook wanneer u er zelf niet verblijft.',
      },
      {
        _key: 'faq-3',
        question: 'Wat zijn de kosten naast de koopprijs?',
        answer: 'Naast de koopprijs betaalt u een jaarlijkse bijdrage voor het beheer en onderhoud van het park. De exacte kosten worden transparant gecommuniceerd tijdens het aankoopproces.',
      },
      {
        _key: 'faq-4',
        question: 'Kan ik een villa bezichtigen?',
        answer: 'Ja, bezichtigingen zijn altijd mogelijk op afspraak. Neem contact met ons op en wij plannen een vrijblijvend bezoek in — inclusief een rondleiding door het park.',
      },
      {
        _key: 'faq-5',
        question: 'Wanneer worden de villa\'s opgeleverd?',
        answer: 'De verwachte oplevering is in 2025. Exacte data zijn afhankelijk van de bouwvoortgang. Kopers worden gedurende het hele traject op de hoogte gehouden.',
      },
    ],
  },

  cta: {
    heading: 'Klaar om uw droomvilla\nte <span class="font-serif italic font-normal pr-2">ontdekken?</span>',
    subheading:
      'Plan een vrijblijvend bezoek en ervaar zelf de sfeer van Parc Ganuenta.',
    ctaLabel: 'Neem contact op',
    ctaHref: '/contact',
    backgroundImageUrl: '/images/cta-band.jpg',
    backgroundVideoUrl: '/videos/het-plein.mp4',
  },
}
