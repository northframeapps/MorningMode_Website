import Image from "next/image";

export type PhoneMockupProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
};

export function PhoneMockup({
  src,
  alt,
  sizes = "(min-width: 1024px) 400px, 94vw",
  priority = false,
}: PhoneMockupProps) {
  return (
    <div className="mm-phone-shell">
      <span
        className="mm-phone-shell__side mm-phone-shell__side--action"
        aria-hidden
      />
      <span
        className="mm-phone-shell__side mm-phone-shell__side--vol-up"
        aria-hidden
      />
      <span
        className="mm-phone-shell__side mm-phone-shell__side--vol-down"
        aria-hidden
      />
      <span
        className="mm-phone-shell__side mm-phone-shell__side--power"
        aria-hidden
      />
      <div className="mm-phone">
        <Image
          src={src}
          alt={alt}
          fill
          className="mm-phone__screen"
          sizes={sizes}
          priority={priority}
        />
      </div>
    </div>
  );
}
