import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardComponent } from './CardStyled';
import job from './data.json';
import { logos } from '../../constants/logos';

const Card = ({ searchQuery, locationQuery, isChecked }) => { 
  const [displayedJobs, setDisplayedJobs] = useState(9);

  const handleLoadMore = () => {
    setDisplayedJobs(displayedJobs + 6);
  }

  const filteredJobs = job.filter((job) => {
    
    const searchMatch = job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(locationQuery.toLowerCase());
    const fullTimeMatch = isChecked ? job.contract.toLowerCase() === 'full time' : true;
    return searchMatch && locationMatch && fullTimeMatch;
  });

  return (
    <div className='container'>
      <div className='card-container'>
        {filteredJobs.slice(0, displayedJobs).map((job) => (
          <CardComponent key={job.id}>
            <div className='logo' style={{ backgroundColor: job.logoBackground }}>
              <img src={logos[job.company]} alt={`${job.company} Logo`} />
            </div>
            <div className='details'>
              <span className='dot'>{job.postedAt}</span>
              <span>{job.contract}</span>
            </div>
            <div className='main'>
              <Link to={`/CardPage/${job.id}`}><h3>{job.position}</h3></Link>
              <span>{job.company}</span>
              <h4>{job.location}</h4>
            </div>
          </CardComponent>
        ))}
      </div>
      {
        displayedJobs < filteredJobs.length && 
        <button className='load-btn' onClick={handleLoadMore}>Load more</button>
      }
      
    </div>
  );
};

export default Card;
