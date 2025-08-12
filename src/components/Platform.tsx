"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faSoundcloud,
  faYoutube,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";

const platforms = [
  {
    name: "Spotify",
    url: "https://www.spotify.com",
    icon: faSpotify,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com",
    icon: faApple,
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com",
    icon: faSoundcloud,
  },
  {
    name: "YouTube Music",
    url: "https://music.youtube.com",
    icon: faYoutube,
  },
  {
    name: "Amazon Music",
    url: "https://music.amazon.com",
    icon: faAmazon,
  },
];

export default function MusicPlatforms() {
  return (
    <div
      className="sm:py-32 py-10 px-6 flex flex-col items-center
                 bg-gradient-to-b from-gray-100 to-white
                 dark:from-gray-900 dark:to-gray-950"
    >
      <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-10">
        Popular Music Platforms
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-5xl">
        {platforms.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-5 rounded-xl
                       text-gray-900 dark:text-gray-100
                       bg-white dark:bg-gray-800
                       border border-gray-200 dark:border-gray-700
                       shadow-sm hover:shadow-lg
                       transform hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              className="mb-3 text-indigo-600 dark:text-indigo-400"
            />
            <span className="text-sm font-medium">{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
