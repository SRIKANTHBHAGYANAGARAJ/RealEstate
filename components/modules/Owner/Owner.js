export default function Owner({ img, name, estate }) {
  return (
    <div className="flex justify-center items-center gap-2 my-2">
      <img src={img} alt={name} className="rounded-full max-h-16" />
      <div className="text-center">
        <p>{name}</p>
        <sub>{estate} فروش خانه</sub>
      </div>
    </div>
  );
}
