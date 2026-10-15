// Ratings are out of 5 and render as Star Wars glyphs.
export interface Skill {
  name: string;
  level: number;
}

export const skills = {
  programming: [
    { name: 'Python', level: 5 },
    { name: 'C++', level: 3 },
    { name: 'HTML', level: 3 },
    { name: 'Javascript', level: 3 },
    { name: 'CSS', level: 2 },
  ],
  art: [
    { name: 'Traditional Art', level: 4 },
    { name: 'Digital Art', level: 3 },
    { name: 'Krita', level: 2 },
  ],
  football: [
    { name: 'Dribbling', level: 3 },
    { name: 'Stepping', level: 3 },
    { name: 'Defense', level: 2 },
    { name: 'Power', level: 2 },
  ],
} satisfies Record<string, Skill[]>;
