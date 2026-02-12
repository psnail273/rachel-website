import { cn } from "@/lib/utils";

type LeafMotifVariant = "leaf" | "branch" | "circle";

interface LeafMotifProps {
  /** Which SVG shape to render */
  variant?: LeafMotifVariant;
  /** Tailwind classes for positioning (e.g. "absolute top-0 right-0") */
  className?: string;
  /** Override default opacity (0.04) */
  opacity?: number;
  /** Width and height in pixels */
  size?: number;
}

function LeafSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Abstract leaf / botanical curves */}
      <path
        d="M100 10 C60 40, 20 80, 30 140 C35 160, 55 175, 80 180 C90 182, 95 178, 100 170 C105 178, 110 182, 120 180 C145 175, 165 160, 170 140 C180 80, 140 40, 100 10Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      {/* Leaf vein */}
      <path
        d="M100 30 C100 60, 100 100, 100 165"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-brand-purple"
      />
      {/* Side veins */}
      <path
        d="M100 60 C80 55, 55 65, 45 90 M100 60 C120 55, 145 65, 155 90 M100 100 C85 95, 60 105, 50 125 M100 100 C115 95, 140 105, 150 125 M100 135 C90 132, 70 140, 60 155 M100 135 C110 132, 130 140, 140 155"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-purple"
      />
    </svg>
  );
}

function BranchSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Gentle curved branch */}
      <path
        d="M20 180 C60 160, 80 120, 90 80 C95 60, 100 40, 110 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-brand-teal"
      />
      {/* Small leaves along branch */}
      <path
        d="M70 140 C55 130, 50 115, 60 105 C65 115, 75 125, 70 140Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M82 110 C95 100, 100 85, 90 78 C88 88, 85 100, 82 110Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M90 80 C75 75, 68 60, 78 52 C80 62, 85 72, 90 80Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M100 55 C112 48, 118 35, 108 28 C106 38, 102 48, 100 55Z"
        fill="currentColor"
        className="text-brand-teal"
      />
    </svg>
  );
}

function CircleSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Organic circular shape with nature-like irregularity */}
      <path
        d="M100 15 C140 15, 175 35, 185 75 C195 115, 180 155, 145 175 C110 195, 65 190, 35 165 C5 140, 5 95, 25 60 C45 25, 70 15, 100 15Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      {/* Inner organic ring */}
      <path
        d="M100 45 C125 45, 150 60, 155 90 C160 120, 145 145, 120 155 C95 165, 65 158, 50 135 C35 112, 40 80, 60 60 C75 45, 85 45, 100 45Z"
        fill="currentColor"
        className="text-brand-purple"
        opacity="0.3"
      />
    </svg>
  );
}

const variants: Record<LeafMotifVariant, React.FC> = {
  leaf: LeafSvg,
  branch: BranchSvg,
  circle: CircleSvg,
};

export function LeafMotif({
  variant = "leaf",
  className,
  opacity = 0.04,
  size = 480,
}: LeafMotifProps) {
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
