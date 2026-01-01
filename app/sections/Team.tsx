import { TeamCardItem } from '~/components/TeamItem';
import { INDEX_IMG_DATA } from '~/data/images';
import type { ImgDto } from '~/types/ImgDto';

export default function () {
  return (
    <section className="bg-day pt-section pb-12">
      <div className="content">
        <h2 className="h2 text-olive">Das Team</h2>
        <div className="gap-content mt-8 grid grid-cols-2 md:mt-12 lg:grid-cols-3">
          {TEAM_DATA.map((member) => (
            <TeamCardItem key={member.name} member={member} />
          ))}
        </div>
        <p className="text-incense-500 mt-6 text-center text-sm lg:mt-16">
          Klicke auf ein Bild, um mehr über die Person zu erfahren.
        </p>
      </div>
    </section>
  );
}

export const TEAM_DATA: TeamItemDto[] = [
  {
    img: INDEX_IMG_DATA.wireframe,
    name: 'Conny Bühler',
    position: 'Schulleitung',
    bio: `Conny ist unsere FlameAcademy-Mama. Allerdings eine solche, die dich nicht nur ermutigt und bestärkt, sondern auch herausfordert und zum passenden Zeitpunkt liebevoll-bestimmt aus dem gemütlichen Nest schubst.

Geboren und aufgewachsen in Südbaden lebt sie nun bereits seit über 30 Jahren mit ihrem Mann im Raum Augsburg, hat drei erwachsene Kinder und zwei Enkel. Bevor sie 2016 ins Gebetshaus kam, war sie Physiotherapeutin und ist ausgebildete Seelsorgerin und Persönlichkeitsberaterin. 

Conny liebt es, wie Gott innerhalb der 10 Monate tiefgründig Menschen verändert und freisetzt, aber ebenso die Entwicklung der Identität und Persönlichkeit jedes Einzelnen. 

Ihre Freizeit verbringt sie am liebsten mit ihrem Mann bei gutem Essen, sehr gutem Wein und noch besseren Gesprächen zu Hause. So richtig entspannen kann sie in der Natur, beim Lesen und beim Lachen, auch wenn sie meint, selbst keine gute Witze-Erzählerin zu sein. Das hindert sie aber nicht daran, sich immer wieder an dem ein oder anderen Schenkelklopfer zu versuchen. 

Die FlameAcademy wird von ihr gemeinsam mit Silas geleitet, außerdem ist sie eine unserer Hauptsprecher.`,
  },
];

TEAM_DATA.push({ ...TEAM_DATA[0] });
TEAM_DATA[1].name = 'Silas Rink';

export type TeamItemDto = {
  img: ImgDto;
  name: string;
  position: string;
  bio: string;
};
