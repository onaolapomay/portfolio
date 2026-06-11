"use client";

import { useEffect, useState } from "react";

type Song = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImage?: string;
  songUrl?: string;
  deviceName?: string;
  deviceType?: string;
};

function Equalizer() {
  return (
    <div className="flex items-end gap-1">
      <span className="h-2 w-1 animate-pulse rounded bg-green-500"></span>
      <span className="h-5 w-1 animate-pulse rounded bg-green-500"></span>
      <span className="h-3 w-1 animate-pulse rounded bg-green-500"></span>
      <span className="h-4 w-1 animate-pulse rounded bg-green-500"></span>
    </div>
  );
}

export default function SpotifyNowPlaying() {
  const [song, setSong] = useState<Song | null>(null);

  async function loadSong() {
    const response = await fetch("/api/spotify");
    const data = await response.json();
    console.log(song)
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
      <div className="mt-10 rounded-xl border border-zinc-800 text-white bg-zinc-900 p-6">
        Not listening to anything right now.
      </div>
    );
  }

  return (
  <a
    href={song.songUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-10 flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
  >
    <img
      src={song.albumImage}
      alt={song.title}
      className="h-20 w-20 rounded-xl object-cover shadow-md"
    />

    <div className="min-w-0 flex-1">
      <p className="text-xs uppercase tracking-[0.2em] text-green-500">
        Now Playing
      </p>

      <h3 className="truncate text-base font-semibold">
        {song.title}
      </h3>

      <p className="truncate text-sm text-zinc-400">
        {song.artist}
      </p>

      <p className="text-xs text-zinc-500">
        {song.deviceName} ({song.deviceType})
      </p>
    </div>

    <div className="flex flex-col items-end gap-1">
        <Equalizer/>
     <span className="text-green-500">Spotify</span> 
    </div>

    
  </a>

  );
}