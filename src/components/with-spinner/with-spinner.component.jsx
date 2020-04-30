import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

// Higher order component. Takes a component in and returns a modified component
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
