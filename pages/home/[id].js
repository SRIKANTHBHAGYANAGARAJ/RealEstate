import Deatails from "@/components/templates/home/[id]/deatails/deatails";
import Description from "@/components/templates/home/[id]/description/description";
import EstateModel from "@/models/Estate";
import connectToDB from "@/utils/db";

function HomeDetails({ data }) {
  return (
    <div className="m-5">
      <Deatails estate={data} />
      <Description />
    </div>
  );
}
//ssr
export async function getServerSideProps(context) {
  const { params } = context;
  connectToDB();
  const estate = await EstateModel.findOne({ _id: params.id });

  return {
    props: {
      data: JSON.parse(JSON.stringify(estate)),
    },
  };
}
export default HomeDetails;
