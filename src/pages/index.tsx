import type { NextPage } from "next";
import Layout from "../components/Layout";
import { INote, Note } from "../components/notes";

type Props = {
  notes: INote[];
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Home: NextPage<Props> = ({ notes }) => {
  return (
    <Layout>
      <h1 className="mb-5 text-3xl">Notes</h1>
    </Layout>
  );
};

export default Home;
