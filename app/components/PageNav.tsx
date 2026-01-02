import { useState, type FC } from 'react';
import { cx } from '~/domain/utils/cx';
import { CloseBtn } from './CloseBtn';
import { Link } from 'react-router';

export const PageNav: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <!-- page-nav - -> */}
      <button
        className="bg-incense-900 text-pure clickable fixed bottom-3 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full px-5 py-3 text-sm tracking-wider uppercase hover:scale-102 active:scale-98"
        type="button"
        onClick={() => setOpen(true)}
      >
        <img src="/icon/hamburger-icon.svg" alt="Hamburger-Icon" />
        <span className="pt-0.5">Menü</span>
      </button>

      <div
        className={cx('fixed inset-0 z-50 transition-all duration-300', {
          'invisible opacity-0': !open,
          'opacity-100': open,
        })}
      >
        {/* backdrop */}
        <div
          className="bg-incense-900/20 fixed inset-0 cursor-pointer"
          onClick={() => setOpen(false)}
        />

        <nav
          className={cx(
            'bg-incense-900 text-pure fixed bottom-0 left-1/2 max-h-dvh w-full max-w-sm -translate-x-1/2 overflow-auto p-6 transition-transform duration-500',
            {
              'translate-y-full': !open,
              'translate-y-0': open,
            },
          )}
        >
          <CloseBtn onClick={() => setOpen(false)} />

          {NAV_DATA.map((i) => (
            <Link
              key={i.href}
              to={i.href}
              className="h4 clickable block origin-left py-2 hover:underline active:scale-98"
              onClick={() => setOpen(false)}
            >
              {i.label}
            </Link>
          ))}

          <Link
            className="btn mt-3 w-full"
            to="#bewerben"
            onClick={() => setOpen(false)}
          >
            Jetzt bewerben
          </Link>
        </nav>
      </div>
    </>
  );
};

const NAV_DATA: NavDto[] = [
  {
    label: 'Start',
    href: '/#top',
  },
  {
    label: 'Manifest',
    href: '/#manifest',
  },
  {
    label: 'Unsere Werte',
    href: '/#werte',
  },
  {
    label: 'Der Gebetsraum',
    href: '/#gebetsraum',
  },
  {
    label: 'Dein Schuljahr',
    href: '/#schuljahr',
  },
  {
    label: 'Tracks',
    href: '/#tracks',
  },
  {
    label: 'So könnte deine Woche aussehen',
    href: '/#wochenplan',
  },
  {
    label: 'Werde Teil des Gebetshaus',
    href: '/#gebetshaus',
  },
  {
    label: 'Facts',
    href: '/#facts',
  },
  {
    label: 'FAQ',
    href: '/#faq',
  },
  {
    label: 'Team',
    href: '/#team',
  },
  {
    label: 'Stimmen von Absolventen',
    href: '/#testimonials',
  },
];

type NavDto = {
  label: string;
  href: string;
};
