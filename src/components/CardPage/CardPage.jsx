import React from 'react';
import './CardPageStyled';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { CardPageContainer, CardTitle, CardDescription } from './CardPageStyled';
import job from '../Card/data.json';
import { logos } from '../../constants/logos';
import { useParams } from 'react-router-dom'; 

const CardPage = ({ toggleTheme, isDarkTheme }) => {
  const { id } = useParams(); 

  const jobId = parseInt(id);

  const jobData = job.find(job => job.id === jobId);

  if (!jobData) {
    return (
      <>
        <Nav toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
        <div className="card-page container">
          <p>No job found with ID: {id}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
      <div className='card-page container'>
        <CardPageContainer>
          <div className="card-logo">
            <div className='logo' style={{ backgroundColor: jobData.logoBackground }}>
              <img src={logos[jobData.company]} alt={`${jobData.company} Logo`} />
            </div>
          </div>
    
          <div className="job-details">
            <div className='job-details-data'>
              <h2>{jobData.company}</h2>
              <p>{jobData.website}</p>
            </div>
            <button className="apply-button">Company Site</button>
          </div>
        </CardPageContainer>   
      </div> 
      <div className='card-page container'>
        <CardTitle>
          <div className='card-title'>
              <div className='details'>
                <span className='dot'>{jobData.postedAt}</span>
                <span>{jobData.contract}</span>
              </div>
              <h3>{jobData.position}</h3>
              <span className='company'>{jobData.location}</span>
          </div>
            <button className='apply-button'>Apply Now</button>
        </CardTitle>
        <CardDescription>
          <p>{jobData.description}</p>
          <h4>Requirements</h4>
          <p>{jobData.requirements.content}</p>
          <ul>
            {jobData.requirements.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4>What You Will Do</h4>
          <p>{jobData.role.content}</p>
          <ul>
            {jobData.role.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardDescription>
      </div>
      <Footer id={id} />
    </>
  );
}

export default CardPage;
