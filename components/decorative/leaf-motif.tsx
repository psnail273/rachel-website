import { cn } from "@/lib/utils";

type LeafMotifVariant =
  | "leaf"
  | "branch"
  | "circle"
  | "fern"
  | "pine"
  | "willow"
  | "stone";

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

function FernSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Central stem curving gently */}
      <path
        d="M100 190 C98 160, 95 120, 90 80 C87 60, 85 40, 88 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-brand-purple"
      />
      {/* Left leaflets along stem */}
      <path
        d="M98 170 C80 165, 65 155, 60 145 C70 148, 82 155, 98 170Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M96 148 C75 140, 58 128, 50 118 C62 122, 78 132, 96 148Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M94 126 C72 116, 55 102, 45 90 C58 96, 76 108, 94 126Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M92 104 C70 92, 55 78, 48 65 C60 72, 76 84, 92 104Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M90 82 C72 70, 60 55, 55 42 C65 50, 78 62, 90 82Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M89 60 C76 50, 68 38, 65 28 C72 34, 80 44, 89 60Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      {/* Right leaflets along stem */}
      <path
        d="M100 162 C118 155, 135 148, 142 138 C132 142, 116 150, 100 162Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M98 140 C118 130, 138 122, 148 112 C136 118, 118 126, 98 140Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M96 118 C116 106, 135 96, 145 85 C134 92, 116 104, 96 118Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M94 96 C112 84, 128 74, 138 62 C128 70, 112 80, 94 96Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M92 74 C106 64, 118 54, 125 44 C118 50, 106 60, 92 74Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      <path
        d="M90 52 C100 44, 108 36, 112 28 C106 34, 100 42, 90 52Z"
        fill="currentColor"
        className="text-brand-teal"
      />
    </svg>
  );
}

function PineSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Angular pine branch */}
      <path
        d="M30 185 C50 170, 75 140, 100 105 C120 78, 140 50, 165 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-brand-teal"
      />
      {/* Needle clusters - left side */}
      <path
        d="M55 165 C45 155, 35 148, 28 145 M55 165 C48 158, 38 155, 30 155 M55 165 C50 160, 42 162, 35 165"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="text-brand-teal"
      />
      <path
        d="M78 138 C68 128, 58 122, 50 120 M78 138 C70 130, 60 128, 52 130 M78 138 C72 134, 65 136, 58 140"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="text-brand-teal"
      />
      <path
        d="M105 100 C95 90, 85 85, 78 82 M105 100 C97 92, 87 90, 80 92 M105 100 C100 96, 92 98, 85 102"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="text-brand-teal"
      />
      {/* Needle clusters - right side */}
      <path
        d="M68 152 C75 142, 82 135, 88 132 M68 152 C78 145, 85 142, 92 144"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="text-brand-teal"
      />
      <path
        d="M92 120 C100 110, 108 104, 115 100 M92 120 C102 112, 110 110, 118 112"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="text-brand-teal"
      />
      <path
        d="M125 78 C132 68, 140 62, 148 58 M125 78 C135 72, 142 70, 150 72"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="text-brand-teal"
      />
      {/* Small pine cone at joint */}
      <ellipse
        cx="90"
        cy="115"
        rx="4"
        ry="6"
        fill="currentColor"
        className="text-brand-purple"
        opacity="0.4"
      />
    </svg>
  );
}

function WillowSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Long, slender willow leaf with gentle curve */}
      <path
        d="M100 10 C105 30, 115 60, 120 100 C125 140, 118 170, 105 190 C100 185, 95 170, 90 140 C85 100, 90 50, 100 10Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      {/* Central vein */}
      <path
        d="M100 18 C103 40, 110 70, 114 105 C118 140, 114 168, 105 185"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-purple"
        opacity="0.5"
      />
      {/* Subtle side veins */}
      <path
        d="M104 50 C110 48, 115 52, 118 58 M102 80 C108 78, 116 82, 120 90 M106 110 C112 108, 120 112, 122 120 M108 140 C114 138, 118 142, 120 148"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-brand-purple"
        opacity="0.3"
      />
      <path
        d="M98 50 C92 48, 88 52, 86 58 M97 80 C92 78, 86 82, 84 90 M96 110 C90 108, 86 112, 84 120 M98 140 C92 138, 88 142, 86 148"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-brand-purple"
        opacity="0.3"
      />
    </svg>
  );
}

function StoneSvg() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Smooth organic pebble shape */}
      <path
        d="M100 40 C135 38, 168 55, 175 85 C182 115, 170 145, 145 162 C120 178, 80 180, 55 165 C30 150, 20 120, 25 90 C30 60, 60 42, 100 40Z"
        fill="currentColor"
        className="text-brand-teal"
      />
      {/* Subtle highlight / inner contour */}
      <path
        d="M95 58 C120 56, 148 68, 155 88 C162 108, 152 132, 135 144 C118 156, 88 155, 70 142 C52 128, 48 105, 55 85 C62 65, 78 58, 95 58Z"
        fill="currentColor"
        className="text-brand-purple"
        opacity="0.2"
      />
      {/* Small surface detail */}
      <path
        d="M85 90 C95 85, 110 88, 115 95"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-brand-purple"
        opacity="0.15"
      />
    </svg>
  );
}

const variants: Record<LeafMotifVariant, React.FC> = {
  leaf: LeafSvg,
  branch: BranchSvg,
  circle: CircleSvg,
  fern: FernSvg,
  pine: PineSvg,
  willow: WillowSvg,
  stone: StoneSvg,
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
