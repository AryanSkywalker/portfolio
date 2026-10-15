import type { ImageMetadata } from 'astro';
import rebecca from '../assets/images/artwork/rebecca.jpg';

// To add a piece: drop the image in src/assets/images/artwork/, import it, add an entry.
export interface Artwork {
  image: ImageMetadata;
  title: string;
  subtitle: string;
}

export const artwork: Artwork[] = [
  { image: rebecca, title: 'The Bene Gesserit', subtitle: 'Rebecca' },
];
