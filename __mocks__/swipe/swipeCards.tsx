import React from 'react';

const MockSwipeCards = ({ usersList }) => (
  <div data-testid="swipe-cards">
    <h1>SwipeCards Renderizado</h1>
    <p>{`Usuários: ${usersList.length}`}</p>
  </div>
);

export default MockSwipeCards;
