import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Img } from '~/components/Img';
import { INDEX_IMG_DATA } from '~/data/images';

export default function () {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.play();
  }, [videoRef.current]);

  return (
    <section className="content bg-olive flex h-dvh flex-col items-center justify-center">
      <video
        src="/video/gebetshaus-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute top-1/2 left-1/2 h-[calc(100%-6rem)] w-[calc(100%-6rem)] -translate-1/2 object-cover"
        ref={videoRef}
      />

      <Img
        img={INDEX_IMG_DATA.logoWordPure}
        className="absolute top-4 left-4 w-48"
      />

      <div className="relative">
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

      <a
        className="absolute right-6 bottom-6"
        href="https://gebetshaus.org"
        target="_blank"
      >
        <span className="text-pure text-xs tracking-wide uppercase">
          Eine Schule des
        </span>
        <Img img={INDEX_IMG_DATA.logoGh} className="w-36" />
      </a>
    </section>
  );
}
