import "./tablecategoryStyles.css";

type Props = {
  title: string;
};

export const Tablecategory = ({ title }: Props) => {
  return (
    <>
      <tr>
        <td colSpan={2}>
          <p className="category-name">{title}</p>
        </td>
      </tr>
    </>
  );
};
