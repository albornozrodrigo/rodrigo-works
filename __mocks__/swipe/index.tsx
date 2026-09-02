/** Mock do micro frontend React `swipe/swipe-cards`. */
interface MockSwipeCardsProps {
  usersList: unknown[];
}

const MockSwipeCards = ({ usersList }: MockSwipeCardsProps) => (
  <div data-testid="swipe-cards">
    <h1>SwipeCards Renderizado</h1>
    <p>{`Usuários: ${usersList.length}`}</p>
  </div>
);

export default MockSwipeCards;
