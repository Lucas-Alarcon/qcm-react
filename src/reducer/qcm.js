import { createContext } from 'react';

export const QCMContext = createContext({})

export const initialState = {
    // qcm
    questions: [],
    question: [],
    position: 0,
    score: 0,
    response: 0,
    message: '',
    feedbacks : [],

    //login
    email: '',
    password: '', 
    auth: false
};

export const reducer = (state, action) => {

    switch (action.type) {

        case 'INIT':
            return { ...state, questions: Object.values(action.questions) }

        case 'QUESTION':
            return { ...state, question: state.questions[state.position] }

        case 'RESPONSE':
            return { ...state, response: Number(action.response), message: "" }

        case 'SUBMIT':
            if(state.response === "")
                return { ...state, message: "Veuillez séléctionner une réponse"}

            if(state.response === action.response) 
                return { ...state, score: state.score + 1, position: state.position + 1, response: 0, feedbacks: [...state.feedbacks, "Q" + (state.position + 1) + " : Bravo ! " + state.question.feedback]}
            else 
                return { ...state, position: state.position + 1, response: 0, feedbacks: [...state.feedbacks, "Q" + (state.position + 1) + " : Dommage ce n'est pas juste. " + state.question.feedback]}

        case 'EMAIL':
            return { ...state, email: action.email }

        case 'PASSWORD':
            return { ...state, password: action.password }

        case 'LOGOUT':
            localStorage.setItem('auth', 'false');
            return { ...state, auth: false }

        case 'LOGIN':
            if (state.email === 'admin@admin.fr' && state.password === '123') {
                localStorage.setItem('auth', 'true');
                return { ...state, auth: true, message: "" };
            } else {
                return { ...state, message: "Votre identifiant ou password n'est pas valide" }
            }

        default:
            return state;
    }
}