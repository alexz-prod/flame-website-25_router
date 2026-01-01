import type { ComponentProps, FC } from 'react';
import type { ImgDto } from '~/types/ImgDto';

type Props = ComponentProps<'img'> & {
  img: ImgDto;
};

export const Img: FC<Props> = ({ img, ...props }) => {
  let srcset: string | undefined = undefined;
  if (img.sizes)
    srcset = img.sizes.map(([src, size]) => `${src} ${size}w`).join(', ');

  return <img src={img.src} alt={img.alt} srcSet={srcset} {...props} />;
};
