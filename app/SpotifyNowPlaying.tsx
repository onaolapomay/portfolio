"use client";

import { useEffect, useState } from "react";

type Song = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImage?: string;
  songUrl?: string;
};

export default function SpotifyNowPlaying() {
  const [song, setSong] = useState<Song | null>(null);

  async function loadSong() {
    const response = await fetch("/api/spotify");
    const data = await response.json();
    setSong(data);
  }

  useEffect(() => {
    loadSong();

    const interval = setInterval(loadSong, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!song) {
    return (
      <div>
        Loading Spotify...
      </div>
    );
  }

  if (!song.isPlaying) {
    return (
      <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        Not listening to anything right now.
      </div>
    );
  }

  return (
    <a
      href={song.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-700"
    >
      <img
        src={song.albumImage}
        alt={song.title}
        className="h-16 w-16 rounded-lg"
      />

      <div>
        <p className="font-semibold">
          🎵 {song.title}
        </p>

        <p className="text-zinc-400">
          {song.artist}
        </p>
      </div>
    </a>
  );
}