import Feature from "@/components/modules/feature/feature";

export default function Features({ feature }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-16 mx-4">
      {feature?.map((feature, index) => {
        return (
          <Feature key={index} {...feature}>
            {feature.description}
          </Feature>
        );
      })}
    </section>
  );
}
