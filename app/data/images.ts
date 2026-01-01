import type { ImgDto } from '~/types/ImgDto';

export const INDEX_IMG_DATA = {
  hannesPraying: {
    alt: 'Betender Mann',
    src: '/img/hannes-praying@2x.webp',
    sizes: [
      ['/img/hannes-praying.webp', 320],
      ['/img/hannes-praying@2x.webp', 640],
      ['/img/hannes-praying@3x.webp', 960],
      ['/img/hannes-praying@4x.webp', 1280],
    ],
  },
  hartlTeaching: {
    alt: 'Johannes Hartl sprechend auf der Bühne',
    src: '/img/hartl-teaching@2x.webp',
    sizes: [
      ['/img/hartl-teaching.webp', 320],
      ['/img/hartl-teaching@2x.webp', 640],
      ['/img/hartl-teaching@3x.webp', 960],
      ['/img/hartl-teaching@4x.webp', 1280],
    ],
  },
  jonathPraying: {
    alt: 'Betender Mann',
    src: '/img/jonath-praying@2x.webp',
    sizes: [
      ['/img/jonath-praying.webp', 320],
      ['/img/jonath-praying@2x.webp', 640],
      ['/img/jonath-praying@3x.webp', 960],
      ['/img/jonath-praying@4x.webp', 1280],
    ],
  },
  manPraying: {
    alt: 'Betender Mann',
    src: '/img/man-praying@2x.webp',
    sizes: [
      ['/img/man-praying.webp', 320],
      ['/img/man-praying@2x.webp', 640],
      ['/img/man-praying@3x.webp', 960],
      ['/img/man-praying@4x.webp', 1280],
    ],
  },
  mehrAtmo: {
    alt: 'Bühne auf der MEHR-Konferenz',
    src: '/img/mehr-atmo@2x.webp',
    sizes: [
      ['/img/mehr-atmo.webp', 320],
      ['/img/mehr-atmo@2x.webp', 640],
      ['/img/mehr-atmo@3x.webp', 960],
      ['/img/mehr-atmo@4x.webp', 1280],
    ],
  },
  orangeJacketGirl: {
    alt: 'Frau mit einer orangefarbenen Jacke',
    src: '/img/orange-jacket-girl@2x.webp',
    sizes: [
      ['/img/orange-jacket-girl.webp', 320],
      ['/img/orange-jacket-girl@2x.webp', 640],
      ['/img/orange-jacket-girl@3x.webp', 960],
      ['/img/orange-jacket-girl@4x.webp', 1280],
    ],
  },
  oratorium: {
    alt: 'Oratorium im Gebetshaus',
    src: '/img/oratorium@2x.webp',
    sizes: [
      ['/img/oratorium.webp', 320],
      ['/img/oratorium@2x.webp', 640],
      ['/img/oratorium@3x.webp', 960],
      ['/img/oratorium@4x.webp', 1280],
    ],
  },
  prayerRoom: {
    alt: 'Frau kniend im Gebetsraum',
    src: '/img/prayer-room@2x.webp',
    sizes: [
      ['/img/prayer-room.webp', 320],
      ['/img/prayer-room@2x.webp', 640],
      ['/img/prayer-room@3x.webp', 960],
      ['/img/prayer-room@4x.webp', 1280],
    ],
  },
  weeklySchedule: {
    alt: 'Kalenderansicht eines Wochenplans',
    src: '/img/weekly-schedule.svg',
  },
  wireframe: {
    alt: 'Platzhalter-Bild',
    src: '/img/wireframe-img.svg',
  },
} satisfies Record<string, ImgDto>;
