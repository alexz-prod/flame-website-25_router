import { useState, type FC } from 'react';
import { cx } from '~/domain/utils/cx';
import type { TeamItemDto } from '~/sections/Team';
import { CloseBtn } from './CloseBtn';
import { Img } from './Img';

type Props = {
  member: TeamItemDto;
};

export const TeamCardItem: FC<Props> = ({ member }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="w-full text-left">
        <Img
          img={member.img}
          className="w-full cursor-pointer object-cover"
          onClick={() => setIsOpen(true)}
        />
        <h3 className="h4 mt-4">{member.name}</h3>
        <p className="mt-2">{member.position}</p>
      </div>

      {/* overlay */}
      {isOpen && (
        <button
          className="fixed inset-0 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={cx(
          'bg-pure px-content fixed top-1/2 left-1/2 flex h-full w-full max-w-4xl -translate-1/2 flex-col items-start gap-12 overflow-y-auto pt-20 pb-8 shadow-2xl transition-all md:h-9/10 md:flex-row',
          {
            'invisible scale-98 opacity-0': !isOpen,
            'visible scale-100 opacity-100': isOpen,
          },
        )}
      >
        <CloseBtn onClick={() => setIsOpen(false)} />
        <Img
          img={member.img}
          className="aspect-square w-full max-w-80 object-cover"
        />

        <div>
          <h3 className="h3">{member.name}</h3>
          <p className="mt-2 whitespace-pre-line">{member.bio}</p>
          <button
            type="button"
            className="btn btn_secondary text-incense-900 mt-4 w-full"
            onClick={() => setIsOpen(false)}
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
