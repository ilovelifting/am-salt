// Fetches a static Archivo weight as raw font bytes for use inside
// ImageResponse (next/og) routes, which render via Satori and can't use
// the next/font-loaded faces the rest of the app uses in the DOM.
export async function loadArchivo(weight: 400 | 500 | 600 | 700 | 800) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Archivo:wght@${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((res) => res.text());

  const match = css.match(/src: url\((.+?)\) format\('truetype'\)/);
  if (!match) throw new Error("Could not find Archivo font URL");

  return fetch(match[1]).then((res) => res.arrayBuffer());
}
