'use client';

interface Dot {
  x: number;
  y: number;
  label: string;
}

interface ArgentinaMapProps {
  dot?: Dot;
}

export default function ArgentinaMap({ dot }: ArgentinaMapProps) {
  return (
    <svg
      viewBox="0 0 300 500"
      style={{ width: '100%', height: '100%' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="rgba(247,244,238,0.06)" stroke="rgba(247,244,238,0.3)" strokeWidth="0.7" strokeLinejoin="round">
        {/* Jujuy */}
        <polygon points="75,0 127,0 122,28 90,44 76,34" />
        {/* Salta */}
        <polygon points="28,0 75,0 76,34 90,44 86,92 50,102 24,76 20,28" />
        {/* Formosa */}
        <polygon points="127,0 224,4 220,64 162,64 127,58" />
        {/* Chaco */}
        <polygon points="162,64 220,64 224,108 192,122 162,120" />
        {/* Misiones */}
        <polygon points="224,50 256,38 272,72 256,106 228,108 220,78" />
        {/* Corrientes */}
        <polygon points="192,100 224,100 256,106 250,142 213,146 192,130" />
        {/* Tucumán */}
        <polygon points="86,92 128,92 128,118 100,124 86,106" />
        {/* Santiago del Estero */}
        <polygon points="128,62 162,66 192,100 192,182 152,186 128,174" />
        {/* Catamarca */}
        <polygon points="24,48 86,92 86,106 100,124 100,196 64,206 24,174" />
        {/* La Rioja */}
        <polygon points="48,170 100,174 106,220 74,236 44,206" />
        {/* Entre Ríos */}
        <polygon points="213,130 250,142 254,186 232,200 213,196" />
        {/* Santa Fe */}
        <polygon points="192,100 213,100 213,200 192,205" />
        {/* Córdoba */}
        <polygon points="128,118 192,118 192,205 152,214 128,206" />
        {/* San Juan */}
        <polygon points="24,174 64,174 80,220 64,246 24,230" />
        {/* Mendoza */}
        <polygon points="14,214 64,214 70,292 38,312 14,285" />
        {/* San Luis */}
        <polygon points="80,206 128,206 130,270 90,276" />
        {/* Buenos Aires */}
        <polygon points="192,142 254,142 274,190 290,292 268,346 238,372 204,372 184,296 192,196" />
        {/* La Pampa */}
        <polygon points="90,240 184,240 184,296 138,322 94,306" />
        {/* Neuquén */}
        <polygon points="14,254 64,254 80,272 80,306 38,322 14,305" />
        {/* Río Negro */}
        <polygon points="14,305 38,322 80,306 94,306 138,322 184,296 190,342 14,356" />
        {/* Chubut */}
        <polygon points="14,356 190,342 200,392 184,416 14,416" />
        {/* Santa Cruz */}
        <polygon points="14,416 184,416 200,392 210,462 194,476 14,466" />
        {/* Tierra del Fuego */}
        <polygon points="64,470 168,470 184,482 164,496 84,496 64,482" />
      </g>

      {/* Active dot */}
      {dot && (
        <g>
          <circle cx={dot.x} cy={dot.y} r={12} fill="var(--clay)" opacity={0.2} />
          <circle cx={dot.x} cy={dot.y} r={5} fill="var(--clay)" />
        </g>
      )}
    </svg>
  );
}
