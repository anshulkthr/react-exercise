import { ListConatiner, Item, ItemTitle, Img } from "../Style/Common";

const List = (props) => {
  if (props.items.length > 0) {
    return (
      <ListConatiner>
        {props.items.map((result) => {
          return (
            <Item
              key={result.data[0].nasa_id}
              data-media={result.data[0].media_type}
            >
              <Img src={result.links[0].href}></Img>
              <ItemTitle>{result.data[0].title.substring(0, 30)}</ItemTitle>
            </Item>
          );
        })}
      </ListConatiner>
    );
  } else {
    return <h1>Not Found</h1>;
  }
};

export default List;
