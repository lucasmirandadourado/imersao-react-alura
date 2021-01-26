import styled from "styled-components";
import db from "../db.json";
import QuizBackground from '../src/components/QuizBackground'
import Widget from "../src/components/Widget";
import Span from '../src/components/Span'

const Centralizar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Home() {
    return (
      <QuizBackground backgroundImage={db.bg_desafio}>
        <Span>
          <Centralizar>
            <h1>> Desafio feito!</h1>
          </Centralizar>
        </Span>
      </QuizBackground>
    );

}