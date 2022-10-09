import type { NextPage } from "next";
import Layout from "../components/Layout";
import { INote, Note } from "../components/notes";

type Props = {
  notes: INote[];
};

export async function getServerSideProps() {
  const notes: INote[] = [
    { id: 1, body: "this is a note" },
    { id: 2, body: "this is a note2" },
    { id: 3, body: "this is a note3" },
    { id: 4, body: "this is a note4" },
    { id: 4, body: "this is a note5" },
    { id: 5, body: "this is a note5" },
    { id: 6, body: "this is a note6" },
    { id: 7, body: "this is a note7" },
    { id: 8, body: "this is a note8" },
  ];

  return {
    props: {
      notes,
    },
  };
}

const Home: NextPage<Props> = ({ notes }) => {
  return (
    <Layout>
      <h1 className="mb-5 text-3xl">Notes</h1>

      <ul className="grid grid-flow-row grid-cols-4 gap-4">
        {notes.map((note) => (
          <li key={note.id} className="w-full">
            <Note note={note} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
