import type { FC, MouseEvent } from 'react';
import { cx } from '~/domain/utils/cx';

export type AccordionItem = {
  title: string;
  content: string;
};

type Props = {
  item: AccordionItem;
  isOpen: boolean;
  onClick: (ev: MouseEvent<HTMLButtonElement>) => void;
};

export const AccordionItem: FC<Props> = ({ item, isOpen, onClick }) => {
  return (
    <li className="border-pray border-b-2">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between py-2 text-left select-none"
        onClick={onClick}
      >
        <span className="text-lg font-semibold tracking-wide">
          {item.title}
        </span>
        <span
          className={cx('text-2xl transition-transform', {
            'rotate-45': isOpen,
          })}
        >
          +
        </span>
      </button>
      <div
        className={cx('overflow-hidden transition-all', {
          'h-0': !isOpen,
          'h-auto': isOpen,
        })}
      >
        <p className="text-incense-900 pb-2 leading-relaxed whitespace-pre-line">
          {item.content}
        </p>
      </div>
    </li>
  );
};
