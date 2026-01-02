import { Img } from '~/components/Img';
import { INDEX_IMG_DATA } from '~/data/images';

export default function () {
  return (
    <section className="py-section bg-day">
      <div className="content">
        <h3 className="h2 text-olive">Was heißt das konkret?</h3>
        <div className="gap-content mt-8 grid grid-cols-2 md:mt-16 lg:grid-cols-3">
          {/* img hartl */}
          <div className="xs:row-end-3 relative -col-start-1 -col-end-2 row-start-1 sm:row-end-4 xl:row-end-5">
            <Img
              img={INDEX_IMG_DATA.hartlTeaching}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* info */}
          {INFO_DATA.map((i) => (
            <div key={i.title} className="relative z-10">
              <div className="text-pray h5">{i.preTitle}</div>
              <h4
                className="h4"
                dangerouslySetInnerHTML={{ __html: i.title }}
              />
              <p>{i.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const INFO_DATA: InfoDto[] = [
  {
    preTitle: 'Das Zentrum',
    title: '600h Gebetsraum',
    content:
      'Du tauchst ein in diesen einzigartigen Ort des Gebets und durchläufst alle Schichten, inklusive der Nacht.',
  },
  {
    preTitle: 'Input',
    title: '300h Teachings',
    content:
      'Du lernst von einigen der besten Teacher im deutschsprachigen Raum – Johannes Hartl, Veronika Lohmer, Joy Fackler, Elias Glaeser, Tini Brüning und viele mehr.',
  },
  {
    preTitle: 'Jüngerschaft – Part I',
    title: '15h Mentoring',
    content:
      'Du wirst von einem erfahrenen Nachfolger Jesus in 1:1-Gesprächen begleitet.',
  },
  {
    preTitle: 'Jüngerschaft – Part II',
    title: '72h Jünger&shy;schafts&shy;gruppe',
    content:
      'Du triffst dich 1x pro Woche mit 2–4 Weggefährten für Austausch & Gebet.',
  },
  {
    preTitle: 'Gemeinschaft – Part I',
    title: 'Schicht&shy;gruppe',
    content:
      'Du bist die ganze Zeit über mit einem Viertel des Jahrgangs gemeinsam im Gebetsraum.',
  },
  {
    preTitle: 'Gemeinschaft – Part II',
    title: 'Gemein&shy;schafts&shy;zeit',
    content:
      'Alle zwei Wochen kommt der gesamte Jahrgang für Essen, Austausch und Spiele zusammen.',
  },
  {
    preTitle: 'Training',
    title: '100h Tracks',
    content:
      'Lass dich ausbilden zum Lobpreiser oder Gebetsleiter. Mit packenden Teachings und praktischen Einheiten.',
  },
];

type InfoDto = {
  preTitle: string;
  title: string;
  content: string;
};
