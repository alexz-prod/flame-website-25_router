import { useEffect, useState, type FC } from 'react';
import { cx } from '~/domain/utils/cx';

export const NotificationBanner: FC = () => {
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBannerVisible(true);
    }, 500);
  }, []);

  return (
    <div
      className={cx(
        'bg-pray text-pure fixed top-0 left-0 z-20 w-full transition-transform',
        {
          'translate-y-0': bannerVisible,
          '-translate-y-full': !bannerVisible,
        },
      )}
    >
      <div className="sm:content flex flex-col items-stretch justify-center font-black tracking-wider uppercase sm:flex-row sm:gap-4">
        <span className="px-content py-4 text-center sm:px-0">
          Tag der Offenen Tür am 01.05.{' '}
        </span>
        <a
          href="mailto:flameacademy@gebetshaus.org?subject=Anmeldung Tag der offenen Tür&body=Hallo Flame-Team,%0D%0A%0D%0A✓ Ich komme zum Tag der offenen Tür am 01.05.2026%0D%0A✓ Ich habe noch eine Frage:"
          className="btn"
          type="button"
        >
          Jetzt anmelden
        </a>

        <button
          type="button"
          className="btn bg-pray_hover absolute right-0 bottom-0"
          onClick={() => setBannerVisible(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};
