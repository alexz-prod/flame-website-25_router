import { TeamCardItem } from '~/components/TeamItem';
import { INDEX_IMG_DATA, TEAM_IMG_DATA } from '~/data/images';
import type { ImgDto } from '~/types/ImgDto';

export default function () {
  return (
    <section id="team" className="pt-section bg-day pb-12">
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
    name: 'Conny Bühler',
    img: TEAM_IMG_DATA.connyBuehler,
    position: 'Schulleitung',
    bio: `Conny ist unsere FlameAcademy-Mama. Allerdings eine solche, die dich nicht nur ermutigt und bestärkt, sondern auch herausfordert und zum passenden Zeitpunkt liebevoll-bestimmt aus dem gemütlichen Nest schubst.

Geboren und aufgewachsen in Südbaden lebt sie nun bereits seit über 30 Jahren mit ihrem Mann im Raum Augsburg, hat drei erwachsene Kinder und zwei Enkel. Bevor sie 2016 ins Gebetshaus kam, war sie Physiotherapeutin und ist ausgebildete Seelsorgerin und Persönlichkeitsberaterin. 

Conny liebt es, wie Gott innerhalb der 10 Monate tiefgründig Menschen verändert und freisetzt, aber ebenso die Entwicklung der Identität und Persönlichkeit jedes Einzelnen. 

Ihre Freizeit verbringt sie am liebsten mit ihrem Mann bei gutem Essen, sehr gutem Wein und noch besseren Gesprächen zu Hause. So richtig entspannen kann sie in der Natur, beim Lesen und beim Lachen, auch wenn sie meint, selbst keine gute Witze-Erzählerin zu sein. Das hindert sie aber nicht daran, sich immer wieder an dem ein oder anderen Schenkelklopfer zu versuchen. 

Die FlameAcademy wird von ihr gemeinsam mit Silas geleitet, außerdem ist sie eine unserer Hauptsprecher.`,
  },
  {
    name: 'Silas Rink',
    img: TEAM_IMG_DATA.silasRink,
    position: 'Schulleitung',
    bio: `Silas kommt - klar - aus dem Siegerland, hat einen älteren Bruder, eine kleine Schwester sowie mittlerweile auch die selbstverständlich allerschönste Ehefrau und die zwei selbstverständlich allersüßesten Kids. 

Silas nimmt die meisten Sachen mit Humor und bringt gerne Leichtigkeit rein, ohne dabei die geistliche Tiefe zu überfliegen. Was ihn an der FlameAcademy so begeistert, ist, wie tiefgründig Gott den Schülern in den 10 Monaten begegnet und sie dadurch verändert. 

Außerdem ist Silas ein Killer am Badmintonschläger und steht auf extrem „männliches“ Zeug, wie zum Beispiel im Winter unter freiem Himmel auf Bergen schlafen und vor allem auf Äxte. Für einen Kuchen ist er allerdings auch immer zu haben und damit durchaus bestechlich. 

Gemeinsam mit Conny leitet er die FlameAcademy und ist als Sprecher und Mentor unterwegs.`,
  },
  {
    name: 'Tobi Braun',
    img: TEAM_IMG_DATA.tobiBraun,
    position: 'Teachings & Mentoring',
    bio: `Tobi wuchs im Erzgebirge zwischen Räuchermännern und Schwibbögen auf. Vermutlich war Drechsler deshalb auch sein Wunschberuf als Kind. Stattdessen wurde er später jedoch Sozialarbeiter und ist heute mit der selbstverständlich allerschönsten Ehefrau verheiratet und hat die zwei selbstverständlich allersüßesten Kids. 

Tobi ist ein humorvoller und beziehungsorientierter Ermutiger. Er liebt gesellige Gemeinschaft und bringt gerne Leichtigkeit in die Gruppe. An der FlameAcademy begeistert ihn vor allem die vorgelebte und gelehrte ganzheitliche Spiritualität - Jesus nachzufolgen mit „Haut und Haaren“, ihm mit Körper, Seele und Geist zu begegnen. 

Tobi ist außerdem ein sehr guter Gitarrist, spielt und schaut gerne Fußball und liebt lange, gemütliche Abende mit Freunden. Auf langen Autofahrten läuft bei ihm ansonsten auch schon mal eine Folge der Drei ???. 

In der FlameAcademy ist er gemeinsam mit Rebecca für den Gebetsleiter-Track verantwortlich und fungiert als Mentor.`,
  },
  {
    name: 'Rebecca Diehl',
    img: TEAM_IMG_DATA.rebeccaDiehl,
    position: 'Leiterin Gebetsleiter-Track',
    bio: `Rebecca kommt aus Südhessen, wo sie mit ihrem jüngeren Bruder aufgewachsen ist. Dort hat sie dann auch evangelische Theologie studiert. Und wenn wir sagen studiert, dann meinen wir das auch. Über ihr fundiertes Bibelwissen hinaus hat sie aber ebenso große Leidenschaft für das Prophetische. 

Was Rebecca an der FlameAcademy fasziniert, ist wie Gott in nur 10 Monaten ein ganzes Leben prägen kann. 

Außerdem liebt sie es zu lesen, Freunde zu treffen und auch zu puzzeln. Backen zählt sie ebenfalls zu ihren Hobbys, ihre Zimtschnecken sind berühmt-berüchtigt! Und was eigentlich keiner wissen darf: Sie hat immer noch eine Schwäche für Hörspiele der Drei ???. 

Sie trainiert bei uns gemeinsam mit Tobi die Schüler im Gebetsleiter-Track und ist Mentorin. `,
  },
  {
    name: 'Lisa Hartmann',
    img: TEAM_IMG_DATA.lisaHartmann,
    position: 'Mitarbeiterin Gebetsleiter-Track',
    bio: `Lisa ist ausgebildete Europa-Sekretärin, waschechte Hamburgerin und dort mit ihren drei Geschwistern aufgewachsen. Viel wichtiger aber: Im Gebetshaus ist sie als prophetische Fürbitterin und taffe Gebetstrainerin im Einsatz. Man könnte sagen „nur“ 1,60m groß, aber ein geistlicher Riese! 

Sie liebt es zu sehen, wie Gott in der FlameAcademy Menschen verändert und sie über ihre eigenen Erwartungen hinauswachsen lässt. 

Wenn Lisa abseits des Gebetshauses sich nicht gerade mit Freunden trifft, malt oder etwas liest, ist sie wohl eine der letzten ihrer Altersgruppe, die noch Wendy-Hörspiele hört. Und wohl eine der wenigsten Großstädterinnen, die eine Kuh mit der Hand melken kann. 

In der FlameAcademy ist sie vor allem bei Teachings und im Mentoring am Start. `,
  },
  {
    name: 'Michael Beering',
    img: TEAM_IMG_DATA.michaelBeering,
    position: 'Leiter Lobpreis-Track',
    bio: `Michi kommt aus Bad Laer in der Nähe von Osnabrück, wuchs dort mit 4 Geschwistern auf und absolvierte ein Duales Studium in der Pflege. Hier im Gebetshaus ist er Teil unserer Special-Forces der Nachtschicht. 

Michi ist von der FlameAcademy begeistert, weil sie das Dynamit ist, welches den Weg aus der Mittelmäßigkeit freisprengt! Ein Ort, an dem man gewohnte Muster und alte Lasten hinter sich lassen und sich selbst und Gott ganz neu kennenlernen kann. 

Außerhalb des Gebetshauses geht er gern mit seinen Jungs in die Berge, treibt Sport oder entspannt mit seiner selbstverständlich allerschönsten Frau und seinen zwei selbstverständlich allersüßesten Kids am Sabbat. Ist eine Tüte Chips erstmal offen, muss Michi sie auch vernichten und nachdem er seinen Kaffee leer getrunken hat, trinkt er aus derselben Tasse gnadenlos Wasser…Ja, auch bei Cappuccino. 

Die Schüler des Lobpreis-Tracks kommen bei uns in den Genuss seiner Leitung, genauso wie die Mentees, die von ihm 

begleitet werden.`,
  },
];

export type TeamItemDto = {
  img: ImgDto;
  name: string;
  position: string;
  bio: string;
};
