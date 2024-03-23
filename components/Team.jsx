import React from 'react';
import teamData from '../data/teamData';
import '../styles/team.css';

const Team = () => {
  return (
    <div className='containr'>
      <h1>Our Team</h1>
      {teamData.map(team => (
        <div key={team.team} className='team-sec bg-red-500'>
          <h2 id="heading">{team.team}</h2>
          <div className='team-members'> {/* Container for members */}
            {team.members.map(member => (
              <div key={member.name} className='team-img'> {/* Each member in 'team-img' */}
                <img src={member.img} id="img" alt={member.name} /> 
                <h3 className='team-mem'>{member.name}</h3> {/* Style outside 'team-img' */}
                <p className='team-mem'>{member.role}</p> {/* Style outside 'team-img' */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
