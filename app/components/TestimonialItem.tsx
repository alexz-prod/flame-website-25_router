import type { FC } from 'react';
import type { TestimonialDto } from '~/sections/Testimonials';
import { Img } from './Img';

type Props = {
  testimonial: TestimonialDto;
  slugPrefix?: string;
};

export const TestimonialItem: FC<Props> = ({ testimonial, slugPrefix }) => {
  const id = slugPrefix
    ? `${slugPrefix}-${testimonial.slug}`
    : testimonial.slug;

  return (
    <div id={id}>
      <div className="flex items-center gap-4">
        <Img className="w-32 object-cover" img={testimonial.author.img} />
        <div>
          <div className="h4">— {testimonial.author.name}</div>
          <div className="max-w-sm text-current/80">
            {testimonial.author.bio}
          </div>
        </div>
      </div>
      <p className="mt-6">{testimonial.content}</p>
    </div>
  );
};
