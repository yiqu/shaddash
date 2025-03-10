import {
  Bot,
  Info,
  Search,
  History,
  Command,
  Settings2,
  FolderHeart,
  AudioWaveform,
  SquareTerminal,
  GalleryVerticalEnd,
} from 'lucide-react';

export const LEFT_NAV_ITEMS = {
  applications: [
    {
      name: 'DE',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'JP',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'CS',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain2: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      isActive: true,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
  ],
  navMain: [
    {
      name: 'Search',
      url: '/search',
      icon: Search,
    },
    {
      name: 'Favorites',
      url: '/favorites',
      icon: FolderHeart,
    },
    {
      name: 'History',
      url: '/history',
      icon: History,
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: Settings2,
    },
    {
      name: 'About',
      url: '/about',
      icon: Info,
    },
  ],
};
