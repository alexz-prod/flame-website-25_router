import { Img } from '~/components/Img';
import { INDEX_IMG_DATA } from '~/data/images';

export default function () {
  return (
    <section id="wochenplan" className="pt-section">
      <div className="content">
        <h3 className="h2">
          So könnte deine Woche (in der Abend&shy;schicht) aussehen:
        </h3>
      </div>
      <Img
        img={INDEX_IMG_DATA.weeklySchedule}
        className="mx-auto my-8 w-full max-w-3xl px-4 md:my-16"
      />
    </section>
  );
}
