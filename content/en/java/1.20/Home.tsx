// wiki/content/en/java/1.20/home.tsx
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">What’s New in Java Edition 1.20 “Trails & Tales”?</h2>
      <p>
        The 1.20 update brings archaeology, sniffer mobs, cherry grove biomes,
        camels, and more. Here’s a quick overview of the headline features:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Archaeology:</strong> Discover brushable pots at dig sites and unearth
          hidden “suspicious sand.” Artifacts include llama-themed shards you can
          craft into decorative pots.
        </li>
        <li>
          <strong>Sniffer Mob:</strong> Hatch “sniffer eggs” found via archaeology,
          then watch them dig for new ancient seeds you can grow.
        </li>
        <li>
          <strong>Cherry Grove Biome:</strong> A pink-blossomed forest where you can
          harvest cherry wood and ride camels.
        </li>
        <li>
          <strong>Camels:</strong> Rideable two-seaters with a dash move. Spawns in
          desert villages.
        </li>
        <li>
          <strong>Hanging Sign & Bamboo Wood:</strong> New Wood types let you craft
          hanging signs, chiseled bookshelves, and more bamboo-based blocks.
        </li>
      </ul>

      <p>
        For full details, check out the{" "}
        <Link href="https://minecraft.net/en-us/article/minecraft-120-update-trails-and-tales" target="_blank" className="underline">
          official announcement
        </Link>
        , or dive straight into the protocol docs via the links below.
      </p>

      <div className="flex space-x-4">
        <Link
          href="/en/java/1.20/protocol"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Java 1.20 Protocol Docs
        </Link>
        <Link
          href="/en/java/1.20/changes"
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Changelog & Details
        </Link>
      </div>
    </div>
  );
}
