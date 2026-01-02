export default function () {
  return (
    <section id="bewerben" className="bg-day py-section sm:text-center">
      <div className="content max-w-xl">
        <h2 className="h2">Noch Fragen?</h2>
        <p className="mt-1">
          Lerne uns bei sehr gerne am Tag der offenen Tür kennen (01.05.2026),
          stelle deine Fragen per Mail oder fordere direkt die
          Bewerbungsunterlagen an!
        </p>
        <div className="mt-8 flex flex-col gap-2">
          <a
            className="btn"
            href="mailto:flameacademy@gebetshaus.org?subject=Bewerbung FlameAcademy&body=Hallo Flame-Team,%0D%0A%0D%0A✓ Bitte sendet mir die Bewerbungsunterlagen zu.%0D%0A✓ Ich habe noch eine Frage:"
          >
            Bewerbungsunterlagen anfordern
          </a>
          {/* <a className="btn btn_secondary" href="#">
          Schreib uns bei WhatsApp
        </a> */}
          <a
            className="btn btn_secondary"
            href="mailto:flameacademy@gebetshaus.org"
          >
            Mail an flameacademy@gebetshaus.org
          </a>
        </div>
      </div>
    </section>
  );
}
