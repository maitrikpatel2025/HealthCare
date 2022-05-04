import React from "react";

import "./Home.css";



import HomepageImage from "../../assets/undraw_medicine_b-1-ol.svg";

const Home = () => {
  return (
    <section className="Home">
      <section className="layout1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <span className="img_animat1">
                <img
                  alt="HomepageImage"
                  src={HomepageImage}
                  className="img-fluid"
                />
              </span>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="header_text">
                <div className="text_layout1">
                  <h1 className="tagline_layout1">
                    Artificial intelligence in healthcare:{" "}
                    <span className="tagline2_layout1">
                      transforming the practice of medicine
                    </span>
                  </h1>
                </div>
                <p className="intro_layout1">
                  Artificial intelligence (AI) is a powerful and disruptive area
                  of computer science, with the potential to fundamentally
                  transform the practice of medicine and the delivery of
                  healthcare. In this Web App article, we breakthroughs in the
                  application of AI in healthcare, describe a roadmap to
                  building effective, reliable and safe AI systems.This is basic
                  Machine Learning and Deep Learning based App and models used
                  to predict the diseases like Diabetes, heart attack, liver
                  which were trained on large Datasets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout3">
        <div className="container">
          <div className="row justify-content-center box">
            <h1 className="tagline_layout3">
              Model <span className="tagline2_layout3">Accuracies</span>
            </h1>
          </div>
          <div className="ui middle aligned divided list">
            <div className="item">
              <div className="right floated content">
                <div className="cap_card_intro">96.21 %</div>
              </div>
              <div className="content cap_card_header">Breast Cancer</div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="cap_card_intro">81.43 %</div>
              </div>
              <div className="content cap_card_header">Diabetes</div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="cap_card_intro">86.34 %</div>
              </div>

              <div className="content  cap_card_header">Heart</div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="cap_card_intro ">97.36 %</div>
              </div>

              <div className="content cap_card_header">Kidney</div>
            </div>
            <div className="item">
              <div className="right floated content">
                <div className="cap_card_intro">84.67 %</div>
              </div>

              <div className="content cap_card_header">liver</div>
            </div>
          </div>

        
        </div>
       <br/>
       <br/>
      </section>
    </section>
  );
};

export default Home;
