import { useEffect, useRef, useState } from 'react';

import Q1 from 'components/layout/Quizes/Q1';
import Q2 from 'components/layout/Quizes/Q2';
import Q3 from 'components/layout/Quizes/Q3';
import Q4 from 'components/layout/Quizes/Q4';
import Q5 from 'components/layout/Quizes/Q5';
import Q6 from 'components/layout/Quizes/Q6';
import Q7 from 'components/layout/Quizes/Q7';
import Q8 from 'components/layout/Quizes/Q8';
import QuizPage from 'components/organisms/QuizPage/QuizPage';

import InitialScreen from 'pages/InitialScreen/InitialScreen';

const QuizScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayArray, setDisplayArray] = useState([true]);

  const quizRefs = useRef(new Array());

  const nextPage = () => {
    const newIndex = activeIndex + 1;
    setDisplayArray((prev) => ({ ...prev, [newIndex]: true }));
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    quizRefs.current[activeIndex].scrollIntoView();
  }, [activeIndex]);

  useEffect(() => {
    console.log(quizRefs);
  }, [quizRefs]);

  return (
    <>
      <div ref={(element) => (quizRefs.current[0] = element)}>
        <InitialScreen nextPage={nextPage} />
      </div>

      <QuizPage
        display={displayArray[1] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[1] = element)}
      >
        <Q1 nextPage={nextPage} />
      </QuizPage>

      <QuizPage
        display={displayArray[2] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[2] = element)}
      >
        <Q2 nextPage={nextPage} />
      </QuizPage>

      <QuizPage
        display={displayArray[3] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[3] = element)}
      >
        <Q3 nextPage={nextPage} />
      </QuizPage>

      <QuizPage
        display={displayArray[4] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[4] = element)}
      >
        <Q4 nextPage={nextPage} />
      </QuizPage>

      <QuizPage
        display={displayArray[5] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[5] = element)}
      >
        <Q5 nextPage={nextPage} />
      </QuizPage>

      <QuizPage
        display={displayArray[6] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[6] = element)}
      >
        <Q6 nextPage={nextPage} />
      </QuizPage>

      <QuizPage
        display={displayArray[7] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[7] = element)}
      >
        <Q7 nextPage={nextPage} />
      </QuizPage>

      <QuizPage
        display={displayArray[8] ? 'flex' : 'none'}
        ref={(element) => (quizRefs.current[8] = element)}
      >
        <Q8 nextPage={nextPage} />
      </QuizPage>
    </>
  );
};

export default QuizScreen;
