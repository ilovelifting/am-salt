import styles from "./Article.module.css";

export function CiteText({
  text,
  citeClassName,
}: {
  text: string;
  citeClassName?: string;
}) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(/\{\{cite:(\d+)\}\}/g)) {
    const index = match.index;
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }
    const id = match[1];
    parts.push(
      <sup key={`cite-${key++}`} className={citeClassName ?? styles.citeMark}>
        <a href={`#ref-${id}`}>{id}</a>
      </sup>
    );
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
