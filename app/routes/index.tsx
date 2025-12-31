import ApplyNow from '~/sections/ApplyNow';
import Facts from '~/sections/Facts';
import Faq from '~/sections/Faq';
import Hero from '~/sections/Hero';
import Manifest from '~/sections/Manifest';
import PartOfPrayerHouse from '~/sections/PartOfPrayerHouse';
import PrayerRoom from '~/sections/PrayerRoom';
import Team from '~/sections/Team';
import Testimonials from '~/sections/Testimonials';
import Tracks from '~/sections/Tracks';
import Values from '~/sections/Values';
import WeeklySchedule from '~/sections/WeeklySchedule';
import YearDetails from '~/sections/YearDetails';
import YearOverview from '~/sections/YearOverview';

export default function Home() {
  return (
    <>
      <Hero />
      <Manifest />
      <Values />
      <PrayerRoom />
      <YearOverview />
      <YearDetails />
      <Tracks />
      <WeeklySchedule />
      <PartOfPrayerHouse />
      <Facts />
      <Faq />
      <Team />
      <Testimonials />
      <ApplyNow />
    </>
  );
}
