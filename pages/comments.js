import Title from "@/components/modules/title/Title";
import CommentOfPropertyBuyers from "@/components/templates/comments/CommentOfPropertyBuyers/CommentOfPropertyBuyers";
import CommentOfPropertyTenants from "@/components/templates/comments/CommentOfPropertyTenants/CommentOfPropertyTenants";
import commentModel from "@/models/comment";
import connectToDB from "@/utils/db";
import "swiper/css";

export default function comments({ comments }) {
  return (
    <div className="m-11">
      <Title text="با افتخار کامنت های سایت" />
      <CommentOfPropertyBuyers data={comments} />
      <CommentOfPropertyTenants data={comments} />
    </div>
  );
}
export async function getStaticProps() {
  connectToDB();
  const comments = await commentModel.find({});

  return {
    props: {
      comments: JSON.parse(JSON.stringify(comments)),
    },
    revalidate: 60 * 60 * 12,
  };
}
