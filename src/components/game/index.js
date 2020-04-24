import React from "react";
import { connect } from "react-redux";
import FinishScore from "./FinishScore";
import Card from "../card";
import { addCard, resetDeck, stop, addCardEnemy } from "../../actions/cards";
import "./css/game.css";

const Game = (props) => {
  let contCard = 0;
  let contCardEnemy = 0;
  const leftDist = () => contCard++ * 5;
  const leftDistEnemy = () => contCardEnemy++ * 5;

  let interval = (props) => setTimeout(() => props.addCardEnemy(), 1000);

  return (
    <div>
      <FinishScore props={props} />
      {!props.cards.stop ? (
        props.cards.deckGame.map((card) => (
          <Card key={contCard} type={card} left={leftDist()} top={50} />
        ))
      ) : (
        <div>
          {props.cards.deckGame.map((card) => (
            <Card key={contCard} type={card} left={leftDist()} top={50} />
          ))}
          {props.cards.deckEnemy.map((card) => (
            <Card key={contCardEnemy*1000} type={card} left={leftDistEnemy()} top={200} />
          ))}
        </div>
      )}

      {props.cards.points < 7.5 && !props.cards.stop ? (
        <div>
          <div onClick={() => props.addCard()}>
            <Card key={contCard} type={"bc"} left={leftDist()} top={50} />
          </div>
        </div>
      ) : (
        <div>
          {props.cards.pointsEnemy > props.cards.points ||
          props.cards.pointsEnemy >= 7.5 ||
          props.cards.points > 7.5 ? (
            <div>
              {clearInterval(interval)}
            </div>
          ) : (
            <div style={{color: "white"}}>
              {interval(props)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  addCard: () => dispatch(addCard()),
  resetDeck: () => dispatch(resetDeck()),
  stop: () => dispatch(stop()),
  addCardEnemy: () => dispatch(addCardEnemy()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
