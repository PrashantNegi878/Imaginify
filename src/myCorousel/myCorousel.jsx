import Carousel from 'react-bootstrap/Carousel';
import './myCorousel.css';

function MyCorousel(props) {
{  
    const items=props.result;
    // console.log(items)
  return (
    <Carousel className='mt-5' fade>
    {items.map(item=>
    <Carousel.Item className="mx-auto">
        <img
          className="d-block h-100 w-100 "
          src={item[1]}
          alt="First slide"
        />
        {/* {console.log(item[1][0])} */}
        <Carousel.Caption className="story-text">
          <p>{item[0]}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )}
    </Carousel>
    )}
  }

export default MyCorousel;