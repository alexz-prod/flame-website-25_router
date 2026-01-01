import { Img } from '~/components/Img';
import { INDEX_IMG_DATA } from '~/data/images';

export default function () {
  return (
    <section className="pt-section">
      <div className="content">
        <h3 className="h2">
          So könnte deine Woche (in der Abend&shy;schicht) aussehen:
        </h3>
      </div>
      <Img
        img={INDEX_IMG_DATA.weeklySchedule}
        className="md:content mt-8 aspect-16/10 max-h-120 w-full object-cover md:mb-16"
      />
    </section>
  );
}
