import React from 'react';
import { QCMContext } from '../reducer/qcm';


const Score = ({ score }) => {

  const [state] = React.useContext(QCMContext);
  const { feedbacks, questions } = state;

  return (
    <>
      <p>Voici votre score pour ce QCM {score}/{questions.length}</p>
        <ul className="list-group">
          {feedbacks.map((feedback, i) => <li className="list-group-item" key={i}>{feedback}</li>)}
        </ul>
    </>
  )
}
export default Score;