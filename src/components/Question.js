import React from 'react';
import { QCMContext } from '../reducer/qcm';

const Question = ({ question }) => {

    const [state, dispatch] = React.useContext(QCMContext);
    const { message, response, position } = state;

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({ type: "SUBMIT", response: question.response })
    }

    return (
        <>
            <p>Voici un QCM sur React répondez aux questions ci-dessous :</p>
            <h4 className="m-4">Q{position + 1} : {question.title}</h4>
            <div>
                <form onSubmit={handleSubmit}>
                    {question.type === "radio" &&
                        <div className="form-check">
                            {question.choices.map((choice, i) =>
                                <p key={i}>
                                    <input className="form-check-input" type="radio" name={question.name} id={question.name + i} value={i} onChange={e => dispatch({ type: "RESPONSE", response: e.target.value })} checked={response === i} />
                                    <label className="form-check-label" htmlFor={question.name + i}>{choice}</label>
                                </p>
                            )}
                            <div>
                                <input className="btn btn-outline-secondary" type="button" type="submit" />
                            </div>
                        </div>
                    }

                    {question.type === "select" &&
                        <div className="input-group">
                            <select className="custom-select" name="choices" id="choice-select" onChange={e => dispatch({ type: "RESPONSE", response: e.target.value })}>
                                {question.choices.map((choice, i) =>
                                    <option key={i} value={i}>{choice}</option>
                                )}
                            </select>
                            <div className="input-group-append">
                                <input className="btn btn-outline-secondary" type="button" type="submit" />
                            </div>
                        </div>
                    }

                    {message &&
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    }
                </form>
            </div>
        </>
    )
}
export default Question;