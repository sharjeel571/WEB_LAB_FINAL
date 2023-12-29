// components/MetricsDetails.js
import React from 'react';

const MetricsDetails = ({ selectedCategory, categoryDetails, onBackClick }) => {
  return (
    <div>
      <h2>{selectedCategory && selectedCategory.name} Details</h2>
      <p>{categoryDetails && categoryDetails.details}</p>
      <button onClick={onBackClick}>&lt; Back</button>
    </div>
  );
};

export default MetricsDetails;
