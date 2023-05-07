import { DifficultyIcon } from "./DifficultyIcon";
import { StatusIcon } from "./StatusIcon"

interface ListItem {
  title: string,
  status: "completed" | "in progress" | "researching" | "paused" | "nuked" | "untouched";
  difficulty: "easy" | "medium" | "hard" | "legendary";
}

export function ListItem({ title, status, difficulty }: ListItem) {

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

  if(status === "in progress") {
    return (
      <li className="flex">
        <StatusIcon status={status} />
        <span className="sr-only">{status}</span>
        <p className="ml-4 mr-6 align-middle font-semibold leading-tight sm:leading-normal text-sky-600 dark:text-sky-400">{title}</p>
        <DifficultyIcon difficulty={difficulty} />
        <span className="sr-only">{difficulty}</span>
      </li>
    )
  }

  if(status === "researching") {
    return (
      <li className="flex">
        <StatusIcon status={status} />
        <span className="sr-only">{status}</span>
        <p className="ml-4 mr-6 align-middle font-semibold leading-tight sm:leading-normal text-purple-700 dark:text-purple-400">{title}</p>
        <DifficultyIcon difficulty={difficulty} />
        <span className="sr-only">{difficulty}</span>
      </li>
    )
  }

  if(status === "paused") {
    return (
      <li className="flex">
        <StatusIcon status={status} />
        <span className="sr-only">{status}</span>
        <p className="ml-4 mr-6 align-middle font-semibold leading-tight sm:leading-normal text-amber-600 dark:text-amber-500">{title}</p>
        <DifficultyIcon difficulty={difficulty} />
        <span className="sr-only">{difficulty}</span>
      </li>
    )
  }

  if(status === "nuked") {
    return (
      <li className="flex">
        <StatusIcon status={status} />
        <span className="sr-only">{status}</span>
        <p className="ml-4 mr-6 align-middle font-semibold leading-tight sm:leading-normal text-red5600 dark:text-red-400 line-through">{title}</p>
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