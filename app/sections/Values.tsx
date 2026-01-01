import { Img } from '~/components/Img';
import { INDEX_IMG_DATA } from '~/data/images';

export default function () {
  return (
    <section>
      <div className="py-section bg-incense-900 sm:py-16 sm:text-center">
        <h2 className="h2 text-pure content">Unsere Werte</h2>
      </div>
      <ul className="grid sm:grid-cols-2 xl:grid-cols-3">
        {/* <!-- get-real text --> */}
        <li className="bg-olive text-day px-content flex flex-col justify-center py-12">
          <h3 className="h3">Get real.</h3>
          <p className="mt-1">
            Es wird Zeit, religiöse Masken abzulegen. Genug von oberflächlichem
            Bla-Bla und so tun, als ob wir alles im Griff hätten oder das Leben
            immer einfach wäre. Hier begegnest du Menschen, die echt sind, keine
            Angst vor Verletzlichkeit haben und persönlich wachsen wollen.
          </p>
        </li>
        {/* <!-- go-deep img --> */}
        <li className="bg-olive sm:bg-day xs:pb-12 relative min-h-80 sm:p-0">
          <Img
            img={INDEX_IMG_DATA.hannesPraying}
            className="mx-auto aspect-square w-full max-w-sm sm:absolute sm:inset-0 sm:h-full sm:max-w-none sm:object-cover xl:relative 2xl:max-h-100"
          />
        </li>
        {/* <!-- go-deep text --> */}
        <li className="bg-day text-pray px-content flex flex-col justify-center py-12 sm:order-1 xl:order-2">
          <h3 className="h3">Go deep.</h3>
          <p className="mt-1">
            Du wirst dieses Gefühl nicht los, dass da noch mehr sein muss? Wir
            auch nicht. Hier hast du Zeit und Raum, wirklich tief zu gehen mit
            Jesus. In 20h Mentoring, 90h Jüngerschaftsgruppe, 200h Teachings und
            800 h Gebetsraum wirst du deinem Gott begegnen wie niemals zuvor.
          </p>
        </li>
        {/* <!-- get-real img --> */}
        <li className="bg-day sm:bg-olive flex items-center pb-12 sm:pt-2 xl:order-1">
          <figure className="relative mx-auto w-full max-w-xs sm:mx-12">
            <Img
              img={INDEX_IMG_DATA.orangeJacketGirl}
              className="aspect-square w-full"
            />
            <p className="font-display text-pray sm:text-pure absolute -top-10 -right-8 text-6xl">
              Genug
              <br />
              Bla-Bla.
            </p>
          </figure>
        </li>
        {/* <!-- get-dangerous text --> */}
        <li className="bg-pure text-olive px-content flex flex-col justify-center py-12 sm:order-2 xl:order-0">
          <h3 className="h3">Be dangerous.</h3>
          <p className="mt-1">
            Um dein Leben herrscht ein andauernder geistlicher Kampf. Und du
            bist berufen, nicht nur überforderter Zuschauer zu sein, sondern
            aktiv Verantwortung zu übernehmen und an Jesu Seite zu kämpfen. Hört
            sich komisch an für dich? Hier lernst du auf natürlich
            übernatürliche Weise, diesen Weg zu gehen und mit ihm den Sieg zu
            erringen.
          </p>
        </li>
        {/* <!-- get-dangerous img --> */}
        <li className="xs:pb-12 relative min-h-80 sm:order-2 sm:p-0">
          <Img
            img={INDEX_IMG_DATA.ghStructure3}
            className="bg-incense-900 mx-auto aspect-square w-full max-w-sm sm:absolute sm:inset-0 sm:h-full sm:max-w-none sm:object-cover xl:relative 2xl:max-h-110"
          />
        </li>
      </ul>
    </section>
  );
}
