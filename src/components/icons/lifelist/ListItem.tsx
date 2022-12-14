import { StatusIcon } from "./StatusIcon"

type Status = "completed" | "in progress" | "researching" | "paused" | "nuked" | "untouched" | string;

export function ListItem({ title, status }: { title: string, status: Status }) {

  return (
    <li className="flex items-center">
    <StatusIcon status={status} />
    <p className="ml-4 font-medium text-zinc-600 dark:text-zinc-300">{title}</p>
    </li>
  )
}