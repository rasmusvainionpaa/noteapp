import Link from "next/link";

export type INote = {
  id: number;
  body: string;
};

type NoteProps = {
  note: INote;
};

export function Note({ note }: NoteProps) {
  return (
    <div className="group relative rounded-lg border transition-shadow hover:cursor-pointer hover:shadow-lg">
      <Link href={`/notes/${note.id}`}>
        <a className="absolute inset-0 z-0 h-full w-full select-none text-transparent">
          {note.body}
        </a>
      </Link>

      <div className="pointer-events-none relative z-10 flex justify-between p-4">
        <div>{note.body}</div>

        <div className="pointer-events-auto">
          <button
            onClick={() => alert("moi")}
            className="flex h-7 w-7 items-center justify-center gap-1 rounded-md bg-neutral-100 p-1 opacity-0 transition-opacity group-hover:opacity-100"
          >
            <span className="sr-only">Open menu</span>

            <div className="h-[3px] w-[3px] rounded-full bg-neutral-400" />
            <div className="h-[3px] w-[3px] rounded-full bg-neutral-400" />
            <div className="h-[3px] w-[3px] rounded-full bg-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
