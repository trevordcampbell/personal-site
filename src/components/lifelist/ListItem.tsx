import { DifficultyIcon } from "./DifficultyIcon";
import { StatusIcon } from "./StatusIcon"

type Status = "completed" | "in progress" | "researching" | "paused" | "nuked" | "untouched" | string;
type Difficulty = "easy" | "medium" | "hard" | "legendary" | string;

export function ListItem({ title, status, difficulty }: { title: string, status: Status, difficulty: Difficulty }) {

  if(status === "completed") {
    return (
      <li className="flex">
        <StatusIcon status={status} />
        <span className="sr-only">{status}</span>
        <p className="ml-4 mr-6 align-middle font-semibold leading-tight sm:leading-normal text-teal-600 dark:text-teal-400">{title}</p>
        <DifficultyIcon difficulty={difficulty} />
        <span className="sr-only">{difficulty}</span>
      </li>
    )
  }

  if(status === "untouched") {
    return (
      <li className="flex">
        <StatusIcon status={status} />
        <span className="sr-only">{status}</span>
        <p className="ml-4 mr-6 font-medium leading-tight sm:leading-normal text-zinc-600/60 dark:text-zinc-300/60">{title}</p>
        <DifficultyIcon difficulty={difficulty} />
        <span className="sr-only">{difficulty}</span>
      </li>
    )
  }

  else {
    return (
      <li className="flex">
        <StatusIcon status={status} />
        <span className="sr-only">{status}</span>
        <p className="ml-4 mr-6 font-medium leading-tight sm:leading-normal text-zinc-600 dark:text-zinc-300">{title}</p>
        <DifficultyIcon difficulty={difficulty} />
        <span className="sr-only">{difficulty}</span>
      </li>
    )
  }
}