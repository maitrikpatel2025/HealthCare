import React, { Component } from "react";
import PropTypes from "prop-types";
import BreastCancerFormFirstPage from "./BreastCancerFormFirstPage";
import BreastCancerFormSecondPage from "./BreastCancerFormSecondPage";
import BreastCancerFormThirdPage from "./BreastCancerFormThirdPage";

class BreastCancerForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div style={{ paddingBottom: "60px" }}>
        {page === 1 && <BreastCancerFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <BreastCancerFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <BreastCancerFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }
}

BreastCancerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BreastCancerForm;
