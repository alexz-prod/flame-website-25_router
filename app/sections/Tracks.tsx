import { type ReactNode } from 'react';
import { TrackItem } from '~/components/TrackItem';
import { cx } from '~/domain/utils/cx';

export default function () {
  return (
    <section className="py-section bg-pray text-day">
      <div className="content">
        <div className="max-w-2xl">
          <h2 className="h2">Tracks — Werde trainiert in Lobpreis & Gebet</h2>
          <p>
            Kurzer Satz: Was sind die Tracks? → Du kannst einen von zwei Tracks
            wählen
          </p>
        </div>

        <div className="mt-content gap-content grid sm:mt-16 sm:grid-cols-2">
          {TRACK_DATA.map((item, i) => (
            <TrackItem
              key={i}
              item={item}
              reversed={!!(i % 2)}
              className={cx({ 'sm:mt-12': !(i % 2) })}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const TRACK_DATA: TrackItemDto[] = [
  {
    name: 'Lobpreis-Track',
    img: '/img/wireframe-img.svg',
    content: (
      <>
        <p className="mt-4 md:mt-0">
          Hier lernst du beides: Skills & Know-How als Lobpreiser und wie du das
          Herz eines leidenschaftlichen Anbeters entwickelst.
        </p>
        <h4 className="h4 mt-8 mb-4">Theorie</h4>
        <p>
          Lerne von inspirierenden Lobpreisleitern - Michael Beering, Veronika
          Lohmer, Joy Fackler, Andi Ziller und vielen mehr.
        </p>
        <h4 className="h4 mt-8 mb-4">Praxis</h4>
        <ul className="space-y-4">
          <li>
            <h5 className="h5">Im Gebetsraum</h5>
            Werde Teil von bestehenden Teams oder leite eigene Sets.
          </li>
          <li>
            <h5 className="h5">Mit deiner Track-Gruppe</h5>
            Arrangement, Improvisation, Songwriting, Gehörbildung & Co.
          </li>
          <li>
            <h5 className="h5">Gesangs- / Instrumentalunterricht</h5>
            1x die Woche individuelles Training von ausgebildeten Profis
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Gebetsleiter-Track',
    img: '/img/wireframe-img.svg',
    content: (
      <>
        <p className="mt-4">
          Lerne, wie man andere so in Fürbitte anleitet, dass es nicht nur
          vollmächtig ist, sondern auch Freude und Lust auf mehr macht.
        </p>
        <h4 className="h4 mt-8 mb-4">Theorie</h4>
        <p>
          Entdecke die Schätze von erfahrenen Betern, u.a. zu Gottes Stimme
          hören, theologischen Grundlagen, prophetisches Hören & Sehen oder
          strategischer Fürbitte.
        </p>
        <h4 className="h4 mt-8 mb-4">Praxis</h4>
        <ul className="space-y-4">
          <li>
            <h5 className="h5">Im Gebetsraum</h5>
            Werde Teil von bestehenden Teams und leite eigene Gebetszeiten.
          </li>
          <li>
            <h5 className="h5">Mit deiner Track-Gruppe</h5>
            Wende das Gehörte in einer Lerngruppe praktisch an und probiere dich
            aus.
          </li>
          <li>
            <h5 className="h5">Einsätze und Ministries</h5>
            Diene Menschen auf Gebetshausveranstaltungen im Gebet und
            unterstütze Gemeinden in der Fürbitte.
          </li>
        </ul>
      </>
    ),
  },
];

export interface TrackItemDto {
  img: string;
  name: string;
  content: ReactNode;
}
