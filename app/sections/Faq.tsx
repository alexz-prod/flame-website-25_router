import { useState } from 'react';
import { AccordionItem } from '~/components/AccordionItem';

export default function () {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="text-pray py-section">
      <div className="content gap-content grid grid-cols-1 md:grid-cols-3">
        <h2 className="h2">FAQ</h2>
        <ul className="js--accordion col-span-2 max-w-2xl">
          {FAQ_DATA.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={i === openIndex}
              onClick={() => handleItemClick(i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

const FAQ_DATA: AccordionItem[] = [
  {
    title: 'Welche Kosten kommen insgesamt auf mich zu?',
    content: `Das Schulgeld für die FlameAcademy beträgt 3.290€ für das komplette Schuljahr bzw. 3.390€ bei Bewerbung ab 01.02.2026 sowie 3.490€ bei Bewerbung ab 01.04. 2026. Eine Anzahlung in Höhe von 750€ wird im Vorfeld fällig.
Pro Person liegt die Miete in Augsburg bei etwa 500€, abhängig von Vermieter, Art der Unterkunft usw.
Die Kosten für das Schulgeld sollen dich nicht von einer Bewerbung abhalten. Falls du Unterstützung benötigst, melde dich bitte im Laufe des Bewerbungsprozesses bei uns.
`,
  },
  {
    title: 'Wie finanziere ich das Jahr?',
    content: `Wir empfehlen dir, für die Zeit der FlameAcademy einen Kreis von Unterstützern aufzubauen - sowohl im Gebet, als auch finanziell. Vielleicht bekommst du z.B. die Gelegenheit, im Gottesdienst deiner eigenen Gemeinde darüber zu informieren oder kennst Freunde & Familie, die dein Anliegen unterstützen möchten.
Spendenbescheinigungen für private Spenden an dich können wir jedoch nicht ausstellen. Unter bestimmten Voraussetzungen ist es außerdem möglich, Wohngeld bei der Stadt Augsburg zu beantragen. Informiere dich bei Interesse aber am besten selbst genauer: https://www.augsburg.de/buergerservice-rathaus/buergerservice/dienste-a-z/aemterweise/leistungen-amt-fuer-soziale-leistungen-senioren-und-menschen-mit-behinderung/wohngeld
Habe Glauben, dass Gott wirklich versorgt - wenn er dich hier haben möchte, wird es nicht an den Finanzen scheitern!
`,
  },
  {
    title: 'Kann ich weiterhin Kindergeld beziehen?',
    content: `Unter bestimmten Voraussetzungen ist es möglich, dass deine Eltern weiterhin Kindergeld beziehen, z.B. wenn du unter 25 Jahre alt bist und noch keine fertig abgeschlossene (Erst-)Ausbildung hast oder nachweisen kannst, dass die FlameAcademy eine fachliche Fortbildung im Rahmen deines beruflichen Werdegangs ist.`,
  },
  {
    title:
      'Was ist, wenn ich andere wichtige Termine während des Schuljahres habe?',
    content: `Außerhalb der Ferien geben wir dir nur in Ausnahmefällen frei, z.B. bei der Hochzeit von nahen Familienangehörigen oder einem Vorstellungsgespräch für den zukünftigen Arbeitsplatz.`,
  },
  {
    title: 'Kann ich mal in den Schulalltag reinschnuppern?',
    content: `Ja, am besten geeignet ist dafür unser Tag der offenen Tür am 01.05.2026. Melde dich über flameacademy@gebetshaus.org an, wir freuen uns dich kennenzulernen!
Auch sonst kannst du gerne ins Gebetshaus kommen und dich z.B. mal in ein Teaching setzen – melde dich auch dann bitte vorher bei uns.`,
  },
  {
    title: 'Können wir als Ehepaar bzw. Familie teilnehmen?',
    content: `Ehepaare sind bei uns herzlich willkommen, und Ehepaare ohne oder mit erwachsenen Kindern können problemlos gemeinsam an der FlameAcademy teilnehmen. Wir wollen es besonders wertschätzen, wenn ihr euch als Ehepaar auf diesen mutigen Schritt einlasst, darum zahlt ihr 500€ weniger Schulgeld.
Für Familien gilt: Die FlameAcademy ist als Vollzeitschule konzipiert und erlaubt darüber hinaus durch die besonderen zeitlichen Rahmenbedingungen (z.B. während der Nachtschicht) leider nicht, dass beide Eltern in Vollzeit teilnehmen. Wir haben jedoch die Möglichkeit geschaffen, dass der andere, nicht vollzeitig teilnehmende Ehepartner punktuell bei Lehr- und Gemeinschaftszeiten dabei sein kann, wenn die Kinder anderweitig betreut werden, was jedoch selbstständig zu organisieren ist. Außerdem können Lehren auch zeitnah online nachgeholt werden. Alle weiteren Programmpunkte sind nur für den vollzeitig teilnehmenden Ehepartner vorgesehen. Natürlich sind Familien im Gebetshaus generell herzlich willkommen, um mit den Kindern zu beten oder auch an Mütterangeboten der ehrenamtlichen Mitarbeiter des Gebetshauses teilzunehmen.`,
  },
  {
    title: 'Wie alt sind die meisten Teilnehmer?',
    content: `Die meisten unserer Schüler sind etwa zwischen 20 und 35 Jahre alt, hinzu kommen eine Gruppe „frischer“ Abiturienten sowie einige über 30-Jährige. Immer wieder haben wir aber auch Schüler mit noch mehr Lebenserfahrung – du bist also auch bei uns auch mit über 40 Jahren sehr willkommen.`,
  },
  {
    title: 'Muss ich einer bestimmten Konfession angehören, um teilzunehmen?',
    content: `Nein. Wir sind ein ökumenisches Haus und nehmen gerne Bewerbungen von Christen aus allen Konfessionen entgegen.`,
  },
  {
    title: 'Wann bekomme ich nach meiner Bewerbung eine Zu- oder Absage?',
    content: `In der Regel erhältst du innerhalb von max. zwei Wochen nach einem Bewerbertag (die entsprechenden Daten findest du in den Bewerbungsunterlagen) eine Zu- oder Absage.`,
  },
  {
    title: 'Werden auch internationale Bewerber aufgenommen?',
    content: `Ja gerne. Bitte beachte, dass die Schule auf Deutsch stattfindet.`,
  },
  {
    title: 'Wie bin ich während der FlameAcademy versichert?',
    content: `Während der FlameAcademy ist eine eigene Kranken- und Haftpflichtversicherung verpflichtend, mit der Unterzeichnung des Schulvertrags bestätigst du uns diese auch. Falls Du unter 25 Jahre alt und noch familienversichert bist, kann dies fortgeführt werden, eine entsprechende Schulbestätigung erhältst du von uns auf Anfrage. Falls Du über 25 Jahre alt bist, kannst Du bei deiner Krankenkasse nach günstigeren Schülertarifen fragen.`,
  },
];
