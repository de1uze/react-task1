import React from "react";

export default function Cardthird() {
  return (
    <div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              Pro
            </h5>
            <h6 className="card-price text-center">
              $49<span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                <strong>Unlimited Users</strong>
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
                </span>
                150GB Storage
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
                <strong>Unlimited</strong> Free Subdomains
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check" />
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
