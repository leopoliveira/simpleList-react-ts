import "./tableMainStyle.css";
import "./tableMainStyle.css";
import { Tablerow } from "./Tablerow/Tablerow";
import { Tablecategory } from "./Tablecategory/Tablecategory";
import { ApiMock } from "../../helpers/ApiMock";

type Props = {
  filterText: string;
  checkIsStocked: boolean;
};

function filterProductByCategory(
  categoryName: string,
  filterText: string,
  inStock: boolean
): JSX.Element[] {
  let elements: JSX.Element[] = [];

  const filteredData = ApiMock.filter((data) => {
    const categoryNameCondition = data.category === categoryName;
    const searchTermCondition =
      filterText.length <= 1 ||
      data.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase());
    const inStockCondition = inStock ? data.stocked : true;

    return categoryNameCondition && searchTermCondition && inStockCondition;
  });

  if (filteredData.length > 0) {
    elements = filteredData.map((item) => (
      <Tablerow
        key={item.name}
        name={item.name}
        price={item.price}
        isStocked={item.stocked}
      />
    ));
  }

  return elements;
}

export const TableMain = (props: Props) => {
  return (
    <tbody>
      <tr>
        <th>
          <span className="table-column-title">Name</span>
        </th>
        <th>
          <span className="table-column-title">Price</span>
        </th>
      </tr>
      <Tablecategory title="Fruits" />
      {filterProductByCategory(
        "Fruits",
        props.filterText,
        props.checkIsStocked
      )}
      <Tablecategory title="Vegetables" />
      {filterProductByCategory(
        "Vegetables",
        props.filterText,
        props.checkIsStocked
      )}
    </tbody>
  );
};
