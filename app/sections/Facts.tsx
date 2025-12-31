export default function () {
  return (
    <section className="py-section text-day bg-incense-900">
      <div className="content">
        <h2 className="h2">Facts</h2>
        <div className="gap-content mt-8 grid grid-cols-2 lg:grid-cols-3">
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
    title: 'Preise',
    description: '3000 € + Wohnen & Essen',
  },
];

FACT_DATA.push(FACT_DATA[0]);
FACT_DATA.push(FACT_DATA[0]);
FACT_DATA.push(FACT_DATA[0]);

export type FactDto = {
  title: string;
  description: string;
};
