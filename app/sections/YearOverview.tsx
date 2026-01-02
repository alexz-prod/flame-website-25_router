export default function () {
  return (
    <section className="py-section content">
      <h2 className="h2 text-pray lg:md-1/3 sm:max-w-2/3 md:w-1/2 xl:w-1/4">
        Dein Schuljahr auf einen Blick
      </h2>

      <img
        className="mt-10 aspect-video max-h-80 w-full object-cover lg:mt-16 lg:ml-[20%] lg:w-[80%]"
        src="/img/wireframe-img.svg"
      />

      <ul className="gap-content with-border-top relative mt-6 grid pt-4 sm:gap-12 lg:mt-12 lg:ml-auto lg:w-[80%] lg:grid-cols-3">
        <li>
          <div className="text-pray font-semibold tracking-wide uppercase">
            Wer ist Gott?
          </div>
          <div className="h3 mb-4">Gottes&shy;bild</div>
          <p>
            Nur wenn du weißt, wer Gott ist, kommt dein Leben in eine gesunde
            Ordnung. In der ersten Phase der FlameAcademy bekommst du tiefen
            Input, der dein Gottesbild ganz sicher challengen wird. Kennst du
            Gott als Vater, als Freund, als Retter, als König? Bei uns wirst du
            nicht nur von ihm hören, sondern ihm begegnen und aus der Kraft
            seines Geistes leben lernen.
          </p>
        </li>
        <li>
          <div className="text-pray font-semibold tracking-wide uppercase">
            Identität &amp; Beziehungen
          </div>

          <div className="h3 mb-4">Selbst&shy;bild</div>
          <p>
            Wer bist du eigentlich? Warum hat Gott dich erschaffen und will
            ausgerechnet dich gebrauchen, um die Welt zu verändern? Du kommst
            nicht durch die FlameAcademy, ohne dich intensiv mit dieser Frage
            auseinanderzusetzen. Hier werden die Fundamente deines Selbstbildes
            erneuert, sodass Gott auf ihnen deine Berufung entfalten kann.
          </p>
        </li>
        <li>
          <div className="text-pray font-semibold tracking-wide uppercase">
            Was ist meine Berufung?
          </div>

          <div className="h3 mb-4">Welt&shy;bild</div>
          <p>
            Du bist für mehr gemacht, als einen Wohlfühl-Glauben, der sich v.a.
            um dich selbst dreht. Du bist berufen, die Welt zu verändern und das
            kannst du nur, wenn du lernst, sie mit Gottes Augen zu sehen. Lerne
            deine Bestimmung auf dieser Erde und darüber hinaus kennen und
            erlebe, wie lebendig dich das macht!
          </p>
        </li>
      </ul>
    </section>
  );
}
