"use client";

import { useEffect, useState } from "react";

/**
 * Per-project/per-achievement like button, persisted in localStorage on the
 * visitor's browser (no backend). `type` namespaces the storage key so a
 * project and an achievement that happen to share a slug never collide.
 */
export default function LikeButton({ slug, type = "project", baseCount }) {
  const storeKey = `liked:${type}:${slug}`;
  const countKey = `likeCount:${type}:${slug}`;

  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(baseCount);
  const [pulse, setPulse] = useState(false);

  // Reading localStorage must happen client-side after mount — there's no
  // server-renderable value to derive this from, so this is the one
  // legitimate case for setState directly in an effect.
  useEffect(() => {
    const storedLiked = localStorage.getItem(storeKey) === "true";
    const storedCount = localStorage.getItem(countKey);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLiked(storedLiked);
    setCount(storedCount !== null ? parseInt(storedCount, 10) : baseCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleLike() {
    const nextLiked = !liked;
    const nextCount = count + (nextLiked ? 1 : -1);
    setLiked(nextLiked);
    setCount(nextCount);
    localStorage.setItem(storeKey, String(nextLiked));
    localStorage.setItem(countKey, String(nextCount));
    setPulse(true);
    setTimeout(() => setPulse(false), 300);
  }

  return (
    <button
      type="button"
      onClick={toggleLike}
      aria-pressed={liked}
      aria-label="Like this"
      className={`like-btn ${liked ? "is-liked" : ""} ${pulse ? "like-pulse" : ""} ml-auto inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line dark:border-white/15 text-sm font-medium hover:bg-black/[0.03] dark:hover:bg-white/5 transition-colors`}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 000-7.6z"
        />
      </svg>
      <span>{count}</span>
    </button>
  );
}
