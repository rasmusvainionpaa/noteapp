import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between border-b">
      <div className="flex flex-row">
        <h1 className="p-4 font-bold">Concept</h1>
        <ul className="flex flex-row">
          <li>
            <Link href="/">
              <a className="block p-4">Notes</a>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <button className="p-4">Me</button>
        <button className="p-4 font-bold text-red-600">Sign out</button>
      </div>
    </nav>
  );
}
