import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";

const ServiceDetail = () => {
  const { id } = useParams();
  const [services] = useFetch();
  const detailedService = services?.filter(
    (filteredService) => filteredService.id === id
  );
  // console.log(detailedService);
  return (
    <Card style={{ width: "18rem" }} className="text-center mx-auto my-5">
      <Card.Img variant="top" src={detailedService[0]?.image} />
      <Card.Body>
        <Card.Title>{detailedService[0]?.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceDetail;
