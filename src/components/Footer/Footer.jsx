import React from 'react'
import { useParams } from 'react-router-dom'; 
import './FooterStyled'
import { FooterContainer } from './FooterStyled'
import job from '../Card/data.json'

const Footer = () => {
  const { id } = useParams(); 

  const jobId = parseInt(id);

  const jobData = job.find(job => job.id === jobId);

  return (
    <FooterContainer>
      <div className='data'>
        <h2>{jobData.position}</h2>
        <p>{jobData.company}</p>
      </div>
      <button className="apply-button">Apply Now</button>
  </FooterContainer>
  )
}

export default Footer
