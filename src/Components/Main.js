import { useEffect, useState } from "react";
import Filter from "./Filter";
import List from "./List";
import { Search } from "./Utils";

const Main = () => {
  const [item, setItem] = useState([]);

  const filterData = (filterObj = {}) => {
    Search(filterObj).then((result) => {
      if (result && result.data.collection.items.length > 0) {
        setItem(result.data.collection.items.slice(0, 10));
      } else {
        setItem(result.data.collection.items);
      }
    });
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <div className="cruk">
      <Filter filterData={filterData} />
      <List items={item} />
    </div>
  );
};

export default Main;
