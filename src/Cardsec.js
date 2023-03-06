import React from "react";

export default function Cardsec() {
  return (
    <div>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              Plus
            </h5>
            <h6 className="card-price text-center">
              $9<span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                <strong>5 Users</strong>
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                50GB Storage
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Unlimited Public Projects
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Community Access
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Unlimited Private Projects
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Dedicated Phone Support
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                Free Subdomain
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times" />
                </span>
                Monthly Status Reports
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
