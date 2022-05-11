import React, { Component } from "react";
import { connect } from "react-redux";

import Image from "../../assets/images.png";
// import CountPlot from "../CountPlot/CountPlot";
import { createDiabete } from "../../actions/diabetes";
import DiabeteForm from "../DiabeteForm/DiabeteForm";

class Diabetes extends Component {
  onSubmit = (formValues) => {
    this.props.createDiabete(formValues);
  };
  renderCancers() {
    if (this.props.cancers === "0") {
      return (
        <p className="intro1_layout2">
          Based on your information our model predicts benign Class breast
          masses may not put you at a risk for breast cancer
          <p>* notes this web prediction is based on data set may</p>
        </p>
      );
    }
    if (this.props.cancers === "1") {
      return (
        <p className="intro1_layout2">
          Based on your information our model predicts Malignant Class breast
          masses may put you at a risk for breast cancer please see doctor as
          soon as Possible
          <p>* notes this web prediction is based on data set may</p>
        </p>
      );
    } else {
      return (
        <div>
          <DiabeteForm onSubmit={this.onSubmit} />
        </div>
      );
    }
  }

  render() {
    // const Malignant = this.props.cancers.filter((cancer) => {
    //   return cancer.diagnosis === "M";
    // }).length;
    // const Benign = this.props.cancers.filter((cancer) => {
    //   return cancer.diagnosis === "B";
    // }).length;
    return (
      <div className="Diabete">

        {/* <div className="container">
            <div className="justify-content-center">
              <CountPlot
                titleText="Breast Cancer Diagnosis"
                firstLable="Malignant"
                secoundLable="Benign"
                firstData={Malignant}
                secoundData={Benign}
              />
            </div>
            <div className="justify-content-center">
              <p id="d593" className="intro1_lay1" data-selectable-paragraph="">
                Number of patients that are Malignant: {`${Malignant}`}
              </p>
              <p id="d593" className="intro1_lay1" data-selectable-paragraph="">
                Number of patients that are Benign: {`${Benign}`}
              </p>
            </div>
          </div> */}

        <section className="layout1">
          <div className="container">
            <div className="ui segment">
              <h1
                id="1f24"
                className="kw kx ji bn ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq lr ls lt gc"
                data-selectable-paragraph=""
              >
                <strong className="ba">Diabetes Prediction</strong>
              </h1>
              {this.renderCancers()}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Diabetes: state.diabetes.cancerResult,
  };
};
export default connect(mapStateToProps, { createDiabete })(Diabetes);
