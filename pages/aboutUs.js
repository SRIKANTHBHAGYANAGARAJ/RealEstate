import Information from "@/components/modules/information/information";
import CooperationNetwork from "@/components/templates/aboutUs/CooperationNetwork/CooperationNetwork";
import History from "@/components/templates/aboutUs/History/History";
import OurServices from "@/components/templates/aboutUs/OurServices/OurServices";
import aboutUsModel from "@/models/aboutUs";
import ourServiceModel from "@/models/OurService";
import connectToDB from "@/utils/db";

export default function aboutUs({ data }) {
  return (
    <>
      {/* تاریخچه */}
      <History />
      {/* شبکه همکاری فروش املاک */}
      <CooperationNetwork />
      {/* خدمات ما */}
      <OurServices OurServices={data.OurServices} />
      {/* راه های ارتباطی */}
      <Information data={data.aboutUs} />
    </>
  );
}
export async function getStaticProps() {
  connectToDB();
  const aboutUs = await aboutUsModel.find({});
  const ourService = await ourServiceModel.find({});

  return {
    props: {
      data: {
        OurServices: JSON.parse(JSON.stringify(ourService)),
        aboutUs: JSON.parse(JSON.stringify(aboutUs)),
      },
    },
  };
}
