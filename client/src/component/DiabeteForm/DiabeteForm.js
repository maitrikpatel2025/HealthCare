import React, { Component } from "react";
import PropTypes from "prop-types";
import DiabeteFormFirstPage from "./DiabeteFormFirstPage";


class DiabeteForm extends Component {

  render() {
    const { onSubmit } = this.props;
    return (
      <div style={{ paddingBottom: "60px" }}>
        {<DiabeteFormFirstPage onSubmit={onSubmit} />}
      </div>
    );
  }
}

DiabeteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DiabeteForm;
