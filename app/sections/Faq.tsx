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
    title: 'Wo wohnen die Schüler während der FLAMEACADEMY?',
    content:
      'Für Unterkunft und Verpflegung sind unsere Schüler selbst verantwortlich. Wir unterstützten dabei mit Kontakten bzw. Informationen über frei gewordene Zimmer/Wohnungen. Im Schnitt beträgt die Miete in Augsburg etwa 400€ pro Person, jedoch natürlich abhängig von Vermieter, Art der Unterkunft usw.',
  },
];

FAQ_DATA.push(FAQ_DATA[0]);
FAQ_DATA.push(FAQ_DATA[0]);
FAQ_DATA.push(FAQ_DATA[0]);
