import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProdSpecs.module.css';
import { ProductsTemplate } from '../Products';

export function ProdSpecs() {
  const { id } = useParams();
  const [productsBase, setProductsBase] = React.useState([]);

  React.useEffect(() => {
    // const url: any = `https://639de55b1ec9c6657bb515e8.mockapi.io/items`;
    // fetch(`https://639de55b1ec9c6657bb515e8.mockapi.io/items`)
    fetch(`https://dummyjson.com/products?skip=0&limit=100`)
      .then((res) => res.json())
      .then((dataBase) =>
        setProductsBase(
          dataBase.products.filter(
            (item: ProductsTemplate) => item.id === Number(id)
          )
        )
      );
  }, [id]);
  console.log('PRODBASE: ', productsBase);
  return (
    <div className={styles.section}>
      {productsBase.map((item: ProductsTemplate) => {
        return (
          <div className={styles.card}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.specs}>
              <div className={styles.img_wrapper}>
                <div className={styles.main_img}>
                  <img
                    className={styles.main_img}
                    src={item.thumbnail}
                    alt='main view'
                  />
                </div>
                <div className={styles.all_images}>
                  {item.images.map((imgItem: string) => {
                    return (
                      <div className={styles.img_box}>
                        <img
                          className={styles.mini_img}
                          src={imgItem}
                          alt='product`s view'
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.info}>{item.description}</div>
              <div className={styles.price}>${item.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
