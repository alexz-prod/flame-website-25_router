import { Img } from '~/components/Img';
import { INDEX_IMG_DATA } from '~/data/images';

export default function () {
  return (
    <section className="py-section bg-day">
      <div className="content">
        <h3 className="h2 text-olive">Was heißt das konkret?</h3>
        <div className="gap-content mt-8 grid grid-cols-2 md:mt-16 lg:grid-cols-3">
          {/* <!-- img hartl --> */}
          <div className="relative -col-start-1 -col-end-2 row-start-1 sm:row-end-3">
            <Img
              img={INDEX_IMG_DATA.hartlTeaching}
              className="h-full w-full object-cover"
            />
          </div>
          {/* <!-- gebetsraum --> */}
          <div className="relative z-10">
            <div className="text-pray h5">Das Zentrum</div>
            <h4 className="h4">800h Gebetsraum</h4>
            <p>
              Du tauchst ein in diesen einzigartigen Ort des Gebets und
              durchläufst alle Schichten, inklusive der Nacht.
            </p>
          </div>
          {/* <!-- teachings --> */}
          <div className="relative z-10">
            <div className="text-pray h5">Input</div>
            <h4 className="h4">200h Teachings</h4>
            <p>
              Du lernst 2x die Woche von einigen der besten Teacher im
              deutschsprachigen Raum - Johannes Hartl, Joy Fackler, Elias
              Glaeser, Tini Brüning und viele mehr.
            </p>
          </div>
          {/* <!-- mentoring --> */}
          <div className="relative z-10">
            <div className="text-pray h5">Jüngerschaft - Part I</div>
            <h4 className="h4">15h Mentoring</h4>
            <p>
              Du wirst von einem erfahrenen Nachfolger Jesus in 1:1-Gesprächen
              begleitet.
            </p>
          </div>
          {/* <!-- jüngerschaftsgruppe --> */}
          <div className="relative z-10">
            <div className="text-pray h5">Jüngerschaft - Part II</div>
            <h4 className="h4">72h Jünger&shy;schafts&shy;gruppe</h4>
            <p>
              Du triffst dich 1x pro Wochen mit 2-4 Weggefährten für Austausch &
              Gebet.
            </p>
          </div>
          {/* <!-- schichtgruppe --> */}
          <div className="relative z-10">
            <div className="text-pray h5">Gemeinschaft - Part I</div>
            <h4 className="h4">Schicht&shy;gruppe</h4>
            <p>
              Du bist die ganze Zeit über mit einem Viertel des Jahrgangs
              zusammen im Gebetsraum. Du tauchst ein in diesen einzigartigen Ort
              des Gebets und durchläufst alle Schichten, inklusive der Nacht.
            </p>
          </div>
          {/* <!-- gemeinschaftszeit --> */}
          <div className="relative z-10">
            <div className="text-pray h5">Gemeinschaft - Part II</div>
            <h4 className="h4">Gemein&shy;schafts&shy;zeit</h4>
            <p>
              Alle zwei Wochen kommt der gesamte Jahrgang für Essen, Austausch
              und Spiele zusammen.
            </p>
          </div>
          {/* <!-- tracks --> */}
          <div className="relative z-10">
            <div className="text-pray h5">Training</div>
            <h4 className="h4">100h Tracks</h4>
            <p>
              Lass dich ausbilden zum Lobpreiser oder Gebetsleiter. Mit
              packenden Teachings und praktischen Einheiten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
