import { cn } from "@/lib/utils";

type InstrumentMotifVariant = "clarinet" | "violin" | "piano";

interface InstrumentMotifProps {
  /** Which instrument SVG to render */
  variant?: InstrumentMotifVariant;
  /** Tailwind classes for positioning (e.g. "absolute top-0 right-0") */
  className?: string;
  /** Override default opacity (0.04) */
  opacity?: number;
  /** Width and height in pixels */
  size?: number;
}

function ClarinetSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Mouthpiece */}
      <path
        d="M94 12 C94 8, 106 8, 106 12 L106 22 C106 24, 104 26, 102 26 L98 26 C96 26, 94 24, 94 22Z"
        fill="currentColor"
        className="text-brand-purple"
      />
      {/* Barrel */}
      <rect
        x="95"
        y="26"
        width="10"
        height="18"
        rx="2"
        fill="currentColor"
        className="text-brand-purple"
      />
      {/* Upper joint */}
      <rect
        x="94"
        y="44"
        width="12"
        height="50"
        rx="3"
        fill="currentColor"
        className="text-brand-purple"
      />
      {/* Lower joint */}
      <rect
        x="94"
        y="94"
        width="12"
        height="55"
        rx="3"
        fill="currentColor"
        className="text-brand-purple"
      />
      {/* Bell - flared bottom */}
      <path
        d="M94 149 L94 165 C94 170, 90 178, 85 182 C82 184, 80 188, 82 192 C86 196, 114 196, 118 192 C120 188, 118 184, 115 182 C110 178, 106 170, 106 165 L106 149"
        fill="currentColor"
        className="text-brand-purple"
      />
      {/* Tone holes / keys - simplified circles */}
      <circle
        cx="93"
        cy="55"
        r="2.5"
        fill="currentColor"
        className="text-brand-teal"
        opacity="0.5"
      />
      <circle
        cx="93"
        cy="65"
        r="2.5"
        fill="currentColor"
        className="text-brand-teal"
        opacity="0.5"
      />
      <circle
        cx="93"
        cy="75"
        r="2.5"
        fill="currentColor"
        className="text-brand-teal"
        opacity="0.5"
      />
      <circle
        cx="93"
        cy="85"
        r="2"
        fill="currentColor"
        className="text-brand-teal"
        opacity="0.5"
      />
      <circle
        cx="107"
        cy="105"
        r="2.5"
        fill="currentColor"
        className="text-brand-teal"
        opacity="0.5"
      />
      <circle
        cx="107"
        cy="115"
        r="2.5"
        fill="currentColor"
        className="text-brand-teal"
        opacity="0.5"
      />
      <circle
        cx="107"
        cy="125"
        r="2"
        fill="currentColor"
        className="text-brand-teal"
        opacity="0.5"
      />
      <circle
        cx="107"
        cy="135"
        r="2"
        fill="currentColor"
        className="text-brand-teal"
        opacity="0.5"
      />
      {/* Register key */}
      <ellipse
        cx="108"
        cy="50"
        rx="3"
        ry="1.5"
        fill="currentColor"
        className="text-brand-teal"
        opacity="0.4"
      />
    </svg>
  );
}

function ViolinSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Scroll */}
      <path
        d="M96 12 C92 12, 88 16, 88 20 C88 24, 92 26, 96 24 C98 23, 99 21, 99 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-brand-purple"
      />
      {/* Pegbox */}
      <rect
        x="97"
        y="18"
        width="6"
        height="20"
        rx="1"
        fill="currentColor"
        className="text-brand-purple"
      />
      {/* Tuning pegs */}
      <line
        x1="94"
        y1="24"
        x2="103"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand-teal"
        opacity="0.5"
      />
      <line
        x1="94"
        y1="30"
        x2="103"
        y2="30"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand-teal"
        opacity="0.5"
      />
      {/* Neck */}
      <rect
        x="98"
        y="38"
        width="4"
        height="30"
        rx="1"
        fill="currentColor"
        className="text-brand-purple"
      />
      {/* Upper bout */}
      <path
        d="M100 68 C85 68, 72 76, 72 88 C72 95, 78 100, 85 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-purple"
      />
      <path
        d="M100 68 C115 68, 128 76, 128 88 C128 95, 122 100, 115 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-purple"
      />
      {/* C-bouts (waist) */}
      <path
        d="M85 100 C90 104, 92 110, 88 116"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-purple"
      />
      <path
        d="M115 100 C110 104, 108 110, 112 116"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-purple"
      />
      {/* Lower bout */}
      <path
        d="M88 116 C72 120, 65 135, 68 150 C70 162, 82 172, 100 174"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-purple"
      />
      <path
        d="M112 116 C128 120, 135 135, 132 150 C130 162, 118 172, 100 174"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-purple"
      />
      {/* Body fill (subtle) */}
      <path
        d="M100 68 C85 68, 72 76, 72 88 C72 95, 78 100, 85 100 C90 104, 92 110, 88 116 C72 120, 65 135, 68 150 C70 162, 82 172, 100 174 C118 172, 130 162, 132 150 C135 135, 128 120, 112 116 C108 110, 110 104, 115 100 C122 100, 128 95, 128 88 C128 76, 115 68, 100 68Z"
        fill="currentColor"
        className="text-brand-purple"
        opacity="0.15"
      />
      {/* F-holes */}
      <path
        d="M88 118 C86 125, 87 135, 90 142"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-brand-teal"
        opacity="0.6"
      />
      <path
        d="M112 118 C114 125, 113 135, 110 142"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-brand-teal"
        opacity="0.6"
      />
      {/* Bridge */}
      <line
        x1="90"
        y1="138"
        x2="110"
        y2="138"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand-purple"
        opacity="0.4"
      />
      {/* Tailpiece */}
      <path
        d="M96 155 L100 174 L104 155Z"
        fill="currentColor"
        className="text-brand-purple"
        opacity="0.3"
      />
      {/* Chin rest */}
      <ellipse
        cx="108"
        cy="170"
        rx="8"
        ry="5"
        fill="currentColor"
        className="text-brand-purple"
        opacity="0.2"
      />
      {/* Strings */}
      <line
        x1="97"
        y1="38"
        x2="97"
        y2="155"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-brand-purple"
        opacity="0.3"
      />
      <line
        x1="99"
        y1="38"
        x2="99"
        y2="155"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-brand-purple"
        opacity="0.3"
      />
      <line
        x1="101"
        y1="38"
        x2="101"
        y2="155"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-brand-purple"
        opacity="0.3"
      />
      <line
        x1="103"
        y1="38"
        x2="103"
        y2="155"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-brand-purple"
        opacity="0.3"
      />
    </svg>
  );
}

function PianoSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Piano keys frame */}
      <rect
        x="25"
        y="50"
        width="150"
        height="100"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-purple"
      />
      {/* White keys - 7 keys spanning the frame */}
      <line
        x1="46.4"
        y1="50"
        x2="46.4"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-purple"
        opacity="0.4"
      />
      <line
        x1="67.8"
        y1="50"
        x2="67.8"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-purple"
        opacity="0.4"
      />
      <line
        x1="89.3"
        y1="50"
        x2="89.3"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-purple"
        opacity="0.4"
      />
      <line
        x1="110.7"
        y1="50"
        x2="110.7"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-purple"
        opacity="0.4"
      />
      <line
        x1="132.1"
        y1="50"
        x2="132.1"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-purple"
        opacity="0.4"
      />
      <line
        x1="153.6"
        y1="50"
        x2="153.6"
        y2="150"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-purple"
        opacity="0.4"
      />
      {/* Black keys - 5 keys (C#, D#, F#, G#, A#) */}
      <rect
        x="38"
        y="50"
        width="13"
        height="60"
        rx="1"
        fill="currentColor"
        className="text-brand-purple"
      />
      <rect
        x="59"
        y="50"
        width="13"
        height="60"
        rx="1"
        fill="currentColor"
        className="text-brand-purple"
      />
      <rect
        x="102"
        y="50"
        width="13"
        height="60"
        rx="1"
        fill="currentColor"
        className="text-brand-purple"
      />
      <rect
        x="123"
        y="50"
        width="13"
        height="60"
        rx="1"
        fill="currentColor"
        className="text-brand-purple"
      />
      <rect
        x="144"
        y="50"
        width="13"
        height="60"
        rx="1"
        fill="currentColor"
        className="text-brand-purple"
      />
      {/* Subtle top accent line */}
      <line
        x1="25"
        y1="50"
        x2="175"
        y2="50"
        stroke="currentColor"
        strokeWidth="2.5"
        className="text-brand-teal"
        opacity="0.4"
      />
    </svg>
  );
}

const variants: Record<InstrumentMotifVariant, React.FC> = {
  clarinet: ClarinetSvg,
  violin: ViolinSvg,
  piano: PianoSvg,
};

export function InstrumentMotif({
  variant = "clarinet",
  className,
  opacity = 0.04,
  size = 360,
}: InstrumentMotifProps) {
  const SvgComponent = variants[variant];

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
      style={{
        width: size,
        height: size,
        opacity,
      }}
    >
      <SvgComponent />
    </div>
  );
}
