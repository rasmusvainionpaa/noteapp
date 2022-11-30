import type { GetServerSidePropsContext, NextPage } from "next";
import Layout from "src/components/Layout";
import { INote, Note } from "src/components/notes";

type Props = {
  note: INote;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {},
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
