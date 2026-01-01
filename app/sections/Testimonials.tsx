import { useState } from 'react';
import { CloseBtn } from '~/components/CloseBtn';
import { TestimonialItem } from '~/components/TestimonialItem';
import { TestimonialNavBadge } from '~/components/TestimonialNavBadge';
import { cx } from '~/domain/utils/cx';
import type { ImgDto } from '~/types/ImgDto';

export default function () {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <section className="py-section bg-pray text-pure">
      <div className="content">
        <h2 className="h2 text-day max-w-md">Stimmen von Absol&shy;venten</h2>

        {/* PREVIEW */}
        <button
          type="button"
          className="md:gap-content mt-10 grid cursor-pointer grid-cols-1 gap-10 text-left md:grid-cols-2"
          onClick={() => setOverlayOpen(true)}
        >
          {TESTIMONIAL_DATA.slice(0, 2).map((item) => (
            <TestimonialItem
              key={item.slug}
              testimonial={item}
              slugPrefix="preview"
            />
          ))}
        </button>

        <button
          type="button"
          className="btn btn_secondary text-pure mx-auto mt-8 block w-full max-w-lg md:mt-16"
          onClick={() => setOverlayOpen(true)}
        >
          Mehr Stimmen
        </button>
      </div>

      {/* OVERLAY */}
      <div
        className={cx('fixed inset-0 cursor-pointer', {
          invisible: !overlayOpen,
        })}
        onClick={() => setOverlayOpen(false)}
      />
      <div
        className={cx(
          'bg-pure text-incense-900 fixed top-1/2 left-1/2 z-30 h-full w-full max-w-3xl -translate-1/2 scroll-pt-20 overflow-y-auto scroll-smooth shadow-2xl transition-all sm:h-9/10 sm:w-9/10',
          {
            'invisible scale-98 opacity-0': !overlayOpen,
            'visible scale-100 opacity-100': overlayOpen,
          },
        )}
      >
        <CloseBtn className="fixed" onClick={() => setOverlayOpen(false)} />

        <div className="content py-8">
          <h2 className="h2 text-pray max-w-lg">
            Stimmen von Absol&shy;venten
          </h2>

          {/* nav / preview */}
          <div className="bg-pure sticky top-0 mt-10 mb-4 w-full py-4">
            {/* TODO: highlight current */}
            <div className="mx-auto flex max-w-xl">
              {TESTIMONIAL_DATA.map((item) => (
                <TestimonialNavBadge key={item.slug} testimonial={item} />
              ))}
            </div>
          </div>

          {/* items */}
          <div className="mx-auto max-w-xl space-y-16">
            {TESTIMONIAL_DATA.map((item) => (
              <TestimonialItem key={item.slug} testimonial={item} />
            ))}
          </div>

          <button
            type="button"
            className="btn btn_secondary text-incense-900 mx-auto mt-12 block w-full max-w-xl"
            onClick={() => setOverlayOpen(false)}
          >
            Schließen
          </button>
        </div>
      </div>
    </section>
  );
}

let TESTIMONIAL_DATA: TestimonialDto[] = [
  {
    slug: 'stimme-elias-glaeser',
    author: {
      img: { src: '/img/wireframe-img.svg', alt: 'Portrait Elias Gläser' },
      name: 'Elias Gläser',
      bio: ' Musiker, Macher, hat beim Wasserrutschenrennen gegen Silas gewonnen.',
    },
    content:
      'Die intensive Gemeinschaft und die vielen Stunden in Gottes Gegenwart haben mein Leben verändert. Es ist unglaublich wie viel Neues ich über mich selbst und über Gott erfahren habe. Die FlameAcademy hat mich in vielerlei Hinsicht durchgeschüttelt - und ich bin leichter und freier rausgegangen.',
  },
];

TESTIMONIAL_DATA.push(TESTIMONIAL_DATA[0]);
TESTIMONIAL_DATA.push(TESTIMONIAL_DATA[0]);
TESTIMONIAL_DATA.push(TESTIMONIAL_DATA[0]);
TESTIMONIAL_DATA = TESTIMONIAL_DATA.map((item, i) => ({
  ...item,
  slug: `stimme-elias-glaeser-${i}`,
}));

export type TestimonialDto = {
  slug: string;
  author: {
    img: ImgDto;
    name: string;
    bio: string;
  };
  content: string;
};
