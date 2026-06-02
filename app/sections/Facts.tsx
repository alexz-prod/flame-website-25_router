export default function () {
  return (
    <section id="facts" className="py-section text-day bg-incense-900">
      <div className="content">
        <h2 className="h2">Facts</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {FACT_DATA.map((item, i) => (
            <div key={i}>
              <h3 className="h4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FACT_DATA: FactDto[] = [
  {
    title: 'Kosten',
    description:
      'Das Schulgeld beträgt 3.290€ bzw. 3.390€ ab 01.02.26 sowie 3.490€ ab 01.04.26.',
  },
  {
    title: 'Wann',
    description:
      'Die nächste FlameAcademy findet von Oktober 2026 bis Juli 2027 statt.',
  },
  {
    title: 'Ferien',
    description: 'Jeweils eine Woche zu Weihnachten, Ostern und Pfingsten',
  },
  {
    title: 'Wohnen',
    description:
      'Für Unterkunft und Verpflegung bist du selbst verantwortlich, wirst aber von uns mit Kontakten bzw. Informationen über Wohnungen unterstützt.',
  },
  {
    title: 'Vollzeitschule',
    description:
      'Dich erwartet eine 6-Tage-Woche und ca. 42 Wochenstunden mit intensivem Programm.',
  },
  {
    title: 'Nebentätigkeit',
    description:
      'Es ist es leider nicht möglich, nebenher noch einem Minijob o.ä. nachzugehen.',
  },
  {
    title: 'Alter',
    description:
      '18–99. Die meisten Schüler sind zwischen 20 und 35 Jahre alt.',
  },
  {
    title: 'Teilnehmerzahl',
    description: 'Wir erwarten ca. 40–50 Schüler.',
  },
  {
    title: 'Bewerbungsfrist',
    description:
      'Frist verlängert! Du kannst dich noch bis zum 24.06.2026 bei uns bewerben.',
  },
];

export type FactDto = {
  title: string;
  description: string;
};
