import Image from "next/image";
import type { FeatureSnippetId } from "@/data/featureSnippets";

function SnippetIcon({ id }: { id: FeatureSnippetId }) {
  const attrs = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "routines":
      return (
        <svg {...attrs}>
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
      );
    case "workout":
      return (
        <svg {...attrs}>
          <circle cx="13.5" cy="6.5" r="2.5" />
          <path d="M9 21 13 13l4 4 3-7 4 3-6 9zM7 13l4-4 3 5" />
        </svg>
      );
    case "routine-builder":
      return (
        <svg {...attrs}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "insights":
      return (
        <svg {...attrs}>
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      );
    default:
      return (
        <svg {...attrs}>
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

export type FeatureSnippetCardProps = {
  id: FeatureSnippetId;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  headingId: string;
};

export function FeatureSnippetCard({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  headingId,
}: FeatureSnippetCardProps) {
  return (
    <article
      className={`features-marketing__snippet features-marketing__snippet--${id}`}
      aria-labelledby={headingId}
    >
      <div className="features-marketing__snippet-visual">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 560px"
          className="features-marketing__snippet-img"
        />
      </div>
      <div className="features-marketing__snippet-body">
        <div className="features-marketing__snippet-icon">
          <SnippetIcon id={id} />
        </div>
        <div className="features-marketing__snippet-copy">
          <h3 id={headingId} className="mm-heading features-marketing__snippet-title">
            {title}
          </h3>
          <p className="features-marketing__snippet-text mm-text">{description}</p>
        </div>
      </div>
    </article>
  );
}
