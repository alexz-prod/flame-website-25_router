export default function () {
  return (
    <section className="py-section content max-w-4xl sm:text-center">
      <h2 className="h2">Noch Fragen?</h2>
      <p className="mt-1">
        Lerne uns bei einem zwanglosen Online-Meeting kennen, stell deine Fragen
        per Mail oder fordere direkt die Bewerbungsunterlagen an!
      </p>
      <div className="mx-auto mt-8 flex max-w-lg flex-col gap-2">
        <a
          className="btn"
          href="mailto:flameacademy@gebetshaus.org?subject=Bewerbung FlameAcademy&body=Hallo Flame-Team,%0D%0A%0D%0A✓ Bitte sendet mir die Bewerbungsunterlagen zu.%0D%0A✓ Ich habe noch eine Frage:"
        >
          Bewerbungsunterlagen anfordern
        </a>
        <a className="btn btn_secondary" href="#">
          Schreib uns bei WhatsApp
        </a>
        <a
          className="btn btn_secondary"
          href="mailto:flameacademy@gebetshaus.org"
        >
          Mail an flameacademy@gebetshaus.org
        </a>
      </div>
    </section>
  );
}
