"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpotify,
  faApple,
  faSoundcloud,
  faYoutube,
  faAmazon,
} from '@fortawesome/free-brands-svg-icons';

const platforms = [
  {
    name: 'Spotify',
    url: 'https://www.spotify.com',
    icon: faSpotify,
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com',
    icon: faApple,
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com',
    icon: faSoundcloud,
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com',
    icon: faYoutube,
  },
  {
    name: 'Amazon Music',
    url: 'https://music.amazon.com',
    icon: faAmazon,
  },
];

export default function MusicPlatforms() {
  return (
    <div className="min-h-auto p-10 flex flex-col items-center
                    bg-gradient-to-b dark:from-black dark:to-gray-950
                    from-white to-gray-800">
      <h2 className="text-3xl font-semibold
                     text-white dark:text-black mb-8">
        Popular Music Platforms
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {platforms.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border border-gray-300 rounded-lg
                       text-gray-900 dark:text-gray-100
                       bg-white dark:bg-gray-800
                       transition-shadow duration-300
                       hover:shadow-lg"
          >
            <FontAwesomeIcon icon={icon} size="4x" className="mb-4" />
            <span className="text-lg font-medium">{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
