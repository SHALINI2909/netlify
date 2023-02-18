import React, { useEffect} from "react";
import { Box, Card, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/product_action";

export default function Products() {
  const products = useSelector((store) => store.product.data);
  const { loading, error } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);
  if (loading) {
    return <div> Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  }

  return (
    <Box>
      <Heading>All Products</Heading> 
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} padding="2">
        {products &&
          products.map((item) => {
            return (
              <Link to={`/product/${item.id}`}>
                <Card key={item.id}>
                  <Image src={item.image} alt="pro_image" />
                  <Text>Title: {item.title}</Text>
                  <Text>Category: {item.category}</Text>
                  <Text>Brand: {item.brand}</Text>
                  <Text> ₹ {item.price}</Text>
                </Card>
              </Link>
            );
          })}
      </SimpleGrid>
    </Box>
  );
}
