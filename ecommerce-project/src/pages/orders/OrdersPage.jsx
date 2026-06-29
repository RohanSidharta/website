import axios from "axios";
import { useState, useEffect,Fragment } from "react";

import { Header } from "../../components/Header";
import "./orders.css";
import { Link } from "react-router";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { Productdetails } from "./ProductDetails";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <>
                <div className="order-container">
                  <div className="order-header">
                    <div className="order-header-left-section">
                      <div className="order-date">
                        <div className="order-header-label">Order Placed:</div>
                        <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                      </div>
                      <div className="order-total">
                        <div className="order-header-label">Total:</div>
                        <div>{formatMoney(order.totalCostCents)}</div>
                      </div>
                    </div>

                    <div className="order-header-right-section">
                      <div className="order-header-label">Order ID:</div>
                      <div>{order.id}</div>
                    </div>
                  </div>

                  <div className="order-details-grid">
                    {order.products.map((orderProduct) => {
                      return (
                        <Fragment key={orderProduct.product.id}>
                          <div className="product-image-container">
                            <img src={orderProduct.product.image} />
                          </div>

                          <Productdetails orderProduct={orderProduct}/>

                          <div className="product-actions">
                            <Link to="/tracking">
                              <button className="track-package-button button-secondary">
                                Track package
                              </button>
                            </Link>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}

        </div>
      </div>
    </>
  );
}
