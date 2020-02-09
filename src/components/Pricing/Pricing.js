import React, { Component } from 'react';

export default class Pricing extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="flex-container">
          <div className="row">
            <div className="flex-item">
              <div className="pricing-rectangle1"></div>
            </div>
            <div className="flex-item">
              <div className="pricing-rectangle2"></div>
            </div>
            <div className="flex-item">
              <div className="text-center">
                <img
                  className="img-responsive img"
                  src="images/pricing_page_image.png"
                  alt="pricing-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
