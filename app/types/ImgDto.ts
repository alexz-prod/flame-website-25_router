export type ImgDto = {
  src: string;
  alt: string;
  sizes?: [src: string, intrinsicSize: number][];
};
