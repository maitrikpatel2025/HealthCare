import React, { Component } from "react";
import { connect } from "react-redux";

import Image from "../../assets/g12.svg";
// import CountPlot from "../CountPlot/CountPlot";
import { createCancer } from "../../actions/cancer";
import "./BreastCancer.css";
import BreastCancerForm from "../BreastCancerForm/BreastCancerForm";

class BreastCancer extends Component {
  onSubmit = (formValues) => {
    this.props.createCancer(formValues);
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
          <BreastCancerForm onSubmit={this.onSubmit} />
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
      <div className="BreastCancer">
        <section className="layout1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="header_text">
                  <h1
                    id="1f24"
                    className="kw kx ji bn ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq lr ls lt gc"
                    data-selectable-paragraph=""
                  >
                    <strong className="ba">Introduction</strong>
                  </h1>
                  <p
                    id="d35c"
                    className="intro1_layout2"
                    data-selectable-paragraph=""
                  >
                    Breast cancer (BC) is one of the most common cancers among
                    women worldwide, representing the majority of new cancer
                    cases and cancer-related deaths according to global
                    statistics, making it a significant public health problem in
                    today’s society.
                  </p>
                  <p
                    id="5dc4"
                    className="intro1_layout2"
                    data-selectable-paragraph=""
                  >
                    The early diagnosis of BC can improve the prognosis and
                    chance of survival significantly, as it can promote timely
                    clinical treatment to patients. Further accurate
                    classification of benign tumors can prevent patients
                    undergoing unnecessary treatments. Thus, the correct
                    diagnosis of BC and classification of patients into
                    malignant or benign groups is the subject of much research.
                    Because of its unique advantages in critical features
                    detection from complex BC datasets, machine learning (ML) is
                    widely recognized as the methodology of choice in BC pattern
                    classification and forecast modelling.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <span className="img_animat1">
                  <img alt="HomepageImage" src={Image} className="img-fluid" />
                </span>
              </div>
            </div>

            <p
              id="d593"
              className="intro1_layout2"
              data-selectable-paragraph=""
            >
              Classification and data mining methods are an effective way to
              classify data. Especially in medical field, where those methods
              are widely used in diagnosis and analysis to make decisions.
            </p>
            <h2 id="0cd3" className="header_h2" data-selectable-paragraph="">
              Recommended Screening Guidelines:
            </h2>
            <p
              id="0bd9"
              className="intro1_layout2"
              data-selectable-paragraph=""
            >
              <strong className="intro1_layout2">Mammography.</strong> The most
              important screening test for breast cancer is the mammogram. A
              mammogram is an X-ray of the breast. It can detect breast cancer
              up to two years before the tumor can be felt by you or your
              doctor.
            </p>
            <p
              id="9ac1"
              className="intro1_layout2"
              data-selectable-paragraph=""
            >
              <strong className="intro1_layout2">
                Women age 40–45 or older{" "}
              </strong>
              who are at average risk of breast cancer should have a mammogram
              once a year.
            </p>
            <p
              id="134a"
              className="intro1_layout2"
              data-selectable-paragraph=""
            >
              <strong className="intro1_layout2">Women at high risk</strong>{" "}
              should have yearly mammograms along with an MRI starting at age
              30.
            </p>
            <h2 id="c2e3" className="header_h2" data-selectable-paragraph="">
              Some Risk Factors for Breast Cancer
            </h2>
            <p
              id="de1d"
              className="intro1_layout2"
              data-selectable-paragraph=""
            >
              The following are some of the known risk factors for breast
              cancer. However, most cases of breast cancer cannot be linked to a
              specific cause. Talk to your doctor about your specific risk.
            </p>
            <p
              id="8d3e"
              className="intro1_layout2"
              data-selectable-paragraph=""
            >
              <strong className="intro1_layout2">Age.</strong> The chance of
              getting breast cancer increases as women age. Nearly 80 percent of
              breast cancers are found in women over the age of 50.
            </p>
            <p
              id="7d94"
              className="intro1_layout2"
              data-selectable-paragraph=""
            >
              <strong className="intro1_layout2">
                Personal history of breast cancer.
              </strong>{" "}
              A woman who has had breast cancer in one breast is at an increased
              risk of developing cancer in her other breast.
            </p>
            <p
              id="1358"
              className="intro1_layout2"
              data-selectable-paragraph=""
            >
              <strong className="intro1_layout2">
                Family history of breast cancer.
              </strong>{" "}
              A woman has a higher risk of breast cancer if her mother, sister
              or daughter had breast cancer, especially at a young age (before
              40). Having other relatives with breast cancer may also raise the
              risk.
            </p>
            <p
              id="e7a1"
              className="intro1_layout2"
              data-selectable-paragraph=""
            >
              <strong className="intro1_layout2">Genetic factors.</strong> Women
              with certain genetic mutations, including changes to the BRCA1 and
              BRCA2 genes, are at higher risk of developing breast cancer during
              their lifetime. Other gene changes may raise breast cancer risk as
              well.
            </p>
            <p
              id="3f75"
              className="intro1_layout2"
              data-selectable-paragraph=""
            >
              <strong className="intro1_layout2">
                Childbearing and menstrual history.
              </strong>{" "}
              The older a woman is when she has her first child, the greater her
              risk of breast cancer. Also at higher risk are:
            </p>
            <ul className="ui list">
              <li
                id="69b7"
                className="intro1_layout2"
                data-selectable-paragraph=""
              >
                Women who menstruate for the first time at an early age (before
                12)
              </li>
              <li
                id="52f0"
                className="intro1_layout2"
                data-selectable-paragraph=""
              >
                Women who go through menopause late (after age 55)
              </li>
              <li
                id="77b9"
                className="intro1_layout2"
                data-selectable-paragraph=""
              >
                Women who’ve never had children
              </li>
            </ul>

            {/* <div>
              <h2 id="0cd3" className="header_h2" data-selectable-paragraph="">
                Data Visualization from Dataset
              </h2>

              <p
                id="3f75"
                className="intro1_layout2"
                data-selectable-paragraph=""
              >
                This is an analysis of the Breast Cancer Wisconsin (Diagnostic)
                DataSet, obtained from Kaggle and to try several data
                Visualization to compare their results. Also can be found on UCI
                Machine Learning Repository:
                <a href="https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+%28Diagnostic%29">
                  https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+%28Diagnostic%29
                </a>
              </p>
            </div> */}
          </div>
        </section>

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
                <strong className="ba">Breast Cancer Prediction</strong>
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
    cancers: state.cancer.cancerResult,
  };
};
export default connect(mapStateToProps, { createCancer })(BreastCancer);
