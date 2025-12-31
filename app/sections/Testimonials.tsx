import { CloseBtn } from '~/components/CloseBtn';

export default function () {
  return (
    <section className="py-section bg-pray text-pure">
      <div className="content">
        <h2 className="h2 text-day max-w-md">Stimmen von Absol&shy;venten</h2>

        {/* <!-- PREVIEW --> */}
        <button
          type="button"
          className="js--testimonials__trigger md:gap-content mt-10 grid cursor-pointer grid-cols-1 gap-10 text-left md:grid-cols-2"
        >
          {/* <!-- item --> */}
          <div>
            <div className="flex items-center gap-4">
              <img src="/img/wireframe-img.svg" className="w-32 object-cover" />
              <div>
                <div className="h4">— Michael Beering</div>
                <div className="text-pure/80 max-w-sm">
                  Musiker, Macher, hat beim Wasserrutschenrennen gegen Silas
                  gewonnen.
                </div>
              </div>
            </div>
            <p className="mt-6">
              Die intensive Gemeinschaft und die vielen Stunden in Gottes
              Gegenwart haben mein Leben verändert. Es ist unglaublich wieviel
              Neues ich über mich selbst und über Gott erfahren habe. Die
              FlameAcademy hat mich in vielerlei Hinsicht durchgeschüttelt - und
              ich bin leichter und freier rausgegangen.
            </p>
          </div>

          {/* <!-- item --> */}
          <div>
            <div className="flex items-center gap-4">
              <img src="/img/wireframe-img.svg" className="w-32 object-cover" />
              <div>
                <div className="h4">— Michael Beering</div>
                <div className="text-pure/80">
                  Musiker, Macher, hat beim Wasserrutschenrennen gegen Silas
                  gewonnen.
                </div>
              </div>
            </div>
            <p className="mt-6">
              Gott begegnet allen außer mir - dachte ich zumindest. Mit einer
              großen Sehnsucht IHM zu begegnen habe ich die FlameAcademy
              gestartet. Und Gott ist mir begegnet. Ganz anders als erwartet,
              aber es hat mein Leben verändert.
            </p>
          </div>
        </button>

        <button
          type="button"
          className="btn btn_secondary text-pure js--testimonials__trigger mx-auto mt-8 block w-full max-w-lg md:mt-16"
        >
          Mehr Stimmen
        </button>
      </div>

      {/* <!-- OVERLAY TODO: --> */}
      <div className="js--testimonials__overlay overlay bg-pure text-incense-900 fixed top-1/2 left-1/2 z-30 h-full w-full max-w-3xl -translate-1/2 overflow-y-auto shadow-2xl sm:h-9/10 sm:w-9/10">
        {/* <!-- close --> */}
        {/* TODO: <CloseBtn onClick={() => CLOSE} /> */}

        <div className="content py-8">
          <h2 className="h2 text-pray max-w-lg">
            Stimmen von Absol&shy;venten
          </h2>

          {/* <!-- nav / preview --> */}
          <div className="bg-pure sticky top-0 mt-10 mb-4 w-full py-4">
            <div className="mx-auto flex max-w-xl">
              <a
                href="#stimme-michael-beering"
                className="hover:bg-incense-900/5 group clickable active:bg-pure/40 flex items-center p-1 font-semibold transition-colors"
              >
                <img
                  src="/img/wireframe-img.svg"
                  className="aspect-square w-8"
                />
                <div className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap transition-all group-hover:max-w-40">
                  <span className="mx-2">Michael Beering</span>
                </div>
              </a>
              <a
                href="#stimme-michael-beering-2"
                className="hover:bg-incense-900/5 group clickable active:bg-pure/40 flex items-center p-1 font-semibold transition-colors"
              >
                <img
                  src="/img/wireframe-img.svg"
                  className="aspect-square w-8"
                />
                <div className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap transition-all group-hover:max-w-40">
                  <span className="mx-2">Michael Beering</span>
                </div>
              </a>
              <a
                href="#"
                className="hover:bg-incense-900/5 group clickable active:bg-pure/40 flex items-center p-1 font-semibold transition-colors"
              >
                <img
                  src="/img/wireframe-img.svg"
                  className="aspect-square w-8"
                />
                <div className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap transition-all group-hover:max-w-40">
                  <span className="mx-2">Michael Beering</span>
                </div>
              </a>
            </div>
          </div>

          {/* <!-- items --> */}
          <div className="mx-auto max-w-xl space-y-16">
            {/* <!-- item --> */}
            <div id="stimme-michael-beering">
              <div className="flex items-center gap-4">
                <img
                  src="/img/wireframe-img.svg"
                  className="w-32 object-cover"
                />
                <div>
                  <div className="h4">— Michael Beering</div>
                  <div className="text-incense-500 max-w-xl">
                    Musiker, Macher, hat beim Wasserrutschenrennen gegen Silas
                    gewonnen.
                  </div>
                </div>
              </div>
              <p className="mt-6">
                Ich weiß nicht, wie ich ohne die Flame Leben konnte. Forem ipsum
                dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
                fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit sed risus.
              </p>
            </div>

            {/* <!-- item --> */}
            <div id="stimme-michael-beering-2">
              <div className="flex items-center gap-4">
                <img
                  src="/img/wireframe-img.svg"
                  className="w-32 object-cover"
                />
                <div>
                  <div className="h4">— Michael Beering</div>
                  <div className="text-pure/80">
                    Musiker, Macher, hat beim Wasserrutschenrennen gegen Silas
                    gewonnen.
                  </div>
                </div>
              </div>
              <p className="mt-6">
                Ich weiß nicht, wie ich ohne die Flame Leben konnte. Forem ipsum
                dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
                fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit sed risus. Ich weiß nicht, wie ich ohne die Flame
                Leben konnte. Forem ipsum dolor sit amet, consectetur adipiscing
                elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Ich weiß nicht, wie
                ich ohne die Flame Leben konnte. Forem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                est a, mattis tellus. Sed dignissim, metus nec fringilla
                accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                sed risus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
