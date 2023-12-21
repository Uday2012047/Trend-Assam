import React, { Fragment, useEffect } from "react";
import "./home.css";
import ProductCard from "./ProductCard";
import Metadata from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";
import bannerlogo from "../../assets/brand.png";

import open from "../../images/open.jpg";
import tren from "../../images/tren.jpg";
import sum from "../../images/sum.jpg";
import sale from "../../images/sale.jpg";
import dora from "../../images/dora.jpg";

import koina from "../../images/koina.jpg";
import marry from "../../images/couple.jpeg";
import gamusa from "../../images/gamusa.jpg";
import him from "../../images/him.jpg";
import her from "../../images/her.jpg";
import kidhe from "../../images/kidhe.jpg";
import kidher from "../../images/kidshe.jpg";
import ahom from "../../images/ahom.jpg";

import mising from "../../images/mising.jpg";
import bodo from "../../images/bodo.jpeg";
import muga from "../../images/muga.jpg";
import eri from "../../images/eri.jpeg";
import jura from "../../images/jura.jpg";
import mekhela from "../../images/mekhela.jpg";
import sador from "../../images/sador.jpg";
import exp from "../../images/axom.jpg";
import toss from "../../images/toss.jpeg";

// import anin from "../../images/anin.jpeg";
// import riju from "../../images/riju.jpeg";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Gamusa Gogamukh-Assamese Traditional Attire" />

          <div className="banner">
            <div className="banner-text">
              <img src={bannerlogo} alt="Gamusa" />
            </div>
          </div>
          <CategoryList />
          <div className="home-container">
            <div className="looking-for">
              <div className="looking-for-item">
                <Link to="/products/deal">
                  <div className="looking-for-text-container">
                    <img src={open} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>OPENING OFFER</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/deals">
                  <div className="looking-for-text-container">
                    <img src={sum} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>SUMMER DEALS</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/tren">
                  <div className="looking-for-text-container">
                    <img src={tren} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>TRENDING</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/deals">
                  <div className="looking-for-text-container">
                    <img src={sale} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>SALES</h5>
                </div>
              </div>
            </div>

            <Link to="/products" className="justContainer"></Link>
            <div className="container" id="container">
              {products &&
                products.map((products) => <ProductCard product={products} />)}
            </div>
            {/* <Link className="show-all" to="/products">
              SHOW ALL
            </Link> */}

            <Link to="/products/marry" className="marryContainer">
              <div></div>
            </Link>

            <div className="looking-for">
              <div className="looking-for-item">
                <Link to="/products/groom">
                  <div className="looking-for-text-container">
                    <img src={dora} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>GROOM</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/bride">
                  <div className="looking-for-text-container">
                    <img src={koina} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>BRIDE</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/gamusa">
                  <div className="looking-for-text-container">
                    <img src={gamusa} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>GAMUSA</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/marry">
                  <div className="looking-for-text-container">
                    <img src={marry} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>EXPLORE</h5>
                </div>
              </div>
            </div>

            <div className="giftContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <div className="looking-for-item">
                <Link to="/products/boy">
                  <div className="looking-for-text-container">
                    <img src={him} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>FOR HIM</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/girl">
                  <div className="looking-for-text-container">
                    <img src={her} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>FOR HER</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/bboy">
                  <div className="looking-for-text-container">
                    <img src={kidhe} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>KID HE</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/bgirl">
                  <div className="looking-for-text-container">
                    <img src={kidher} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>KID SHE</h5>
                </div>
              </div>
            </div>

            <div className="ethContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <div className="looking-for-item">
                <Link to="/products/ahom">
                  <div className="looking-for-text-container">
                    <img src={ahom} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>AHOM</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/mising">
                  <div className="looking-for-text-container">
                    <img src={mising} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>MISING</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/bodo">
                  <div className="looking-for-text-container">
                    <img src={bodo} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>BODO</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/tribe">
                  <div className="looking-for-text-container">
                    <h4>Explore the indigineous Community Attire </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>EXPLORE</h5>
                </div>
              </div>
            </div>

            <div className="axomContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <div className="looking-for-item">
                <Link to="/products/muga">
                  <div className="looking-for-text-container">
                    <img src={muga} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>MUGA</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/paat">
                  <div className="looking-for-text-container">
                    <h4>Paat clothing of Gamusa</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>PAAT</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/eri">
                  <div className="looking-for-text-container">
                    <img src={eri} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>ERI</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/toss">
                  <div className="looking-for-text-container">
                    <img src={toss} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>TOSS</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/mekhela">
                  <div className="looking-for-text-container">
                    <img src={mekhela} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>MEKHELA</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/sador">
                  <div className="looking-for-text-container">
                    <img src={sador} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>SADOR</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/jura">
                  <div className="looking-for-text-container">
                    <img src={jura} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>JURA</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products">
                  <div className="looking-for-text-container">
                    <img src={exp} alt="gamusa" />
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>EXPLORE</h5>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/+916001098923"
              target="_blank"
              rel="noreferrer"
              className="customContainer"
            >
              <div></div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@gamusagugamukh2751"
              className="youContainer"
            >
              <div></div>
            </a>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
