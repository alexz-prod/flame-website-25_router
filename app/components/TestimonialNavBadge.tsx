import type { FC } from 'react';
import type { TestimonialDto } from '~/sections/Testimonials';
import { Img } from './Img';

type Props = {
  testimonial: TestimonialDto;
};

export const TestimonialNavBadge: FC<Props> = ({ testimonial }) => {
  return (
    <a
      href={'#' + testimonial.slug}
      className="group clickable flex items-center p-1 font-semibold transition-colors hover:bg-current/5 active:bg-current/10"
    >
      <Img className="aspect-square w-8" img={testimonial.author.img} />
      <div className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap transition-all group-hover:max-w-40">
        <span className="mx-2">{testimonial.author.name}</span>
      </div>
    </a>
  );
};
