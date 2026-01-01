import { useState, type ComponentProps, type FC } from 'react';
import { cx } from '~/domain/utils/cx';
import type { TrackItemDto } from '~/sections/Tracks';
import { Img } from './Img';

interface Props extends ComponentProps<'div'> {
  item: TrackItemDto;
  className?: string;
  reversed?: boolean;
}

export const TrackItem: FC<Props> = ({ item, reversed, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...props} className={cx('relative', props.className)}>
      <button
        type="button"
        className={cx(
          'animate-breathe relative block w-full max-w-xs cursor-pointer text-left',
          { 'ml-auto lg:ml-0': !!reversed },
        )}
        onClick={() => setIsOpen(true)}
      >
        <Img img={item.img} className="aspect-square w-full" />
        <h3 className="h3 absolute bottom-4 w-full px-6 select-none">
          {item.name}
        </h3>
        <div className="text-pure pointer-events-none absolute top-3 right-3 rounded-full border-3 px-3 text-sm font-black">
          *klick*
        </div>
      </button>
      {/* <!-- OVERLAY --> */}
      <div
        className={cx(
          'absolute top-0 z-10 max-w-4xl origin-top-left transition-all md:w-[88dvw]',
          {
            'left-0': !reversed,
            'right-0 origin-top-right': !!reversed,
            'invisible scale-98 opacity-0': !isOpen,
            'visible scale-100 opacity-100': isOpen,
          },
        )}
      >
        {/* <!-- backdrops --> */}
        <button
          type="button"
          className="fixed inset-0 h-dvh w-dvw scale-300 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <div className="bg-incense-900 absolute -inset-8" />
        {/* <!-- wrap in relative div so the absolute positioned backdrop is behind it --> */}
        <div
          className={cx('relative items-start gap-8 md:flex', {
            'flex-row-reverse': !!reversed,
          })}
        >
          <button
            type="button"
            className="relative block max-w-xs cursor-pointer text-left md:min-w-xs"
            onClick={() => setIsOpen(false)}
          >
            <Img className="aspect-square w-full" img={item.img} />
            <h3 className="h3 absolute bottom-4 w-full px-6">{item.name}</h3>
          </button>
          <div>
            {item.content}
            <button
              type="button"
              className="btn btn_secondary text-day mt-8 w-full"
              onClick={() => setIsOpen(false)}
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
