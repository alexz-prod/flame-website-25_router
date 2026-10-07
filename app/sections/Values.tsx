import { Img } from '~/components/Img';
import { INDEX_IMG_DATA } from '~/data/images';

export default function () {
  return (
    <section id="werte">
      <div className="py-section bg-incense-900 sm:py-16 sm:text-center">
        <h2 className="h2 text-pure content">Unsere Werte</h2>
      </div>
      <ul className="grid sm:grid-cols-2 xl:grid-cols-3">
        {/* <!-- get-real text --> */}
        <li className="bg-olive text-day px-content flex flex-col justify-center py-12">
          <h3 className="h3">Get real.</h3>
          <p className="mt-1">
            Es ist Zeit, aufzuhören, so zu tun, als hätten wir alles im Griff
            und das Leben wäre immer einfach. Hier ist Raum, echt zu sein - vor
            Gott und voreinander. Hier musst du keine Fassade aufrechterhalten.
            Du begegnest Menschen, die sich ehrlich zeigen, keine Angst vor
            Verletzlichkeit haben und den Mut haben, persönlich zu wachsen.
          </p>
        </li>
        {/* <!-- go-deep img --> */}
        <li className="bg-olive sm:bg-day xs:pb-12 relative min-h-80 sm:p-0">
          <Img
            img={INDEX_IMG_DATA.hannesPraying}
            className="xs:max-w-sm mx-auto aspect-square h-full w-full object-cover sm:max-w-none"
          />
        </li>
        {/* <!-- go-deep text --> */}
        <li className="bg-day text-pray px-content flex flex-col justify-center py-12 sm:order-1 sm:aspect-square xl:order-2">
          <h3 className="h3">Go deep.</h3>
          <p className="mt-1">
            Hast du genug davon, vor dir selbst und Gott wegzulaufen? Wirkliche
            Veränderung kommt aus der Tiefe. Deshalb laden wir Dich zu einem
            intensiven Training in Liebesfähigkeit ein - in der Beziehung zu
            Gott, Dir selbst und Deinen Mitmenschen.
          </p>
        </li>
        {/* <!-- get-real img --> */}
        <li className="bg-day sm:bg-olive flex items-center justify-center pb-12 sm:p-0 xl:order-1">
          <figure className="relative mx-auto aspect-square w-full max-w-xs sm:mx-12">
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
        {/* <!-- be-dangerous text --> */}
        <li className="bg-pure text-olive px-content flex flex-col justify-center py-12 sm:order-2 xl:order-0">
          <h3 className="h3">Be dangerous.</h3>
          <p className="mt-1">
            In einer Welt, die immer beziehungsärmer und dunkler wirkt, bist Du
            nicht dazu berufen, überforderter Zuschauer zu sein, sondern durch
            Dein Sein und Dein Tun ein reifer Hoffnungsträger in der
            Gesellschaft zu werden. Wir werden Dich in Deiner
            Beziehungsfähigkeit stärken und Dich an die Hand nehmen, mit
            Lobpreis und Gebet inmitten der Dunkelheit einfach das Licht
            anzumachen.
          </p>
        </li>
        {/* <!-- be-dangerous img --> */}
        <li className="xs:pb-12 relative min-h-80 sm:order-2 sm:p-0">
          <Img
            img={INDEX_IMG_DATA.ghStructure3}
            className="bg-incense-900 xs:max-w-sm mx-auto aspect-square h-full w-full object-cover sm:max-w-none"
          />
        </li>
      </ul>
    </section>
  );
}
