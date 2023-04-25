import "./tableRowStyles.css";
type Props = {
  name: string;
  price: string;
  isStocked: boolean;
};

export const Tablerow = (props: Props) => {
  return (
    <>
      <tr className={props.isStocked ? "" : "tablerow-column"}>
        <td>
          <span className="tablerow-column-text">{props.name}</span>
        </td>
        <td>
          <span className="tablerow-column-text">{props.price}</span>
        </td>
      </tr>
    </>
  );
};
