import { Img } from '~/components/Img';
import { INDEX_IMG_DATA } from '~/data/images';

export default function () {
  return (
    <section id="gebetshaus" className="py-section bg-olive text-day">
      <div className="content">
        <h2 className="h2 md:max-w-[80%] lg:max-w-2/3 xl:max-w-[45%]">
          Werde Teil des Gebetshauses
        </h2>

        <div className="mt-16 grid gap-12 sm:mt-16 lg:mt-24 lg:grid-cols-2">
          <div className="relative lg:mt-20">
            <Img
              img={INDEX_IMG_DATA.oratorium}
              className="ml-auto aspect-video w-full object-cover lg:aspect-square lg:max-w-[80%]"
            />
            <div className="pl-content -mt-2 max-w-4xl lg:absolute lg:-top-19 lg:left-0 lg:max-w-64 lg:p-0">
              <h3 className="h3">Wir beten 24/7 seit 2011</h3>
              <p className="mt-1">
                Werde Teil eines verrückten Haufens von verliebten
                Fürbittkämpfern und vollmächtigen Anbetern und lerne diesen
                geistlichen Hotspot kennen.
              </p>
            </div>
          </div>

          <div className="relative lg:-mt-16">
            <Img
              img={INDEX_IMG_DATA.mehrAtmo}
              className="ml-auto aspect-video w-full object-cover lg:aspect-square lg:max-w-[80%]"
            />
            <div className="pl-content -mt-2 max-w-4xl lg:absolute lg:-bottom-10 lg:left-0 lg:max-w-76 lg:p-0">
              <h3 className="h3">
                Sei bei den größten Events im deutsch&shy;sprachigen Raum mit
                dabei
              </h3>
              <p className="mt-1">
                Packe praktisch mit an und arbeite Seite an Seite mit
                GebetshausMissionaren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
