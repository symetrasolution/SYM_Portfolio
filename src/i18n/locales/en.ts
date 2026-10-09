import type {
  HardwareCategory,
  HowItWorksStep,
  MethodologyStep,
  PartnershipInfo,
  ResidenceProject,
  RoomZone,
  Scenario,
  TechnicalAppendixItem,
} from '../../types';
import heroVillaImg from '../../assets/images/hero_architectural_villa_1791488866425.jpg';
import heroVilla640 from '../../assets/images/hero_architectural_villa_1791488866425-640.webp';
import heroVilla1280 from '../../assets/images/hero_architectural_villa_1791488866425-1280.webp';
import cairoVillaImg from '../../assets/images/cairo_luxury_villa_1791488882402.jpg';
import cairoVilla640 from '../../assets/images/cairo_luxury_villa_1791488882402-640.webp';
import cairoVilla1280 from '../../assets/images/cairo_luxury_villa_1791488882402-1280.webp';
import riyadhPenthouseImg from '../../assets/images/riyadh_dq_penthouse_1791488892687.jpg';
import riyadhPenthouse640 from '../../assets/images/riyadh_dq_penthouse_1791488892687-640.webp';
import riyadhPenthouse1280 from '../../assets/images/riyadh_dq_penthouse_1791488892687-1280.webp';
import sahelResidenceImg from '../../assets/images/sahel_coastal_residence_1791488904285.jpg';
import sahelResidence640 from '../../assets/images/sahel_coastal_residence_1791488904285-640.webp';
import sahelResidence1280 from '../../assets/images/sahel_coastal_residence_1791488904285-1280.webp';
import { COUNTRY_CODES, HREFS } from '../shared';

/**
 * English content bundle — single source of truth for every string on the
 * site (section copy, rooms, scenarios, hardware, projects, forms).
 * `ar.ts` must match this exact shape (`Bundle`), enforced by TypeScript.
 */
