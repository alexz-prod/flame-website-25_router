import { Link } from 'react-router';

export default function () {
  return (
    <footer className="bg-incense-900 text-pure pt-12 pb-8">
      <div className="content flex flex-col items-center">
        <Link to="/#top">
          <img src="/logo/logo_word-pray.svg" className="max-w-xs" />
        </Link>
        <div className="flex gap-2">
          <a
            className="clickable hover:bg-pure/10 active:bg-pure/30 rounded-full p-3"
            href="https://www.instagram.com/flameacademy_gebetshausschule/"
          >
            <img src="/icon/simple-icons_instagram.svg" className="w-5" />
          </a>
          <a
            className="clickable hover:bg-pure/10 active:bg-pure/30 rounded-full p-3"
            href="https://www.youtube.com/user/prayertube"
          >
            <img src="/icon/simple-icons_youtube.svg" className="w-5" />
          </a>
        </div>
        <div className="mt-12 flex w-full justify-end gap-4">
          <Link className="mr-auto hover:underline sm:mr-0" to="impressum">
            Impressum
          </Link>
          <Link className="hover:underline" to="datenschutz">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
