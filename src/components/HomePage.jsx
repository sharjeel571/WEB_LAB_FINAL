// pages/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCategories, selectCategory } from '../slices/metricsSlice';
import MetricsList from './MetricsList';

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.metrics.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
    history.push(`/details/${category.id}`);
  };

  return (
    <div>
      <h1>Emoji Metrics</h1>
      <MetricsList categories={categories} onCategoryClick={handleCategoryClick} />
    </div>
  );
};

export default HomePage;


