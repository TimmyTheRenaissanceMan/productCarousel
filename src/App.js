import "./App.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Carousel, Container } from "react-bootstrap/";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const resizeFunction = () => {
    setWindowSize(() => {
      return window.innerWidth;
    });
  };

  window.addEventListener(
    "resize",
    function (event) {
      resizeFunction();
    },
    true
  );

  const cardInfo = [
    {
      title: "THIS IS A TITLE",
      p1: "Place some text in here",
      p2: "place more text in here",
      href: "/products/view/61f5295264350f2c4c58c7ef",
      img:
        "https://image.shutterstock.com/image-photo/body-skin-health-care-style-600w-1704162568.jpg",
      bg: "#cfbaf0",
    },
    {
      title: "THIS IS A TITLE",
      p1: "Place some text in here",
      p2: "place more text in here",
      href: "/products/view/61f5295264350f2c4c58c7ef",
      img:
        "https://image.shutterstock.com/image-photo/body-skin-health-care-style-600w-1704162568.jpg",
      bg: "#d9ed92",
    },
  ];

  return (
    <div>
      <Carousel style={{ height: "auto" }}>
        {cardInfo.map((info, index) => {
          return CarouselCard({
            info: info,
            windowSize: windowSize,
            key: index,
          });
        })}
      </Carousel>
      <BestSellers windowSize={windowSize} />
    </div>
  );
}

const CarouselCard = (props) => {
  const [itemHeight, setItemHeight] = useState();
  const [windowSize, setWindowSize] = useState(props.windowSize);
  const [colHeight, setColHeight] = useState();
  const adjustHeight = () => {
    switch (true) {
      case window.innerWidth <= 770 && itemHeight != { height: "80vh" }:
        setItemHeight({ height: "80vh" });
        setColHeight({
          margin: "0",
          padding: "0",
          display: "inline-flex",
          height: "50%",
        });
        break;
      case window.innerWidth > 770 && itemHeight != { height: "35vw" }:
        setItemHeight({ height: "35vw" });
        setColHeight({
          margin: "0",
          padding: "0",
          display: "inline-flex",
          height: "100%",
        });
        break;
    }
  };

  if (windowSize != props.windowSize) {
    setWindowSize(props.windowSize);
    adjustHeight();
  }

  useEffect(() => {
    if (!itemHeight) {
      adjustHeight();
    }
  }, []);
  return (
    <Carousel.Item key={props.key} style={itemHeight}>
      <Row className="w-100" style={{ margin: "0", height: "100%" }}>
        <Col md={"6"} xs={"12"} style={colHeight}>
          <img
            className=""
            src={props.info.img}
            alt="First slide"
            style={{
              display: "inline-block",
              marginTop: "auto",
              marginBottom: "auto",
              objectFit: "contain",
              width: "100%",
            }}
          />
        </Col>
        <Card
          md={"6"}
          xs={"12"}
          as={Col}
          className="text-center"
          style={{
            display: "inline-flex",
            flexDirection: "row",
            border: "0",
            backgroundColor: props.info.bg,
            placeContent: "center flex-start",
            alignItems: "center",
          }}
        >
          <Card.Body>
            <h3 style={{ fontWeight: "400", fontSize: "calc(20px + 1vw)" }}>
              {props.info.title}
            </h3>
            <p
              className=""
              style={{ marginTop: "5%", fontSize: "calc(12px + 1vw)" }}
            >
              {props.info.p1}
            </p>
            <Button className="buyNow" href={props.info.href}>
              Buy
            </Button>
            <p
              style={{
                fontWeight: "300",
                marginTop: "4%",
                fontSize: "calc(12px + 1vw)",
              }}
            >
              {props.info.p2}
            </p>
          </Card.Body>
        </Card>
      </Row>
    </Carousel.Item>
  );
};

