import { useMemo } from "react";

type TextSegment = {
  id: string;
  text: string;
  color?: string;
};

interface DescriptionProps {
  content: string;
  highlights: {
    start: number;
    end: number;
    color: string;
  }[];
}

const Description = ({ content, highlights }: DescriptionProps) => {
  const segments = useMemo<TextSegment[]>(() => {
    const initialSegments: TextSegment[] = [];
    let lastIndex = 0;
    const sortedHighlights = [...highlights].sort((a, b) => a.start - b.start);

    if (highlights.length === 0) {
      // If no highlights, just add the full content once
      initialSegments.push({
        id: crypto.randomUUID(),
        text: content,
      });
    } else {
      // Process highlights
      sortedHighlights.forEach((highlight) => {
        if (highlight.start > lastIndex) {
          initialSegments.push({
            id: crypto.randomUUID(),
            text: content.slice(lastIndex, highlight.start),
          });
        }

        initialSegments.push({
          id: crypto.randomUUID(),
          text: content.slice(highlight.start, highlight.end),
          color: highlight.color,
        });

        lastIndex = highlight.end;
      });

      // Add remaining content after last highlight
      if (lastIndex < content.length) {
        initialSegments.push({
          id: crypto.randomUUID(),
          text: content.slice(lastIndex),
        });
      }
    }

    return initialSegments;
  }, [content, highlights]);

  return (
    <div className="relative group">
      <div
        id="content"
        className="relative whitespace-pre-line max-w-[620px] text-gray-700 dark:text-white/80 
                 text-lg md:text-xl leading-relaxed cursor-text"
      >
        {segments.map((segment) => (
          <span
            key={segment.id}
            style={{ color: segment.color }}
            className="relative"
          >
            {segment.text}
            {segment.color && (
              <span
                className="absolute bottom-0 left-0 w-full h-[2px] opacity-50"
                style={{ backgroundColor: segment.color }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Description;
