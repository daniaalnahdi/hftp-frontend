import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import HeaderSecondary from '../components/HeaderSecondary';
import ScoreTotalSection from '../components/ScoreTotalBanner';
import ScoreBreakdownGrid from '../components/ScoreBreakownGrid';

//TO FETCH:
//total score
//categories with individual score and goals
// restaurant name and location
const DUMMY_RESTAURANT = {
  restaurantName: 'Res Name',
  restaurantLocation: 'Res Loc',
};

const DUMMY_REPORT = {
  restaurantScore: 60,
  categories: [
    {
      categoryName: 'Water',
      categoryScore: '50',
      categoryId: 1,
      goals: [
        { goalId: 1, goalName: 'Conserve water', goalStatus: 0.0 },
        {
          goalId: 2,
          goalName: 'Fix leaks promptyl',
          goalStatus: 0.5,
        },
      ],
    },
    {
      categoryName: 'Recycle',
      categoryScore: '50',
      categoryId: 2,
      goals: [
        { goalId: 1, goalName: 'Conserve water', goalStatus: 0.0 },
        {
          goalId: 2,
          goalName: 'Fix leaks promptyl',
          goalStatus: 0.5,
        },
      ],
    },
    {
      categoryName: 'Compost',
      categoryScore: '50',
      categoryId: 2,
      goals: [
        { goalId: 1, goalName: 'Compost waste', goalStatus: 0.0 },
        {
          goalId: 2,
          goalName: 'Something else',
          goalStatus: 0.5,
        },
      ],
    },
  ],
};

const ReportViewPage = () => {
  const userId = useParams().userId;
  const pageUrl = useLocation();
  const isEmbedded = pageUrl.search.includes('view=embedded');

  //check is userId exists
  //if authUser, check if they submitted a report before

  //FETCH
  const restaurantName = DUMMY_RESTAURANT.restaurantName;
  const restaurantLocation = DUMMY_RESTAURANT.restaurantLocation;
  const totalScore = DUMMY_REPORT.restaurantScore;
  const categories = DUMMY_REPORT.categories;

  if (isEmbedded) {
    return (
      <div className='has-text-centered'>
        <ScoreTotalSection score={totalScore} small />
        <Link
          className='button is-primary'
          //check if domain needs to be appended
          to={pageUrl.pathname}
          target='_blank'
        >
          See Full Report
        </Link>
      </div>
    );
  }

  return (
    <>
      <HeaderSecondary
        title='EcoEateries Report'
        subtitle={`${restaurantName} ${restaurantLocation}`}
      />
      <div className='container'>
        <section className='section'>
          <ScoreTotalSection
            score={totalScore}
            restaurantName={restaurantName}
          />
        </section>
        <hr />
        <section className='section'>
          <ScoreBreakdownGrid categories={categories} />
        </section>
      </div>
    </>
  );
};

export default ReportViewPage;
