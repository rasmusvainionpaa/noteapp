import type { GetServerSidePropsContext, NextPage } from "next";
import Layout from "src/components/Layout";
import { INote, Note } from "src/components/notes";

type Props = {
  note: INote;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
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

  const findNote = (id: number) => notes.find((note) => note.id === id);
  const note = findNote(parseInt(context.query.id as string, 10) || 0);

  if (!note) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      note,
    },
  };
}

const Home: NextPage<Props> = ({ note }) => {
  return (
    <Layout>
      <h1 className="mb-5 text-3xl">Notes / {note.id}</h1>

      <p>{note.body}</p>
    </Layout>
  );
};

export default Home;
