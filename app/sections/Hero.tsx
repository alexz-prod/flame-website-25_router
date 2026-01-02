import { Link } from 'react-router';
import { Img } from '~/components/Img';
import { INDEX_IMG_DATA } from '~/data/images';

export default function () {
  return (
    <section className="content flex h-dvh flex-col items-center justify-center">
      <video
        src="/video/gebetshaus-loop.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* <img
        src="/img/wireframe-img.svg"
        alt="TODO:"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      /> */}
      <Img
        img={INDEX_IMG_DATA.logoWordPure}
        className="absolute top-4 left-4 w-48"
      />

      <div className="text-pure absolute bottom-5 left-6 text-xs font-semibold tracking-wide uppercase">
        (C) 2025 FlameAcademy
      </div>

      <div>
        <h1 className="h2 text-pure text-6xl">
          <span className="font-normal">Join the</span>
          <br />
          Special <br />
          Forces.
        </h1>

        <Link to="#bewerben" className="btn mt-3">
          Jetzt bewerben
        </Link>
      </div>

      <div className="text-pure absolute bottom-5 left-6 text-xs font-semibold tracking-wide uppercase">
        Get real.
        <br />
        Go deep.
        <br />
        Be dangerous.
      </div>

      <div className="absolute right-6 bottom-6">
        <span className="text-pure text-xs tracking-wide uppercase">
          Eine Schule des
        </span>
        <Img img={INDEX_IMG_DATA.logoGh} className="w-36" />
      </div>
    </section>
  );
}
