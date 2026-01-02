import type { ComponentProps, FC } from 'react';
import { cx } from '~/domain/utils/cx';

export const CloseBtn: FC<ComponentProps<'button'>> = (props) => {
  return (
    <button
      {...props}
      className={cx(
        'clickable absolute top-4 right-4 h-12 w-12 rotate-45 items-center rounded-full text-center text-3xl font-semibold active:bg-current/15',
        props.className,
      )}
    >
      <span className="block pt-0.75">+</span>
    </button>
  );
};
