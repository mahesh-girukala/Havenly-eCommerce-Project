import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { productDisplaySection } from "./ProductListData";

const pageTitle = ["Womens", "Men", "Kids", "Brands" ];

const PageTitleCopmponant = () => {
  return (
    <Container>
      <Row>
        <Col className="ProductPageTitle">{pageTitle[0]}</Col>
      </Row>
    </Container>
  );
};
const WomenListData = () => {
  return (
    <div>
      <PageTitleCopmponant /> 
      <Container className="ProductDiplayListWrap">
        {productDisplaySection.map((womensProductData, index) => {
          const { imgURL, productTitle, totalPrice } = womensProductData;
          return (
            <ProductsListData
              key={index}
              imgURL={
                imgURL ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12Af6mYpfA9zKyBzpz7VLrEY_4TzIvYvNi4KLGwyodw&s"
              }
              productTitle={productTitle || "This Product Dont have Title"}
              totalPrice={totalPrice || "Price Will be Available Soon"}
            />  
          );
        })}
      </Container>
    </div>
  );
};

export default WomenListData;

const ProductsListData = (props) => {
  const { imgURL, productTitle, totalPrice } = props;
  return (
    <div>
      <Card className="PDL-Items">
        <Card.Img variant="top" className="ProductImg" src={imgURL} />
        <Card.Body className="CardBodyEnhanceColor">
          <Card.Title className="LayoutProductTitle">{productTitle}</Card.Title>
          <Card.Text className="LayoutProductPrice">{totalPrice}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};


