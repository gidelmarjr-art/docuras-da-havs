/**
 * PipedBorder — elemento assinatura do site.
 * Reproduz em SVG a borda "shell" feita com bico de confeitar,
 * igual às bordas em buttercream que aparecem nos bolos reais do ateliê.
 * Usado como divisor entre seções no lugar de uma linha reta genérica.
 */
export default function PipedBorder({
  color = 'var(--wine)',
  background = 'var(--cream)',
  flip = false,
  height = 34,
}) {
  return (
    <svg
      className="piped-border"
      viewBox="0 0 240 34"
      preserveAspectRatio="none"
      style={{
        display: 'block',
        width: '100%',
        height,
        transform: flip ? 'rotate(180deg)' : 'none',
      }}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="240" height="34" fill={background} />
      <path
        d="M0,6 C 6,18 14,18 20,6 C 26,18 34,18 40,6 C 46,18 54,18 60,6
           C 66,18 74,18 80,6 C 86,18 94,18 100,6 C 106,18 114,18 120,6
           C 126,18 134,18 140,6 C 146,18 154,18 160,6 C 166,18 174,18 180,6
           C 186,18 194,18 200,6 C 206,18 214,18 220,6 C 226,18 234,18 240,6
           L 240,0 L 0,0 Z"
        fill={color}
      />
      <circle cx="20" cy="6" r="1.6" fill={background} opacity="0.55" />
      <circle cx="60" cy="6" r="1.6" fill={background} opacity="0.55" />
      <circle cx="100" cy="6" r="1.6" fill={background} opacity="0.55" />
      <circle cx="140" cy="6" r="1.6" fill={background} opacity="0.55" />
      <circle cx="180" cy="6" r="1.6" fill={background} opacity="0.55" />
      <circle cx="220" cy="6" r="1.6" fill={background} opacity="0.55" />
    </svg>
  );
}
