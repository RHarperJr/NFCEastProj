import React from 'react';
import teams from './Teams';
import Team from './Team';

const Body = () => (
    <div className= "body">
      {teams.map(team => <Team key={team.id} name={team.name} city={team.city} /> )}
    </div>
  )

export default Body;