import { BASE_API_URL } from "../../utils/constants";
import { Card, CardBody, CardHead } from "./styled";

function CategoryCard({ imageUrl, name }) {
  return (
    <Card>
      <CardHead>
        <img src={`${BASE_API_URL}${imageUrl}`} alt={name} />
      </CardHead>
      <CardBody>{name}</CardBody>
    </Card>
  );
}

export default CategoryCard;
