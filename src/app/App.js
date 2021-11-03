import React, { useState, useEffect  } from 'react';

import Header from '../template/Header/Header';
import Nav from '../template/Nav/Nav';
import Footer from '../template/Footer/Footer';
import AsideDecoration from '../template/Decoration/AsideDecoration';

import Steps from '../features/Steps/Steps';

import { ReactComponent as ArrowLeft } from '../assets/images/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../assets/images/arrow-right.svg';

function App() {
  const [activePage, setActivePage] = useState(1);
  const [isNavOpen, setNavState] = useState(false);

  const questionsPerPage = 5;
  const [quizQuestions, setQuizAnswer] = useState([
    { id: 1, text: "J'aime être en contact avec les animaux", answer: '' },
    { id: 2, text: "Je préfère travailler à l'intérieur", answer: '' },
    { id: 3, text: "Je peux faire des tâches même si j'ai les mains sales", answer: '' },
    { id: 4, text: "J'aime dessiner et les activités créatrices", answer: '' },
    { id: 5, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },

    { id: 6, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: '' },
    { id: 7, text: "Mauris et magna non massa dictum sodales et sit amet nunc", answer: '' },
    { id: 8, text: "Donec commodo lacus non elit laoreet, eu dapibus dolor tincidunt", answer: '' },
    { id: 9, text: "Proin vel leo non enim tincidunt malesuada id eu nisi", answer: '' },
    { id: 10, text: "Ut quis ante eget orci pharetra sagittis", answer: '' },

    { id: 11, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },
    { id: 12, text: "Ut quis ante eget orci pharetra sagittis", answer: '' },
    { id: 13, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: '' },
    { id: 14, text: "Mauris et magna non massa dictum sodales et sit amet nunc", answer: '' },
    { id: 15, text: "Donec commodo lacus non elit laoreet, eu dapibus dolor tincidunt", answer: '' },

    { id: 16, text: "Ut quis ante eget orci pharetra sagittis", answer: '' },
    { id: 17, text: "Ut quis ante eget orci pharetra sagittis", answer: '' },
    { id: 18, text: "Ut quis ante eget orci pharetra sagittis", answer: '' },
    { id: 19, text: "Ut quis ante eget orci pharetra sagittis", answer: '' },
    { id: 20, text: "Ut quis ante eget orci pharetra sagittis", answer: '' },

    { id: 21, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: '' },
    { id: 22, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: '' },
    { id: 23, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: '' },
    { id: 24, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: '' },
    { id: 25, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: '' },

    { id: 26, text: "Mauris et magna non massa dictum sodales et sit amet nunc", answer: '' },
    { id: 27, text: "Mauris et magna non massa dictum sodales et sit amet nunc", answer: '' },
    { id: 28, text: "Mauris et magna non massa dictum sodales et sit amet nunc", answer: '' },
    { id: 29, text: "Mauris et magna non massa dictum sodales et sit amet nunc", answer: '' },
    { id: 30, text: "Mauris et magna non massa dictum sodales et sit amet nunc", answer: '' },

    { id: 31, text: "Donec commodo lacus non elit laoreet, eu dapibus dolor tincidunt", answer: '' },
    { id: 32, text: "Donec commodo lacus non elit laoreet, eu dapibus dolor tincidunt", answer: '' },
    { id: 33, text: "Donec commodo lacus non elit laoreet, eu dapibus dolor tincidunt", answer: '' },
    { id: 34, text: "Donec commodo lacus non elit laoreet, eu dapibus dolor tincidunt", answer: '' },
    { id: 35, text: "Donec commodo lacus non elit laoreet, eu dapibus dolor tincidunt", answer: '' },

    { id: 36, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },
    { id: 37, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },
    { id: 38, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },
    { id: 39, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },
    { id: 40, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },

    { id: 41, text: "Proin vel leo non enim tincidunt malesuada id eu nisi", answer: '' },
    { id: 42, text: "Proin vel leo non enim tincidunt malesuada id eu nisi", answer: '' },
    { id: 43, text: "Proin vel leo non enim tincidunt malesuada id eu nisi", answer: '' },
    { id: 44, text: "Proin vel leo non enim tincidunt malesuada id eu nisi", answer: '' },
    { id: 45, text: "Proin vel leo non enim tincidunt malesuada id eu nisi", answer: '' },

    { id: 46, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },
    { id: 47, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },
    { id: 48, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },
    { id: 49, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },
    { id: 50, text: "Je peux m'adapter à des horaires irréguliers", answer: '' },

    { id: 51, text: "Ut quis ante eget orci pharetra sagittis", answer: '' },
    { id: 52, text: "Ut quis ante eget orci pharetra sagittis", answer: '' },
    { id: 53, text: "Ut quis ante eget orci pharetra sagittis", answer: '' },
  ]);
  const maximumPages = Math.ceil(quizQuestions.length / questionsPerPage);

  const setAnswer = index => e => {
    let newQuizData = [...quizQuestions];
    newQuizData[index].answer = e.target.value;

    setQuizAnswer(newQuizData);
  }

  const canPagePrev = () => {
    return activePage > 1;
  }

  const canPageNext = () => {
    return activePage < maximumPages;
  }

  const handleBurgerClick = () => {
    setNavState(!isNavOpen);
  }

  useEffect(() => {
    // console.log(isNavOpen);
    // console.log(maximumPages);
    // console.log(quizQuestions);
  });


  let quizTableRows = quizQuestions.map((question, index) => {
    return (
      question.id <= questionsPerPage * activePage &&
      question.id > questionsPerPage * (activePage-1)
    ) && (
    <tr key={index}>
      <td>{ question.id }</td>
      <td className="text-left">{ question.text }</td>
      <td className="career-quiz-radio-cell">
        <input
          className="styled-radio"
          name={`pc-${question.id}`}
          type="radio"
          checked={quizQuestions[index].answer === "a"}
          value="a"
          onChange={setAnswer(index)}/>
      </td>
      <td className="career-quiz-radio-cell">
        <input
          className="styled-radio"
          name={`pc-${question.id}`}
          type="radio"
          checked={quizQuestions[index].answer === "b"}
          value="b"
          onChange={setAnswer(index)}/>
      </td>
      <td className="career-quiz-radio-cell">
        <input
          className="styled-radio"
          name={`pc-${question.id}`}
          type="radio"
          checked={quizQuestions[index].answer === "c"}
          value="c"
          onChange={setAnswer(index)}/>
      </td>
    </tr>)
  });

  let quizTableRowsMobile = quizQuestions.map((question, index) => {
    return (
      question.id <= questionsPerPage * activePage &&
      question.id > questionsPerPage * (activePage-1)
    ) && (
      <React.Fragment key={index}>
      <tr>
        <td colSpan="2" className="quiz-answer-text">{question.id}. {question.text}</td>
      </tr>
      <tr>
        <td className="text-left">A, Pas du tout</td>
        <td className="career-quiz-radio-cell">
          <input
            className="styled-radio"
            name={`mob-${question.id}`}
            type="radio"
            checked={quizQuestions[index].answer === "a"}
            value="a"
            onChange={setAnswer(index)}/>
        </td>
      </tr>
      <tr>
        <td className="text-left">B, Un peu</td>
        <td className="career-quiz-radio-cell">
          <input
            className="styled-radio"
            name={`mob-${question.id}`}
            type="radio"
            checked={quizQuestions[index].answer === "b"}
            value="b"
            onChange={setAnswer(index)}/>
        </td>
      </tr>
      <tr>
        <td className="text-left">C, Beaucoup</td>
        <td className="career-quiz-radio-cell">
          <input
            className="styled-radio"
            name={`mob-${question.id}`}
            type="radio"
            checked={quizQuestions[index].answer === "c"}
            value="c"
            onChange={setAnswer(index)}/>
        </td>
      </tr>
    </React.Fragment>)
  });

  return (
    <>
      <Header
        isNavOpen={isNavOpen}
        onBurgerClick={handleBurgerClick}
      />
      <Nav isNavOpen={isNavOpen} />
      <main className="main">
        <div className="container">
          <h1 className="page-title">Bienvenue au questionnaire d’intérêt</h1>

          <div className="career-quiz">
            <div className="career-quiz__inner">

              <div className="career-quiz__aside">
                <aside className="career-quiz-aside">
                  <div className="career-quiz-aside__message">
                    Commençons à dessiner ton avenir!
                  </div>
                  <div className="career-quiz-aside__mascot"></div>
                  <div className="career-quiz-aside__decoration">
                    <AsideDecoration />
                  </div>
                </aside>
              </div>

              <div className="career-quiz__table">
                <div className="career-quiz__table-wrapper">
                  <table className="styled-table career-quiz-table career-quiz-table_pc">
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th className="text-left">Les énoncés suivants me correpsondent</th>
                        <th className="fixed-cell">A<br/> Pas du tout</th>
                        <th className="fixed-cell">B<br/> Un peu</th>
                        <th className="fixed-cell">C<br/> Beaucoup</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quizTableRows}
                    </tbody>
                  </table>
                  <table className="styled-table career-quiz-table career-quiz-table_mobile">
                    <tbody>
                      {quizTableRowsMobile}
                    </tbody>
                  </table>
                </div>
                <div className="career-quiz__table-pagination">
                  <div className="career-quiz-table-pagination">
                    <div className="career-quiz-table-pagination__inner">
                      <div className="career-quiz-table-pagination__text">
                        <div className="career-quiz-table-pagination__text-item">{activePage}/{maximumPages}</div>
                        <div className="career-quiz-table-pagination__text-item">Ton avenir se dessine...</div>
                      </div>
                      <div className="career-quiz-table-pagination__steps">
                        <Steps />
                      </div>
                      <div className="career-quiz-table-pagination__nav">
                        <div className="career-quiz-table-pagination__nav-inner">
                          <button
                            className={`styled-button ${!canPagePrev() ? "styled-button_inactive" : ""}`}
                            onClick={() => {
                              canPagePrev() &&
                              setActivePage(activePage - 1)
                            }}
                          >
                            <ArrowLeft className="styled-button__icon" alt="icon" />
                            Précédent
                          </button>
                          <button
                            className={`styled-button ${!canPageNext() ? "styled-button_inactive" : ""}`}
                            onClick={() => {
                              canPageNext() &&
                              setActivePage(activePage + 1)
                            }}
                          >
                            Suivant
                            <ArrowRight className="styled-button__icon styled-button__icon_right" alt="icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
