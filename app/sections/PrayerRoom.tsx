import { Img } from '~/components/Img';
import { INDEX_IMG_DATA } from '~/data/images';

export default function () {
  return (
    <section
      id="gebetsraum"
      className="py-section text-day bg-incense-900 lg:flex"
    >
      <div className="min-w-[60%]">
        <div className="content flex justify-end">
          <h2 className="h2 relative z-10 md:max-w-md lg:-mr-88">
            Unser Herz&shy;stück: Der Gebets&shy;raum
          </h2>
        </div>
        <div className="relative">
          <Img
            img={INDEX_IMG_DATA.prayerRoom}
            className="-mt-6 aspect-video max-h-160 min-w-dvw object-cover md:aspect-4/3 md:w-3/4 md:min-w-auto lg:w-[80%]"
          />
          <Img
            img={INDEX_IMG_DATA.manPraying}
            className="mr-content -mt-20 ml-auto aspect-square w-2/3 max-w-md object-cover sm:-mt-60 md:absolute md:top-1/2 md:right-0 md:mt-0 md:w-80 md:-translate-y-[45%] lg:mr-0 lg:w-64"
          />
        </div>
      </div>
      <p className="gap-content content mt-10 sm:columns-2 lg:mt-48 lg:columns-1">
        Bei uns dreht sich alles um Gott, deshalb beten wir auch so viel. Der
        Gebetsraum ist unser unangefochtenes Herzstück. Er ist dein Ort der
        Begegnung mit Gott und während der Schuljahres wie ein Gewächshaus für
        all das Gute, das er durch Teachings, Training, Gemeinschaft und
        Mentoring in dein Herz pflanzen wird!
        <br />
        <br />
        Hier wird seit 2011 rund um die Uhr gebetet und Gott unaufhörlich mit
        Lobpreis und Fürbitte gedient. Auch du wirst während der FlameAcademy
        den größten Teil deiner Zeit hier verbringen und dabei alle Schichten
        inkl. der Nachtschicht durchlaufen und dabei Seite an Seite mit
        GebetshausMissionaren im Gebet stehen.
      </p>
    </section>
  );
}
