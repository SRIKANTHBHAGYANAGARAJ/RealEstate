import Estate from "@/components/modules/estate/estate";
import PaginationButton from "@/components/templates/home/index/PaginationButton";
import EstateNotFound from "@/components/templates/home/index/estateNotFound";
import SearchBox from "@/components/templates/home/index/searchBox";
import estateModel from "@/models/Estate";
import connectToDB from "@/utils/db";
import { useEffect, useState } from "react";

function home({ estate }) {
  // copy estates
  const [homes, setHomes] = useState(estate);

  const [sort, setSort] = useState("-1");
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");
  const pageItem = 3;

  // search data
  useEffect(() => {
    const newHomes = estate.filter((home) => home.title.includes(search));
    setHomes(newHomes);
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }
      case "room": {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      case "meterage": {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(newHomes);
        break;
      }
      default: {
        // do not work
        setHomes([...homes]);
      }
    }
  }, [sort]);

  const paginateHandler = (event, page) => {
    event.preventDefault();
    setActivePage(page);
    // paginated
    const endIndex = pageItem * page;
    const startIndex = endIndex - pageItem;

    const paginatedHomes = estate.slice(startIndex, endIndex);
    setHomes(paginatedHomes);
  };
  return (
    <>
      <SearchBox
        sort={sort}
        setSort={setSort}
        search={search}
        setSearch={setSearch}
      />
      {estate.length > 0 && homes.length > 0 ? (
        <>
          {/* املاک */}
          <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8 my-16">
            {homes.slice(0, pageItem).map((estate) => {
              return <Estate key={estate._id} {...estate} />;
            })}
          </section>
          {/* pagination */}
          <PaginationButton
            estate={estate}
            pageItem={pageItem}
            activePage={activePage}
            paginateHandler={paginateHandler}
          />
        </>
      ) : (
        <EstateNotFound />
      )}
    </>
  );
}
export async function getStaticProps() {
  connectToDB();
  const estates = await estateModel.find({});

  return {
    props: {
      estate: JSON.parse(JSON.stringify(estates)),
    },
    revalidate: 60 * 60 * 12,
  };
}
export default home;
