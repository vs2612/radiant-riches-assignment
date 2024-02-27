import React from 'react';
import styles from '../Styles/cards.module.css';
import image from '../assets/download1.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import exceptionalImage from '../assets/IMAGE.png';
import image4 from '../assets/Image4.5.png'
import good4 from '../assets/good4.png'
import tick from '../assets/tick.png'
import { GoTrophy } from "react-icons/go";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const cardDetails = [
  {
    index: 0,
    rating: 9.8,
    feedback: "Exceptional",
    badge: "Best Choice",
    image: exceptionalImage,
    builder: "Builder 1"
  },
  {
    index: 1,
    rating: 9.5,
    feedback: "Exceptional",
    badge: "Best Value",
    image: exceptionalImage,
    builder: "Builder 2"
  },
  {
    index: 2,
    rating: 9.3,
    feedback: "Excellent",
    image: image4,
    builder: "Builder 3"
  },
  {
    index: 3,
    rating: 9,
    feedback: "Impressive",
    image: good4,
    builder: "CDK"
  }
];
const highlights = [
  {
    rating: 9.9,
    quality: "Building Responsive"
  },
  {
    rating: 8.9,
    quality: 'Cool'
  },
  {
    rating: 8.9,
    quality: 'Docs'
  }
]
const uses = [
  {
    case: "Documentation",
    image: tick,
  },
  {
    case: "Easy Use",
    image: tick,
  },
  {
    case: "Out Of Box",
    image: tick,
  },
]

const Cards = () => {
  return (
    <>
      {cardDetails.map((card) => (
        <div key={card.index} className={styles.container}>
          <div className={styles.card}>

            {card.badge && (
              <>
                <div className={styles.badge}>
                  <GoTrophy />
                  <span>{card.badge}</span>
                </div>
              </>
            )}

            <div className={styles.index}>{card.index}</div>
            <div className={styles.img}>
              <img src={image} alt="Card Image" className={styles.image} />
              <div className={styles.build}>
                {card.builder}
              </div>

            </div>
            {card.index !== 4 ?
              <>
                <div className={styles.text}>
                  <p>
                    <span>
                      WixPro 72-Inch Responsive Website Builder
                    </span>
                    - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue).
                  </p>
                  <span className={styles.mainHigh}>Main Highlights </span>
                  <p>
                    [What you get] : Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                  </p>
                  <article>Show More<MdKeyboardArrowDown /></article>
                </div>
                <div className={styles.right}>
                  <div className={styles.smallBox}>
                    <div className={styles.rating}>{card.rating}</div>
                    <div className={styles.feedback}>
                      <span>{card.feedback}</span>
                      <img src={card.image} alt="Exceptional Image" />
                    </div>
                  </div>
                  <button className={styles.button}>View</button>
                </div>
              </>
              :
              <>
                <div className={styles.updatedText}>
                  <p>
                    <span>
                      CDK Responsive Builder
                    </span>
                    - An extensive library of widgets and apps, and detailed step-by-step guides.
                  </p>
                  <span>Main Highlights - </span>
                  <div className={styles.high}>
                    {highlights.map((high) =>
                      <div className={styles.wrapper}>
                        <div className={styles.number}>{high.rating}</div>
                        <div className={styles.quality}>{high.quality}</div>
                      </div>)}

                  </div>
                  {uses.map((use) => <div className={styles.love}>
                    <img src={use.image} alt="" className={styles.tickImg} />
                    <div className={styles.usesText}>{use.case}</div>
                  </div>)}
                  <article>Show More<MdKeyboardArrowDown /></article>

                </div>
                <div className={styles.right4}>
                  <div className={styles.smallBox}>
                    <div className={styles.rating}>{card.rating}</div>
                    <div className={styles.feedback}>
                      <span>{card.feedback}</span>
                      <img src={card.image} alt="Exceptional Image" />
                    </div>
                  </div>
                  <button className={styles.button}>View</button>
                </div>
              </>
            }
          </div>
        </div>
      ))}
      <div className={styles.backupCont}>
        <Carousel className={styles.carousel} showThumbs={false}
          swipeable={true} showIndicators={false} showArrows={false} showStatus={false}
          autoPlay={1600} selectedItem={0} infiniteLoop={true}>
          {cardDetails.map((card) => <div className={styles.carouselContainer}>
            {card.badge && (
              <>
                <div className={styles.Carouselbadge}>
                  <GoTrophy />
                  <span>{card.badge}</span>
                </div>
              </>
            )}
            <div className={styles.Carouselimg}>
              <img src={image} alt="img" className={styles.carimg} />
            </div>
            <div className={styles.Carouselbuild}>
              {card.builder}
            </div>
            <div className={styles.Carouseltext}>
              <p>
                <span>
                  WixPro 72-Inch Responsive Website Builder
                </span>
                - Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue).
              </p>
              <span>Main Highlights </span>
              <p>
                [What you get] : Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
              </p>
              <article>Show More<MdKeyboardArrowDown /></article>
            </div>
            <div className={styles.Carouselrating}>
              <img src={card.image} alt="" />
              <span>{card.rating}</span>
              <span>{card.feedback}</span>
            </div>
            <button className={styles.Carouselbtn}>View</button>
          </div>
          )}
        </Carousel>
      </div>
    </>
  );
};

export default Cards;