export const enBundle = {
  site: {
    name: 'Symetra Solution',
    homeLabel: 'Symetra Solution Home',
    tagline: 'Architectural Calm • Local Compute',
    description:
      'Intelligent living engineered for complete privacy and local reliability in Egypt & Saudi Arabia.',
    heroImage: heroVillaImg,
    heroImageWebp: { small: heroVilla640, large: heroVilla1280 },
    metaTitle: 'Symetra Solution — Turnkey Smart Homes in Egypt & Saudi Arabia',
    metaDescription:
      'Smart homes built on Home Assistant that run locally and work without internet. Turnkey design, installation and programming in Egypt & Saudi Arabia.',
  },

  lang: {
    english: 'EN',
    arabic: 'عربي',
    toggleLabel: 'Switch language',
  },

  nav: {
    links: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'The Architecture', href: '#architecture' },
      { name: 'Living Spaces', href: '#living-spaces' },
      { name: 'Philosophy', href: '#philosophy' },
      { name: 'Turnkey', href: '#turnkey' },
      { name: 'Residences', href: '#residences' },
    ],
    hotlineTitle: 'Direct Engineer Hotline',
    hotlineLabel: 'Riyadh & Cairo Desk',
    cta: 'Private Demonstration',
    menuToggle: 'Toggle Navigation',
    drawerTagline: 'Turnkey Smart Homes • Egypt & Saudi Arabia',
    drawerCta: 'Book Private Demonstration',
    drawerNote: 'Runs locally • Works without internet',
  },

  hero: {
    eyebrow: 'Turnkey Smart Homes • Egypt & Saudi Arabia',
    titleStart: 'One smart brain inside your home.',
    titleAccent: 'Fully private.',
    sub: 'Turnkey smart homes built on Home Assistant. Everything runs locally inside your home, so it works without internet.',
    primaryCta: 'Schedule Showroom Demo',
    secondaryCta: 'Explore System Architecture',
    imgAlt:
      'Symetra luxury modern villa living room with integrated architectural automation',
    liveTitle: 'Runs locally in your home',
    liveSub: 'Works without internet • Built on Home Assistant',
    offlineBadge: 'Works without internet',
    vpnBadge: 'Secure remote access (VPN)',
    cards: [
      {
        title: 'Too many apps',
        body: 'Different vendors forcing 6+ disconnected applications, fragmented daily routines, conflicting notifications, and endless logins.',
        tag: 'Fragmented Ecosystem',
      },
      {
        title: 'Depends on the internet',
        body: 'When the internet connection drops or cloud servers fail, your physical switches, lights, and automated climate schedules stop responding.',
        tag: 'External Server Lag',
      },
      {
        title: 'Your data leaves your home',
        body: 'Camera streams, personal voices, and sensitive family habits are broadcast to overseas cloud infrastructure, compromising private moments.',
        tag: 'Third-Party Cloud Exposure',
      },
    ],
  },

  architecture: {
    eyebrow: 'The Architecture',
    title: 'An integrated intelligence that lives entirely under your roof.',
    sub: 'One system for the whole home: your devices talk to a Home Assistant hub inside the villa — no internet needed for daily life.',
    stages: [
      {
        label: 'Stage 01',
        title: 'Integrated Devices',
        body: 'Lighting, curtains, sensors, cameras, locks and switches — connected over Zigbee and local protocols.',
        tags: ['Zigbee', 'Tuya (local key)'],
      },
      {
        label: 'Stage 02 • Core Engine',
        title: 'Smart Brain Inside Your Home',
        body: 'A Home Assistant hub at the heart of your home. Scenes, schedules and automations run locally — daily life keeps working without internet.',
        tags: [] as string[],
        badge: 'Runs locally • Works without internet',
      },
      {
        label: 'Stage 03',
        title: 'Unified Control',
        body: 'Familiar wall switches and panels plus one phone app for the family. Away from home, connect back securely over VPN.',
        tags: ['Wall Panels', 'Phone App', 'VPN Remote Access'],
      },
    ],
    flowText:
      'Local-first: wall switch → home hub → light. No internet round-trip for daily life.',
    flowHub: 'Hub: Home Assistant',
    flowRemote: 'Remote: VPN',
  },

  how: {
    eyebrow: 'How It Works',
    title: 'Simple on the surface, serious underneath.',
    sub: "You don't need to understand the technology — but if you're an engineer, it's all there to inspect.",
    steps: [
      {
        number: '01',
        title: 'Your devices',
        description:
          'Lights, curtains, sensors, cameras, locks and switches — connected over Zigbee and local protocols.',
        icon: 'network',
      },
      {
        number: '02',
        title: 'Smart brain inside your home',
        description:
          'A small home hub runs everything locally. Daily life keeps working even without internet.',
        icon: 'cpu',
      },
      {
        number: '03',
        title: 'Phone and wall panel',
        description:
          'One app and familiar wall controls for the family. Away from home, connect back securely over VPN.',
        icon: 'smartphone',
      },
    ] as HowItWorksStep[],
    appendixEyebrow: 'For Engineers',
    appendixTitle: "Technical appendix: what's inside the hub",
    appendixCta: 'Discuss your project with our systems team',
    appendix: [
      {
        title: 'Home Assistant',
        description:
          'The local hub software everything runs on: scenes, schedules and automations live in your home, not in a cloud account.',
      },
      {
        title: 'Zigbee2MQTT',
        description:
          'Connects Zigbee devices through an open local gateway — wide device choice without vendor lock-in.',
      },
      {
        title: 'Node-RED',
        description:
          'Visual automation flows for advanced routines, joining devices and conditions together.',
      },
      {
        title: 'Local Tuya',
        description:
          'Compatible Tuya devices run with local keys, so they respond on your home network instead of a cloud server.',
      },
      {
        title: 'Backups & updates',
        description:
          'The hub keeps local backups of its configuration, and software updates are applied in a controlled way with rollback available.',
      },
    ] as TechnicalAppendixItem[],
  },

  floor: {
    eyebrow: 'Live Floor Plan',
    title: 'Explore by Living Space',
    sub: 'Select any room to preview active automation sequences, hardware nodes, and responsive ambient behaviors.',
    schematic: 'ARCHITECTURAL SCHEMATIC PLAN — LEVEL 01',
    liveMapping: 'Live Node Mapping',
    scaleNote: 'Illustrative layout — not to scale',
    localNote: 'Runs locally in your home',
    profileOf: 'Active Space Profile /',
    nodesTitle: 'Installed Hardware Nodes',
    switchScene: 'Switch Scene',
    runsLocally: 'Runs locally — works without internet',
    customize: 'Customize Specs',
    rooms: [
      {
        id: 'living_room',
        name: 'Living Salon',
        tabLabel: 'LIVING ROOM',
        mapLabel: 'LIVING SALON',
        nodeNumber: 1,
        category: 'Living Quarters',
        title: 'Living Room Automation',
        hardwareNodes: [
          {
            icon: 'lightbulb',
            title: 'Scene Lighting',
            description:
              'One tap sets the mood for evening, guests or quiet time',
          },
          {
            icon: 'blinds',
            title: 'Motorized Curtains',
            description: 'Sheer and blackout layers glide open or closed',
          },
          {
            icon: 'radar',
            title: 'Presence & Light Sensors',
            description: 'The room notices you and adjusts gently',
          },
          {
            icon: 'sliders',
            title: 'Wall Switches & Sockets',
            description:
              'Familiar switches that always work, with or without internet',
          },
        ],
        activeScene: {
          name: 'Evening Welcome',
          description:
            'As evening sets in, the lights soften to a warm glow, sheer curtains glide closed, and the salon settles into a calm welcome.',
        },
        scenes: [
          {
            id: 'evening',
            name: 'Evening Welcome',
            description:
              'As evening sets in, the lights soften to a warm glow, sheer curtains glide closed, and the salon settles into a calm welcome.',
          },
          {
            id: 'daylight',
            name: 'Daylight Mode',
            description:
              'Curtains open to daylight and the view while the lights step back — the room follows the day on its own.',
          },
          {
            id: 'soiree',
            name: 'Guests & Gathering',
            description:
              'Low warm light and closed curtains turn the salon into an intimate space for family and guests.',
          },
        ],
      },
      {
        id: 'master_bedroom',
        name: 'Master Suite',
        tabLabel: 'MASTER BEDROOM',
        mapLabel: 'MASTER SUITE',
        nodeNumber: 2,
        category: 'Private Sanctuaries',
        title: 'Master Suite Automation',
        hardwareNodes: [
          {
            icon: 'moon',
            title: 'Gentle Bedside Lighting',
            description: 'Soft light for reading that fades out at bedtime',
          },
          {
            icon: 'blinds',
            title: 'Blackout Curtains',
            description: 'Close fully for sleep, open softly with the morning',
          },
          {
            icon: 'radar',
            title: 'Night Presence Sensor',
            description: 'A dim path of light if you get up at night',
          },
          {
            icon: 'sliders',
            title: 'Bedside Switches',
            description:
              'One button by the bed settles the whole home for the night',
          },
        ],
        activeScene: {
          name: 'Good Night',
          description:
            'One tap by the bed: curtains close, lights fade out across the suite, and the home locks up for the night.',
        },
        scenes: [
          {
            id: 'sleep',
            name: 'Good Night',
            description:
              'One tap by the bed: curtains close, lights fade out across the suite, and the home locks up for the night.',
          },
          {
            id: 'wake',
            name: 'Gentle Morning',
            description:
              'Light rises gradually and curtains open softly, so waking up feels unhurried.',
          },
        ],
      },
      {
        id: 'kitchen',
        name: 'Gourmet Kitchen',
        tabLabel: 'GOURMET KITCHEN',
        mapLabel: 'GOURMET KITCHEN',
        nodeNumber: 3,
        category: 'Culinary Workshop',
        title: 'Gourmet Kitchen Automation',
        hardwareNodes: [
          {
            icon: 'sparkles',
            title: 'Bright Task Lighting',
            description: 'Clear light over counters when you cook',
          },
          {
            icon: 'wind',
            title: 'Smoke & Leak Sensors',
            description: 'Early warning with automatic water shutoff for leaks',
          },
          {
            icon: 'blinds',
            title: 'Blind Control',
            description: 'Adjust daylight over the working areas',
          },
          {
            icon: 'sliders',
            title: 'Splash-Proof Keypad',
            description: 'Wipeable wall control for scenes and lights',
          },
        ],
        activeScene: {
          name: 'Cooking Mode',
          description:
            'Counters light up bright and clear for preparation; when dinner is served, the island settles into a warm low glow.',
        },
        scenes: [
          {
            id: 'culinary',
            name: 'Cooking Mode',
            description:
              'Counters light up bright and clear for preparation; when dinner is served, the island settles into a warm low glow.',
          },
          {
            id: 'evening',
            name: 'Evening Kitchen',
            description:
              'A soft perimeter glow keeps the kitchen usable and calm after the meal, without harsh overhead light.',
          },
        ],
      },
      {
        id: 'foyer',
        name: 'Grand Foyer & Gallery',
        tabLabel: 'GRAND ENTRANCE',
        mapLabel: 'GRAND FOYER & GALLERY',
        nodeNumber: 4,
        category: 'Reception & Gallery',
        title: 'Grand Entrance Automation',
        hardwareNodes: [
          {
            icon: 'key',
            title: 'Smart Lock & Keypad',
            description: 'Fingerprint or code entry, with a regular key as backup',
          },
          {
            icon: 'eye',
            title: 'Arrival Lighting',
            description: 'The entrance lights up as you step in',
          },
          {
            icon: 'camera',
            title: 'Door Camera',
            description: 'See visitors and recordings stay inside your home',
          },
          {
            icon: 'bell',
            title: 'Video Intercom',
            description: 'Answer the door from the wall panel or your phone',
          },
        ],
        activeScene: {
          name: 'Welcome Home',
          description:
            'Unlocking the door brings the entrance to life: gallery spots highlight the artwork and the hall warms up behind you.',
        },
        scenes: [
          {
            id: 'arrival',
            name: 'Welcome Home',
            description:
              'Unlocking the door brings the entrance to life: gallery spots highlight the artwork and the hall warms up behind you.',
          },
          {
            id: 'night',
            name: 'Night Watch',
            description:
              'Overnight, only a faint floor-level glow remains, rising gently if footsteps are detected.',
          },
        ],
      },
    ] as RoomZone[],
  },

  moments: {
    eyebrow: 'Choreographed Moments',
    title: 'Seamless Daily Living',
    sub: 'Effortless routines crafted for peace of mind. Experience intuitive living where your home responds in real time.',
    testRoutine: 'Test Routine',
    simEyebrow: 'Local Routine Sequence Simulator',
    simTitleSuffix: 'Automation Chain',
    trigger: 'Trigger Simulation',
    executing: 'Executing Chain...',
    scenarios: [
      {
        id: 'arriving_home',
        number: 'SCENARIO 01',
        title: 'Arriving Home',
        iconName: 'home',
        description:
          'The house notices your arrival and gets ready: paths light up, the entrance opens for you, and everything settles to comfort.',
        automationSequence: [
          'Your arrival is recognized at the gate',
          'Driveway and entrance lights come on',
          'The door unlocks for you',
          'The home settles into its welcome scene',
        ],
      },
      {
        id: 'good_night',
        number: 'SCENARIO 02',
        title: 'Good Night',
        iconName: 'moon',
        description:
          'One tap beside the bed settles the whole home: lights fade out, doors lock, and the ground floor keeps a quiet watch.',
        automationSequence: [
          'Master bedside button pressed',
          'Interior lights fade out gently',
          'Doors lock for the night',
          'Ground-floor sensors keep a quiet watch',
        ],
      },
      {
        id: 'away_mode',
        number: 'SCENARIO 03',
        title: 'Away Mode',
        iconName: 'plane',
        description:
          'Leaving for a trip? The home looks lived-in, stays efficient, and lets you check in securely from anywhere.',
        automationSequence: [
          'Away mode confirmed as you leave',
          'Lights follow a lived-in pattern',
          'Water supply closes for safety',
          'Check in anytime over secure remote access',
        ],
      },
      {
        id: 'movie_time',
        number: 'SCENARIO 04',
        title: 'Movie Time',
        iconName: 'film',
        description:
          'One scene dims the room, closes the curtains, and sets the sound — the cinema comes to you.',
        automationSequence: [
          'Movie scene started',
          'Curtains glide closed',
          'Lights dim to a soft glow',
          'Sound switches to cinema mode',
        ],
      },
    ] as Scenario[],
  },

  hardware: {
    eyebrow: 'Broad Compatibility',
    title: 'Comprehensive Hardware Compatibility',
    sub: 'Everyday devices — lighting, curtains, sensors, cameras, locks and switches — joined into one system that runs locally in your home.',
    builtOn: 'Built on Home Assistant',
    addons: 'Zigbee2MQTT • Node-RED • Local Tuya',
    roadmapBadge: 'Roadmap • Coming soon',
    categories: [
      {
        title: 'Lighting',
        description:
          'Switches, dimmers and scene keypads for everyday lighting — grouped into one-tap scenes for each room.',
        icon: 'lightbulb',
        protocols: ['Zigbee', 'Tuya (local key)'],
        status: 'current',
      },
      {
        title: 'Curtains & Blinds',
        description:
          'Motorized curtains and blinds that open, close, or rest at your favorite positions — by schedule, scene or wall switch.',
        icon: 'blinds',
        protocols: ['Zigbee', 'Tuya (local key)'],
        status: 'current',
      },
      {
        title: 'Sensors',
        description:
          'Presence, door and window, smoke, water-leak and air-quality sensors that let the home react on its own.',
        icon: 'activity',
        protocols: ['Zigbee', 'Tuya (local key)'],
        status: 'current',
      },
      {
        title: 'Cameras',
        description:
          'Door and outdoor cameras with recordings stored inside your home. No mandatory cloud subscription.',
        icon: 'camera',
        protocols: ['Local storage', 'ONVIF / RTSP'],
        status: 'current',
      },
      {
        title: 'Locks & Access',
        description:
          'Fingerprint, code and card entry for family and guests — with a regular mechanical key as backup.',
        icon: 'lock',
        protocols: ['Zigbee', 'Tuya (local key)'],
        status: 'current',
      },
      {
        title: 'Switches & Sockets',
        description:
          'Familiar wall switches and smart sockets that keep working even when the internet is down.',
        icon: 'toggle-left',
        protocols: ['Zigbee', 'Tuya (local key)'],
        status: 'current',
      },
      {
        title: 'KNX Wired Bus',
        description:
          'Wired KNX integration for new-build projects with bus cabling. Details to be confirmed.',
        icon: 'network',
        protocols: ['KNX'],
        status: 'roadmap',
      },
      {
        title: 'DALI-2 Lighting Bus',
        description:
          'Addressable DALI-2 lighting control for larger lighting designs. Details to be confirmed.',
        icon: 'sliders',
        protocols: ['DALI-2'],
        status: 'roadmap',
      },
      {
        title: 'Air Conditioning',
        description:
          'Integrated climate scenes for split and central systems. Details to be confirmed.',
        icon: 'wind',
        protocols: [] as string[],
        status: 'roadmap',
      },
    ] as HardwareCategory[],
  },

  philosophy: {
    eyebrow: 'Local-First Philosophy',
    title: 'True Luxury is Complete Peace of Mind.',
    sub: 'Your home should keep working when the internet drops — and your daily life should stay inside your own walls.',
    cards: [
      {
        title: 'Runs locally, even without internet',
        body: 'All automations, schedules and wall-switch actions run through the Home Assistant hub in your home — not through an internet server.',
        badge: 'Works Without Internet',
      },
      {
        title: 'Secure remote access',
        body: 'When you travel, you check in on your home over secure remote access (VPN) — a private road back to your own system.',
        badge: 'Secure Remote Access (VPN)',
      },
      {
        title: 'Your data stays in your home',
        body: "Camera recordings and activity history are stored on hardware inside your home — not uploaded to someone else's servers.",
        badge: 'Stays In Your Home',
      },
    ],
  },

  method: {
    eyebrow: 'Turnkey Methodology',
    title: 'From Blueprint to Handover',
    sub: 'A disciplined engineering lifecycle tailored to luxury residences under construction or undergoing high-end refurbishment.',
    steps: [
      {
        number: '01',
        title: 'Site visit',
        description:
          'We walk your home or site with you and note how you live, room by room.',
      },
      {
        number: '02',
        title: 'System design',
        description:
          'You receive a clear plan: which devices go where, and what each scene does.',
      },
      {
        number: '03',
        title: 'Installation',
        description:
          'Devices, wiring and the home hub are installed with minimal disruption.',
      },
      {
        number: '04',
        title: 'Programming',
        description:
          'Scenes and automations are set up around your routine and tuned with you.',
      },
      {
        number: '05',
        title: 'Testing and handover',
        description:
          'Everything is tested end to end, then handed over with a walkthrough and documentation.',
      },
    ] as MethodologyStep[],
    partnership: {
      eyebrow: 'Systems Partnership',
      headline:
        'Symetra Solution × Conecta, installation & programming in partnership.',
      allianceName: 'Symetra Solution × Conecta',
      cities: ['Cairo', 'Alexandria', 'Riyadh', 'Jeddah'],
      symetraLogoLabel: 'Symetra Solution logo',
      conectaLogoLabel: 'Conecta logo (to be supplied)',
      conectaLogoTitle: 'Conecta logo — see CONTENT_TODO.md',
    } as PartnershipInfo & {
      symetraLogoLabel: string;
      conectaLogoLabel: string;
      conectaLogoTitle: string;
    },
  },

  projects: {
    eyebrow: 'Portfolio Highlights',
    title: 'Selected Residences',
    sub: 'Illustrative examples of the homes we deliver. Real project stories with owner permission will appear here.',
    pill: 'In Progress • Illustrative',
    cardCta: 'View Project Schematics',
    modalEyebrow: 'Illustrative Residence',
    modalNote:
      'Illustrative example — the final scope of every home depends on its site survey and system design. Detailed project stories will appear here once real commissions complete.',
    modalCta: 'Request Similar Villa Schematic',
    close: 'Close',
    closeDialog: 'Close dialog',
    items: [
      {
        id: 'new_cairo',
        title: 'Private Villa, New Cairo',
        location: 'New Cairo, Egypt',
        country: 'Egypt',
        status: 'In progress',
        image: cairoVillaImg,
        imageWebp: { small: cairoVilla640, large: cairoVilla1280 },
        description:
          'Whole-home lighting scenes, motorized shading and presence-based automation across living spaces.',
      },
      {
        id: 'riyadh_dq',
        title: 'Penthouse Suite, Riyadh DQ',
        location: 'Diplomatic Quarter, Riyadh',
        country: 'Saudi Arabia',
        status: 'In progress',
        image: riyadhPenthouseImg,
        imageWebp: { small: riyadhPenthouse640, large: riyadhPenthouse1280 },
        description:
          'Scene control, multi-room ambience and discreet presence detection for apartment living.',
      },
      {
        id: 'sahel_coastal',
        title: 'Coastal Residence, Sahel',
        location: 'North Coast (Sahel), Egypt',
        country: 'Egypt',
        status: 'In progress',
        image: sahelResidenceImg,
        imageWebp: { small: sahelResidence640, large: sahelResidence1280 },
        description:
          'Secure remote check-in, shutter automation and leak protection for a second home.',
      },
    ] as ResidenceProject[],
  },

  inquiry: {
    eyebrow: 'Private Demonstration',
    title: 'Ready to Experience Effortless Living?',
    sub: 'Schedule a private consultation or demo in Cairo or Riyadh. Speak directly with our systems team about your home.',
    demoCta: 'Request Showroom Demo',
    callCta: 'Call An Engineer Directly',
    formTitle: 'Direct Project Inquiry',
    nameLabel: 'Full Name',
    namePh: 'e.g. Tariq Al-Mansoor',
    phoneLabel: 'Phone Number',
    phonePh: '+966 or +20...',
    cityLabel: 'Project City',
    submit: 'Submit Consultation Request',
    sending: 'Sending…',
    failed: 'Could not send your inquiry. Please try again.',
    consent: 'I agree to be contacted about my inquiry.',
    privacy: 'We use your details only to respond to your inquiry.',
    successTitle: 'Inquiry Received',
    successBody: 'Our team will contact you about your inquiry for {city}.',
    again: 'Submit another inquiry',
  },

  booking: {
    badge: 'PRIVATE DEMONSTRATION BOOKING',
    badgeCities: 'Cairo & Riyadh Studios',
    closeDialog: 'Close dialog',
    title: 'Experience Symetra Sanctuary',
    sub: 'Schedule an exclusive in-person walkthrough at our Riyadh or Cairo private experience centers, or request a technical engineer consultation.',
    successEyebrow: 'Private Demonstration Confirmed',
    successTitle: 'Experience Symetra Sanctuary',
    successBody: 'Thank you, {name}. Your private walkthrough request has been noted — our team will confirm the details with you.',
    guestFallback: 'Esteemed Guest',
    passTitle: 'Reservation Pass',
    formatLabel: 'Format',
    formatShowroom: 'Showroom Immersion',
    formatOnsite: 'On-Site Assessment',
    formatVirtual: 'Virtual Engineering',
    windowLabel: 'Window',
    locationLabel: 'Location',
    calendarCta: 'Add to Calendar (.ics)',
    done: 'Done',
    step1: '1. I Am Inquiring As',
    roleOwner: 'Villa Owner',
    roleArchitect: 'Architect / Designer',
    rolePartner: 'Commercial Partner',
    step2: '2. Preferred Experience Format',
    showroomTitle: 'Showroom Immersion',
    showroomBody: 'Live fully-automated villa demo in Riyadh DQ or Cairo 5th Settlement',
    onsiteTitle: 'On-Site Assessment',
    onsiteBody: 'Blueprint & electrical layout review at your ongoing construction villa',
    virtualTitle: 'Virtual Engineering',
    virtualBody: 'Direct technical video consultation with our low-voltage systems team',
    step3: '3. Contact & Residence Location',
    nameLabel: 'Full Name',
    namePh: 'e.g. Tariq Al-Mansoor',
    emailLabel: 'Email Address',
    emailPh: 'tariq@residence.com',
    phoneLabel: 'Phone / WhatsApp',
    phonePh: '50 123 4567',
    cityLabel: 'Project City',
    step4: '4. Preferred Demonstration Window',
    privacyTitle: 'Privacy note:',
    privacyBody:
      'We use your details only to arrange your demonstration and never share them with third parties.',
    submit: 'Confirm Private Demonstration',
    sending: 'Sending…',
    failed: 'Could not send your request. Please check your connection and try again.',
    consent: 'I agree to be contacted about my inquiry.',
    cancel: 'CANCEL',
  },

  specs: {
    eyebrow: 'Room Preference List',
    titleBefore: 'What should',
    titleAfter: 'do?',
    note: 'This list is a starting point for the conversation. The final specification is prepared by our engineers after a site visit — nothing here is a quote.',
    save: 'Save Preferences',
    saved: 'Preferences Saved',
    review: 'Request Engineering Review',
  },

  footer: {
    navTitle: 'Navigation',
    links: [
      { label: 'How It Works', href: '#architecture' },
      { label: 'Hardware & Nodes', href: '#living-spaces' },
      { label: 'Atmosphere Scenarios', href: '#living-spaces' },
      { label: 'Local-First Privacy', href: '#philosophy' },
      { label: 'Private Residences', href: '#residences' },
    ],
    studiosTitle: 'Regional Studios',
    deskTitle: 'Direct Desk',
    badge: 'Built on Home Assistant • Runs locally',
    disclaimer:
      'Home Assistant is an open source project; Symetra Solution is an independent company.',
    rights: '© 2025 Symetra Solution. All rights reserved. Crafted for GCC & Egypt.',
  },

  contact: {
    hotlineLabel: 'Riyadh & Cairo Desk',
    hotlineHref: HREFS.hotline,
    hotlineDisplay: HREFS.hotlineDisplay,
    emails: [
      { label: HREFS.emailConciergeLabel, href: HREFS.emailConcierge },
      { label: HREFS.emailKsaLabel, href: HREFS.emailKsa },
    ],
    studios: [
      {
        label: 'Cairo Studio',
        phoneDisplay: HREFS.cairoDisplay,
        phoneHref: HREFS.cairoTel,
      },
      {
        label: 'Riyadh Studio',
        phoneDisplay: HREFS.riyadhDisplay,
        phoneHref: HREFS.riyadhTel,
      },
    ],
    projectCities: [
      'Riyadh, KSA',
      'Jeddah, KSA',
      'Cairo, Egypt',
      'North Coast (Sahel), Egypt',
      'Dubai / Abu Dhabi, UAE',
    ],
    bookingCities: [
      'Riyadh (Diplomatic Quarter / Al Malqa)',
      'Riyadh (Diriyah / Hittin / Sedra)',
      'Cairo (New Cairo / 5th Settlement)',
      'Cairo (Palm Hills / Sheikh Zayed)',
      'North Coast (Sahel / Hacienda / Marassi)',
      'Jeddah (Al Shati / Obhur Al Shamaliyah)',
    ],
    defaultBookingCity: 'Riyadh (Diplomatic Quarter / Al Malqa)',
    countryLabels: ['Saudi Arabia', 'Egypt', 'UAE', 'Kuwait'] as string[],
    windows: [
      { id: 'morning', label: 'Morning', hours: '10:00 - 13:00' },
      { id: 'afternoon', label: 'Afternoon', hours: '14:00 - 18:00' },
      { id: 'evening', label: 'Evening', hours: '19:00 - 21:00' },
    ] as { id: 'morning' | 'afternoon' | 'evening'; label: string; hours: string }[],
    regionalStudios: [
      { city: 'Riyadh', district: 'Al Malqa District, KSA' },
      { city: 'Jeddah', district: 'Al Shati District, KSA' },
      { city: 'Cairo', district: 'Fifth Settlement, New Cairo, EG' },
    ],
  },
};

export type Bundle = typeof enBundle;
