import Card from "./Card";

const Other = () => {
  return (
    <section className="pt-4 mb-10">
      <hr className="border-1" />
      {/* HEADER */}
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 gap-10">
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
      </div>
    </section>
  );
};
export default Other;
