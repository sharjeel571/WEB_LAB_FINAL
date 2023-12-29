// components/MetricsList.js
import React from 'react';

const MetricsList = ({ categories, onCategoryClick }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id} onClick={() => onCategoryClick(category)}>
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default MetricsList;
