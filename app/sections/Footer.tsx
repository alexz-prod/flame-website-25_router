export default function () {
  return (
    <footer className="pt-section bg-incense-900 text-pure pb-6">
      <div className="content flex flex-col items-center gap-4">
        <img src="/img/wireframe-img.svg" className="max-w-xs object-cover" />
        <div className="flex gap-4">
          <img src="/img/wireframe-img.svg" className="w-8 object-cover" />
          <img src="/img/wireframe-img.svg" className="w-8 object-cover" />
        </div>
        <div className="mt-6 flex w-full justify-end gap-4">
          <a className="hover:underline" href="#">
            Impressum
          </a>
          <a className="hover:underline" href="#">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
