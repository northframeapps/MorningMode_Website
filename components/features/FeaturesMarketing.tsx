import { FeatureSnippetCard } from "@/components/features/FeatureSnippetCard";
import { Reveal } from "@/components/ui/Reveal";
import { featureSnippets } from "@/data/featureSnippets";

const SNIPPET_REVEAL_DELAYS = [1, 2, 3, 4] as const;

export function FeaturesMarketing() {
  return (
    <section
      id="feature-spotlight"
      className="features-marketing"
      aria-labelledby="feature-spotlight-heading"
    >
      <Reveal className="features-marketing__intro mm-container">
        <p className="features-marketing__badge mm-label">What&apos;s inside</p>
        <h2 id="feature-spotlight-heading" className="mm-display features-marketing__title">
          Features designed for calm mornings.
        </h2>
        <p className="features-marketing__lede mm-text">
          Organize routines, spot streaks, and keep momentum gentle — Morning Mode
          turns daily habits into a clear path without the pressure.
        </p>
      </Reveal>

      <Reveal delay={1} className="features-marketing__shell-wrap mm-container">
        <div className="features-marketing__shell">
          <div className="features-marketing__shell-highlight" aria-hidden />
          <div className="features-marketing__grid">
            {featureSnippets.map((snippet, index) => (
              <Reveal key={snippet.id} delay={SNIPPET_REVEAL_DELAYS[index] ?? 4}>
                <FeatureSnippetCard
                  id={snippet.id}
                  title={snippet.title}
                  description={snippet.description}
                  imageSrc={snippet.imageSrc}
                  imageAlt={snippet.imageAlt}
                  headingId={`feature-snippet-${snippet.id}-heading`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
