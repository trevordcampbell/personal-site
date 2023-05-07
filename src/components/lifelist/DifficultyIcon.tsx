// Difficulty Icons

type Difficulty = "easy" | "medium" | "hard" | "legendary" | string;

export function DifficultyIcon({ difficulty }: { difficulty: Difficulty }) {

  if(difficulty === "easy") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-teal-500 dark:text-teal-400/75" stroke="currentColor"/>
        <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
        <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
        <line x1="16.3" x2="16.3" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
      </svg>
    )
  }

  if(difficulty === "medium") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-yellow-500/75 dark:text-yellow-500/75" stroke="currentColor"/>
        <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-yellow-500/75 dark:text-yellow-500/75" stroke="currentColor"/>
        <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
        <line x1="16.3" x2="16.3" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
      </svg>
    )
  }

  if(difficulty === "hard") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-orange-500/75" stroke="currentColor"/>
        <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-orange-500/75" stroke="currentColor"/>
        <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-orange-500/75" stroke="currentColor"/>
        <line x1="16.3" x2="16.3" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
      </svg>
    )
  }

  if(difficulty === "legendary") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-red-500/75" stroke="currentColor"/>
        <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-red-500/75" stroke="currentColor"/>
        <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-red-500/75" stroke="currentColor"/>
        <line x1="16.3" x2="16.3" y1="3" y2="17" className="text-red-500/75" stroke="currentColor"/>
      </svg>
    )
  }

  else {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
        <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
        <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
        <line x1="16.3" x2="16.3" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
      </svg>
    )
  }
}

{/* <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-green-500 dark:text-green-400/75" stroke="currentColor"/>
  <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
  <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
  <line x1="16.3" x2="16.3" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-yellow-500/75 dark:text-yellow-500/75" stroke="currentColor"/>
  <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-yellow-500/75 dark:text-yellow-500/75" stroke="currentColor"/>
  <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
  <line x1="16.3" x2="16.3" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-orange-500/75" stroke="currentColor"/>
  <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-orange-500/75" stroke="currentColor"/>
  <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-orange-500/75" stroke="currentColor"/>
  <line x1="16.3" x2="16.3" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-red-500/75" stroke="currentColor"/>
  <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-red-500/75" stroke="currentColor"/>
  <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-red-500/75" stroke="currentColor"/>
  <line x1="16.3" x2="16.3" y1="3" y2="17" className="text-red-500/75" stroke="currentColor"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
  <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
  <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
  <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 sm:mt-0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3.7" x2="3.7" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
  <line x1="7.9" x2="7.9" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
  <line x1="12.1" x2="12.1" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
  <line x1="16.3" x2="16.3" y1="3" y2="17" className="text-zinc-400/50" stroke="currentColor"/>
</svg>
</> */}