const BestSellers = (props) => {
  const [chunks, setChunks] = useState([]);
  const [windowSize, setWindowSize] = useState(props.windowSize);
  const productsData = [
    {
      name: "Item Name",
      discount: {
        amount: 0,
        percentage: 0,
      },
      price: 20,
      images: [
        "https://image.shutterstock.com/image-vector/glass-cream-jar-cosmetic-container-600w-2068663541.jpg",
        "https://image.shutterstock.com/image-vector/cosmetic-jar-cream-packaging-blank-600w-1553494700.jpg",
      ],
      cardDescription: "Item Description",
    },
    {
      name: "Item Name",
      discount: {
        amount: 18,
        percentage: 10,
      },
      price: 20,
      images: [
        "https://image.shutterstock.com/image-vector/glass-cream-jar-cosmetic-container-600w-2068663541.jpg",
        "https://image.shutterstock.com/image-vector/cosmetic-jar-cream-packaging-blank-600w-1553494700.jpg",
      ],
      cardDescription: "Item Description",
    },
    {
      name: "Item Name",
      discount: {
        amount: 0,
        percentage: 0,
      },
      price: 20,
      images: [
        "https://image.shutterstock.com/image-vector/glass-cream-jar-cosmetic-container-600w-2068663541.jpg",
        "https://image.shutterstock.com/image-vector/cosmetic-jar-cream-packaging-blank-600w-1553494700.jpg",
      ],
      cardDescription: "Item Description",
    },
    {
      name: "Item Name",
      discount: {
        amount: 18,
        percentage: 10,
      },
      price: 20,
      images: [
        "https://image.shutterstock.com/image-vector/glass-cream-jar-cosmetic-container-600w-2068663541.jpg",
        "https://image.shutterstock.com/image-vector/cosmetic-jar-cream-packaging-blank-600w-1553494700.jpg",
      ],
      cardDescription: "Item Description",
    },
    {
      name: "Item Name",
      discount: {
        amount: 18,
        percentage: 10,
      },
      price: 20,
      images: [
        "https://image.shutterstock.com/image-vector/glass-cream-jar-cosmetic-container-600w-2068663541.jpg",
        "https://image.shutterstock.com/image-vector/cosmetic-jar-cream-packaging-blank-600w-1553494700.jpg",
      ],
      cardDescription: "Item Description",
    },
  ];

  const sliceIntoChunks = (array) => {
    let chunkSize = 0;
    if (window.innerWidth > 960) {
      chunkSize = 3;
    } else if (window.innerWidth <= 960 && window.innerWidth > 775) {
      chunkSize = 2;
    } else {
      chunkSize = 1;
    }
    const output = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      output.push(chunk);
    }
    if (output[0] != chunks[0]) {
      setChunks(() => {
        return output;
      });
    }
  };

  if (windowSize != props.windowSize) {
    setWindowSize(props.windowSize);
    sliceIntoChunks(productsData);
  }

  useEffect(() => {
    sliceIntoChunks(productsData);
  }, []);

  return (
    <div className="text-center">
      <Carousel
        className="productView"
        indicators={false}
        style={{ height: "20%", marginBottom: "50px", maxHeight: "" }}
      >
        {chunks.map((chunk, index) => {
          return (
            <Carousel.Item key={index} style={{ height: "100%" }}>
              <Container>
                <Row style={{ margin: "0", height: "100%" }}>
                  {chunk.map((product, inx) => {
                    return (
                      <Col
                        key={inx}
                        className="mx-auto"
                        lg={"4"}
                        md={"6"}
                        sm={"12"}
                        xs={"12"}
                      >
                        <ProductCard key={product._id} data={product} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

const ProductCard = (props) => {
  const [imageSrc, setImageSrc] = useState(props.data.images[0]);

  const hoverOn = () => {
    setImageSrc(props.data.images[1]);
  };

  const hoverOff = () => {
    setImageSrc(props.data.images[0]);
  };

  return (
    <Card
      className="pb-5"
      style={{ border: "none", position: "relative" }}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      <a href={`/products/view/` + props.data._id}>
        <img
          style={{
            objectFit: "contain",
            width: "100%",
            height: "40vh",
            maxHeight: "420",
            cursor: "pointer",
          }}
          src={imageSrc}
        />
      </a>
      <Card.Body
        className="text-center"
        style={{ height: "220px", position: "relative" }}
      >
        <Card.Text
          className="text-center mb-1"
          style={{ fontWeight: "500", maxHeight: "50px", overflow: "hidden" }}
        >
          {props.data.name}
        </Card.Text>
        <Card.Text
          className="text-center mb-2"
          style={{ maxHeight: "50px", overflow: "hidden" }}
        >
          {props.data.cardDescription}
        </Card.Text>
        <Card.Text
          className="text-center"
          style={{ fontSize: ".9rem", height: "auto" }}
        >
          <span
            className="mb-1"
            style={
              props.data.discount.amount > 0
                ? { textDecoration: "line-through" }
                : {}
            }
          >
            $ {props.data.price}
          </span>
          {props.data.discount.amount > 0 ? (
            <span className="mb-1 d-block" style={{ color: "red" }}>
              - {props.data.discount.percentage}%
            </span>
          ) : (
            ""
          )}
          {props.data.discount.amount > 0 ? (
            <span style={{ color: "red" }}>$ {props.data.discount.amount}</span>
          ) : (
            ""
          )}
        </Card.Text>

        <Button className="addToCart" size="sm">
          ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  );
};

export default App;
