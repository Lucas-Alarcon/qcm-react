import React, { useEffect, useContext } from 'react';
import { QCMContext } from '../reducer/qcm';
import QUESTIONS from '../data_qcm';
import Question from './Question';
import Score from './Score';

const QCM = () => {

    const [state, dispatch] = useContext(QCMContext);
    const { questions, question, position, score } = state;

    useEffect(() => {
        dispatch({ type: 'INIT', questions: QUESTIONS })

    }, []);

    useEffect(() => {
        dispatch({ type: "QUESTION" })

    }, [position]);

    return (
        <>
            <main role="main" className="container">
                <div className="m-5 text-center">
                    <div className="question">
                        {questions.length === position ? <Score score={score}></Score> : <Question question={question}></Question>}
                    </div>
                </div>
            </main>
        </>
    )
}
export default QCM;