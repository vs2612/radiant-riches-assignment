import React from 'react'
import image from '../assets/download1.png'
import styles from '../Styles/relatedeals.module.css'
const deals = [
  {
    web: "Webbuilder 1"
  },
  {
    web: "Webbuilder 2"
  },
  {
    web: "Webbuilder 3"
  },
]
const RelatedDeals = () => {
  return (
    <>
      <h2 className={styles.mainhead}>Related Deals you might like for</h2>
      <div className={styles.container}>
        {deals.map((deal) =>
          <div className={styles.cardContainer}>
            <div className={styles.image}>
              <img src={image} alt="" className={styles.builder} />
            </div>
            <div className={styles.quality}>
              <button>20% Off</button>
              <button>Limited Time</button>
            </div>
            <div className={styles.heading}>
              {deal.web}
            </div>
            <div className={styles.detail}>
              Computer Modern classic with wix support
            </div>
            <div className={styles.pricing}>
              <div className={styles.pricing1}>$39.96</div>
              <div className={styles.pricing2}>$49.96</div>
              <div className={styles.pricing3}>(20% Off)</div>
            </div>
            <div className={styles.view}>
              <button>View Deal</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default RelatedDeals