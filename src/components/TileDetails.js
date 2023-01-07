import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

function TileDetails() {
  const location = useLocation();
  const tile = location.state.tile;

  return (
    <React.Fragment>
      <div>
        hello
      </div>
    </React.Fragment>
  )
}

export default TileDetails;

TileDetails.propTypes = {
  tileList: PropTypes.array,
}