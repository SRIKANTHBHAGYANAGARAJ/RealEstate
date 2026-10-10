import TheBestDecisionSection from "@/components/templates/index/TheBestDecisionSection/TheBestDecisionSection";
import Estates from "@/components/templates/index/estates/estates";
import Features from "@/components/templates/index/features/features";
import Gallery from "@/components/templates/index/gallery/gallery";
import estateModel from "@/models/Estate";
import featureModel from "@/models/feature";
import connectToDB from "@/utils/db";

function index({ feature, estate }) {
  return (
    <>
      {/* ویژگی ها */}
      <Features feature={feature} />
      {/* تعریف :) */}
      <TheBestDecisionSection />
      {/* املاک */}
      <Estates estate={estate} />
      {/* گالری */}
      <Gallery />
    </>
  );
}

export async function getStaticProps() {
  connectToDB();
  const estate = await estateModel.find({});
  const feature = await featureModel.find({});
  console.log("estate", estate);
  return {
    props: {
      feature: JSON.parse(JSON.stringify(feature)),
      estate: JSON.parse(JSON.stringify(estate)),
    },
    revalidate: 60 * 60 * 12,
  };
}

export default index;
