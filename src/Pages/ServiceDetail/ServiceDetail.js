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
    <Card style={{ width: "25rem" }} className="text-center mx-auto my-5">
      <Card.Img variant="top" src={detailedService[0]?.image} />
      <Card.Body>
        <Card.Title>{detailedService[0]?.title}</Card.Title>
        <Card.Text>{detailedService[0]?.description}</Card.Text>
        <Button variant="primary">Make Appointment</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceDetail;
