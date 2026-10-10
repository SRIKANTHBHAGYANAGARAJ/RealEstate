import ConnectMe from "@/components/templates/conectMe/connectMe";
import aboutUsModel from "@/models/aboutUs";
import connectToDB from "@/utils/db";

export default function conectMe({ aboutUs }) {
  return (
    <>
      <ConnectMe aboutUs={aboutUs} />
    </>
  );
}
export async function getStaticProps() {
  connectToDB();
  const aboutUs = await aboutUsModel.find({});

  return {
    props: {
      aboutUs: JSON.parse(JSON.stringify(aboutUs)),
    },
    revalidate: 60 * 60 * 12,
  };
}
