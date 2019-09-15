import React from "react";
import { MDBBtn, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import slide1 from './data/slide1.jpg';
import slide2 from './data/slide2.jpg';
import slide3 from './data/slide3.jpg';
import slide4 from './data/slide4.jpg';
import slide5 from './data/slide5.png';

const CarouselPage = () => {
  return (
    <>
      <MDBCarousel
      activeItem={1}
      length={4}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">
              Lorem ipsum dolor sit amet consectetur adipiscing elit habitant purus
            </h3>
            <MDBBtn
              color="danger"
              rounded
            >
              Actúa
            </MDBBtn>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">
              Lorem ipsum dolor sit amet consectetur adipiscing elit habitant purus
            </h3>
            <MDBBtn
              color="danger"
              rounded
            >
              Actúa
            </MDBBtn>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">
              Lorem ipsum dolor sit amet consectetur adipiscing elit habitant purus
            </h3>
            <MDBBtn
              color="danger"
              rounded
            >
              Actúa
            </MDBBtn>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src={slide4}
              alt="Third slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
          <h3 className="h3-responsive">
            Lorem ipsum dolor sit amet consectetur adipiscing elit habitant purus
          </h3>
            <MDBBtn
              color="danger"
              rounded
            >
              Actúa
            </MDBBtn>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </>
  );
}

export default CarouselPage;
