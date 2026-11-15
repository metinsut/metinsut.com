import { contours } from 'd3-contour';
import { geoIdentity, geoPath } from 'd3-geo';

type Peak = { x: number; y: number; height: number; spread: number };

type Options = {
  width: number;
  height: number;
  peaks: Peak[];
  seed?: number;
  levels?: number;
};

export type ContourLine = { d: string; index: boolean; level: number };

const GRID = 6;

function random(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function valueNoise(seed: number, cells: number) {
  const rand = random(seed);
  const size = cells + 1;
  const table = Array.from({ length: size * size }, rand);
  const smooth = (t: number) => t * t * (3 - 2 * t);
  return (x: number, y: number) => {
    const fx = x * cells;
    const fy = y * cells;
    const x0 = Math.min(Math.floor(fx), cells - 1);
    const y0 = Math.min(Math.floor(fy), cells - 1);
    const tx = smooth(fx - x0);
    const ty = smooth(fy - y0);
    const at = (i: number, j: number) => table[j * size + i];
    const top = at(x0, y0) + (at(x0 + 1, y0) - at(x0, y0)) * tx;
    const bottom = at(x0, y0 + 1) + (at(x0 + 1, y0 + 1) - at(x0, y0 + 1)) * tx;
    return top + (bottom - top) * ty;
  };
}

/** Builds contour lines for a small terrain made of a few hills plus noise. */
export function buildContours({
  width,
  height,
  peaks,
  seed = 7,
  levels = 18
}: Options): ContourLine[] {
  const cols = Math.ceil(width / GRID) + 1;
  const rows = Math.ceil(height / GRID) + 1;
  const aspect = width / height;
  const coarse = valueNoise(seed, 5);
  const fine = valueNoise(seed + 1, 13);
  const values = new Float64Array(cols * rows);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const x = i / (cols - 1);
      const y = j / (rows - 1);
      let z = 0;
      for (const p of peaks) {
        const dx = (x - p.x) * aspect;
        const dy = y - p.y;
        z += p.height * Math.exp(-(dx * dx + dy * dy) / (2 * p.spread * p.spread));
      }
      z += (coarse(x, y) - 0.5) * 0.22 + (fine(x, y) - 0.5) * 0.06;
      values[j * cols + i] = z;
    }
  }

  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (const v of values) {
    if (v < min) min = v;
    if (v > max) max = v;
  }
  const step = (max - min) / (levels + 1);
  const thresholds = Array.from({ length: levels }, (_, k) => min + step * (k + 1));

  const path = geoPath(geoIdentity().scale(GRID));
  return contours()
    .size([cols, rows])
    .thresholds(thresholds)(Array.from(values))
    .map((shape, level) => ({ d: path(shape) ?? '', index: level % 5 === 4, level }))
    .filter((line) => line.d.length > 0);
}
