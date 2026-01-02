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
      className="clickable transition-transform hover:scale-110 active:scale-98"
    >
      <Img
        className="aspect-square w-8 rounded-full"
        img={testimonial.author.img}
      />
    </a>
  );
};
