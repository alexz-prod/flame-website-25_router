import { useState } from 'react';
import { CloseBtn } from '~/components/CloseBtn';
import { TestimonialItem } from '~/components/TestimonialItem';
import { TestimonialNavBadge } from '~/components/TestimonialNavBadge';
import { TESTIMONIAL_IMG_DATA } from '~/data/images';
import { cx } from '~/domain/utils/cx';
import type { ImgDto } from '~/types/ImgDto';

export default function () {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <section id="testimonials" className="py-section bg-pray text-pure">
      <div className="content">
        <h2 className="h2 text-day max-w-md">Stimmen von Absol&shy;venten</h2>

        {/* <!-- PREVIEW --> */}
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

      {/* <!-- OVERLAY --> */}
      <div
        className={cx('fixed inset-0 cursor-pointer', {
          invisible: !overlayOpen,
        })}
        onClick={() => setOverlayOpen(false)}
      />
      <div
        className={cx(
          'bg-pure text-incense-900 fixed top-1/2 left-1/2 z-30 h-full w-full max-w-xl -translate-1/2 scroll-pt-20 overflow-y-auto scroll-smooth shadow-2xl transition-all sm:h-9/10 sm:w-9/10',
          {
            'invisible scale-98 opacity-0': !overlayOpen,
            'visible scale-100 opacity-100': overlayOpen,
          },
        )}
      >
        <CloseBtn className="fixed" onClick={() => setOverlayOpen(false)} />

        <div className="px-content py-8">
          <h2 className="h2 text-pray max-w-lg">
            Stimmen von Absol&shy;venten
          </h2>

          <h3 className="h5 mt-8 -mb-1">Springe zu</h3>
          {/* nav / preview */}
          <div className="bg-pure sticky top-0 mb-12 w-full py-4">
            {/* TODO: highlight current */}
            <div className="flex items-center gap-1">
              {TESTIMONIAL_DATA.map((item) => (
                <TestimonialNavBadge key={item.slug} testimonial={item} />
              ))}
            </div>
          </div>

          {/* items */}
          <div className="space-y-14">
            {TESTIMONIAL_DATA.map((item) => (
              <TestimonialItem key={item.slug} testimonial={item} />
            ))}
          </div>

          <button
            type="button"
            className="btn btn_secondary text-incense-900 mt-12 block w-full"
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
      name: 'Elias Gläser',
      bio: 'Speaker & Podcaster, GebetshausMissionar',
      year: '2019/2020',
      img: TESTIMONIAL_IMG_DATA.eliasGlaeser,
    },
    content:
      'Die intensive Gemeinschaft und die vielen Stunden in Gottes Gegenwart haben mein Leben verändert. Es ist unglaublich, wie viel Neues ich über mich selbst und über Gott erfahren habe. ',
  },
  {
    slug: 'stimme-cornelia-kindsvater',
    author: {
      name: 'Cornelia Kindsvater',
      bio: 'Selbstständige Fotografin',
      year: '2021/2022',
      img: TESTIMONIAL_IMG_DATA.corneliaKindsvater,
    },
    content:
      'Ich bin mit einer großen Sehnsucht Gott zu begegnen in die FlameAcademy gestartet. Und Gott ist mir begegnet. Ganz anders als erwartet, aber es hat mein Leben verändert.',
  },
  {
    slug: 'stimme-ruben-winkelmann',
    author: {
      name: 'Ruben Winkelmann',
      bio: 'Arzt i.A. zum Facharzt für Psychiatrie & Psychotherapie',
      year: '2020/2021',
      img: TESTIMONIAL_IMG_DATA.rubenWinkelmann,
    },
    content:
      'Die Flame war für mich eine prägende Lebensschule. Zwischen Studium und Berufsstart durfte ich neu Tiefe und Freiheit in der Anbetung erfahren, meine Leitungs- und Beziehungskompetenzen erweitern und in unzähligen Momenten des Gebets mein Herz von Jesus verändern lassen.',
  },
  {
    slug: 'stimme-marcus-messig',
    author: {
      name: 'Marcus Messig',
      bio: 'Singer-Songwriter & Lobpreisleiter, GebetshausMissionar',
      year: '2015/2016',
      img: TESTIMONIAL_IMG_DATA.marcusMessig,
    },
    content:
      'Mit der FlameAcademy begann ein völlig neues Kapitel in meinem Leben. Neben den starken Teachings fand ich den Unterricht in Musiktheorie, Gehörbildung, Lobreisleitung, Songwriting, Gesang und Gitarre sehr wertvoll und essenziell für meine Berufung als Lobpreiser und das alles in einer Atmosphäre von 24/7-Anbetung.',
  },
  {
    slug: 'stimme-sarah-georg',
    author: {
      name: 'Sarah Georg',
      bio: 'Singer-Songwriterin & Lobpreisleiterin, GebetshausMissionarin',
      year: '2019/2020',
      img: TESTIMONIAL_IMG_DATA.sarahGeorg,
    },
    content:
      'Während der FlameAcademy durfte ich in meinen Gebetsraumzeiten lernen, was es heißt, unter Gottes liebendem Blick zu stehen und von dieser Position aus Lobpreis zu leiten. Ich habe dabei eine neue Freiheit entdeckt, die ich vorher nicht kannte – meine Anbetung ist tiefer, echter und lebendiger geworden.',
  },
  {
    slug: 'stimme-sarina-deitigsmann',
    author: {
      name: 'Sarina Deitigsmann',
      bio: 'Gestalttherapeutin & Coach',
      year: '2018/2019',
      img: TESTIMONIAL_IMG_DATA.sarinaDeitigsmann,
    },
    content:
      'Besonders an dieser Schule ist, dass man so viel Zeit im Gebetsraum verbringt und dadurch von den anderen Christen im Gebetshaus, doch vor allem von Gott selbst nachhaltig geprägt wird. In dieser Zeit wurde ich immer mehr zu dem Unikat, das Gott sich gedacht hat.',
  },
  {
    slug: 'stimme-joshua-zavazava',
    author: {
      name: 'Joshua Zavazava',
      bio: 'Medizinstudent & Lobpreisleiter',
      year: '2022/2023',
      img: TESTIMONIAL_IMG_DATA.joshuaZavazava,
    },
    content:
      'In der FlameAcademy durfte ich neu lernen, was echte Freiheit in Beziehungen heißt und wie sie praktisch aussieht. Heute ist die Qualität meiner Beziehungen zu Familie und Freunden nachhaltig gesünder und schöner als je zuvor.',
  },
  {
    slug: 'stimme-julian-rau',
    author: {
      name: 'Julian Rau',
      bio: 'Veranstaltungstechniker & Drummer ',
      year: '2020/2021',
      img: TESTIMONIAL_IMG_DATA.julianRau,
    },
    content:
      'Die FlameAcademy hat mir nicht einfach nur mehr Skills gebracht, sie hat mein Leben verändert. Ich habe gelernt, beziehungsfähig zu leben, meinen Fokus zu finden und Gott auf völlig neue Arten zu begegnen.',
  },
  {
    slug: 'stimme-pronks',
    author: {
      name: 'Familie Pronk',
      bio: 'GebetshausMissionare & Lobpreisleiter',
      year: '2019/2020',
      img: TESTIMONIAL_IMG_DATA.pronks,
    },
    content:
      'Das Besondere an der FlameAcademy ist ihre Ganzheitlichkeit – wichtig ist unser Herz, nicht allein äußerlich sichtbare Begabungen. Diese 10 Monate waren ein großer Gewinn für uns. Die Teachings waren praxisnah, die Zeit im Gebetsraum lebensverändernd. Hier wurde unsere Berufung geschärft und unsere Beziehung zu Jesus hat ein neues, tieferes Level erreicht.',
  },
];

export type TestimonialDto = {
  slug: string;
  author: {
    img: ImgDto;
    name: string;
    bio: string;
    year: string;
  };
  content: string;
};
