import { useEffect, useState } from 'react';

import jennifer from 'assets/img/jennifer-thinking.gif';
import simon from 'assets/img/simon-congrats.gif';
import will from 'assets/img/will-smith.gif';

import Button from 'components/common/Button/Button';
import Text from 'components/common/Text/Text';
import Dialog from 'components/organisms/Dialog';
import DialogAnswerFeedback from 'components/organisms/DialogAnswerFeedback/DialogAnswerFeedback';
import DialogWithIcon from 'components/organisms/DialogWithIcon';
import QuestionsCheckbox from 'components/organisms/QuestionsCheckbox';
import QuizBlock from 'components/organisms/QuizBlock/QuizBlock';
import TextListWithIndex from 'components/organisms/TextListWithIndex';

import { usePipwerksContext } from 'contexts/PipwerksProvider';

const listItem = [
  {
    text: 'Argumentação dos benefícios.',
  },
  {
    text: 'Aumento de limite (se disponível).',
  },
  {
    text: 'Troca de Pontos pela anuidade.',
  },
  {
    text: 'Desconto anuidade.',
  },
  {
    text: 'Grade dentro da mesma família (ex: Latam Platinum p/ Latam Internacional).',
  },
  {
    text: 'Grade para cartão sem anuidade (CLICK/ZERO).',
  },
];

const options = [
  {
    id: 0,
    description:
      'Cada vez que você usa seu cartão, acumula pontos que viram descontos, prêmios, viagens...',
  },
  {
    id: 1,
    description:
      'A cada X reais/dólar gastos, você ganha 1 ponto. Isso significa que nosso programa de pontuação é muito melhor do que os da concorrência.',
  },
];

const Q5 = ({ nextPage }) => {
  const { incrementScore, get } = usePipwerksContext();
  const [optionsAnswer, setOptionsAnswer] = useState(null);
  const [user, setUser] = useState('');
  const [answered, setAnswered] = useState(false);

  const handleNext = () => {
    if (optionsAnswer !== null && optionsAnswer === 0) {
      nextPage();
    }
  };

  useEffect(() => {
    if (optionsAnswer === 0 && !answered) {
      incrementScore(25);
      setAnswered(true);
    }
  }, [incrementScore, optionsAnswer, answered]);

  useEffect(() => {
    if (get) {
      setUser(get('name'));
    }
  }, [get]);

  return (
    <QuizBlock>
      <Text alignSelf="flex-start" weight="bold" size="medium">
        Mostre os benefícios!
      </Text>

      <Text alignSelf="flex-start">
        Pronto! Você descobriu a dor do cliente, ou seja, o motivo que o levou a
        querer cancelar o cartão. É aí que você entra em ação para mostrar os
        <strong>benefícios que ele tem ao continuar com a gente.</strong>
      </Text>

      <Text alignSelf="flex-start" weight="bold" size="medium">
        Matriz de Oferta
      </Text>

      <Text alignSelf="flex-start">
        Se, mesmo após mostrar os benefícios, o cliente ainda não estiver
        convencido a ficar, use a Matriz de Oferta de acordo com o seu cartão e
        roteiro na Colaborativa. Ela é sua aliada na negociação! Acompanhe a
        ordem que devemos aplicá-la:
      </Text>

      <TextListWithIndex items={listItem} />

      <DialogWithIcon gifSrc={will}>
        <Text weight="bold">Pega essa dica!</Text>
        <Text>
          Dê exemplos e mostre as vantagens de um jeito que o cliente entende.
        </Text>
      </DialogWithIcon>

      <Dialog>
        <Dialog.Box direction="left">
          Não sabia que eu posso fazer parte do Programa de Pontos. Como
          funciona isso?
        </Dialog.Box>
      </Dialog>

      <DialogWithIcon>
        <Text>
          É com você, {user}! Qual é a melhor forma de falar desse benefício na
          prática?
        </Text>
      </DialogWithIcon>

      <QuestionsCheckbox
        setValue={setOptionsAnswer}
        options={options}
        name="Q5"
      />

      {optionsAnswer === 0 && (
        <DialogAnswerFeedback correctAnswer gifSrc={simon}>
          Mandou bem! Você mostrou como o cartão de crédito traz vantagens no
          dia a dia do cliente.
        </DialogAnswerFeedback>
      )}

      {optionsAnswer === 1 && (
        <DialogAnswerFeedback gifSrc={jennifer}>
          Não é bem por aí! Que tal mostrar como o cartão de crédito traz
          vantagens no dia a dia do cliente?
        </DialogAnswerFeedback>
      )}

      <Button
        onClick={handleNext}
        disabled={optionsAnswer === null || optionsAnswer === 1}
      >
        Confirmar
      </Button>
    </QuizBlock>
  );
};

export default Q5;
