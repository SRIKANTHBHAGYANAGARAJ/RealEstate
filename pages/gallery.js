import AvailableApartment from "@/components/templates/gallery/AvailableApartment/AvailableApartment";
import AvailableVillas from "@/components/templates/gallery/AvailableVillas/AvailableVillas";
import galleryModel from "@/models/gallery";
import connectToDB from "@/utils/db";

export default function gallery({ gallery }) {
  return (
    <div className="m-5 my-14">
      <AvailableVillas data={gallery} />
      <AvailableApartment data={gallery} />
    </div>
  );
}
export async function getStaticProps() {
  connectToDB();
  const gallery = await galleryModel.find({});

  return {
    props: {
      gallery: JSON.parse(JSON.stringify(gallery)),
    },
  };
}
// use json-server fake restfull api
// export async function getStaticProps() {
//   const galleryResponse = await fetch("http://localhost:4001/gallery");
//   const galleryData = await galleryResponse.json();

//   return {
//     props: {
//       data: {
//         galleries: galleryData,
//       },
//     },
//   };
// }
