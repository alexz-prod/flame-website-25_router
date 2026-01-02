import { Link } from 'react-router';

export default function () {
  return (
    <section className="content flex h-dvh flex-col items-center justify-center">
      <img
        src="/img/wireframe-img.svg"
        alt="TODO:"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <h1 className="h2 text-center">
        <span className="font-normal">Join the</span>
        <br />
        Special Forces.
      </h1>
      <Link to="#bewerben" className="btn mt-3">
        Jetzt bewerben
      </Link>
    </section>
  );
}
