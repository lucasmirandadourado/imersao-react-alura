import styled from "styled-components";
import db from "../db.json";
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>asdasd as asd</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Takjshd askdh laksd asd</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucasmirandadourado" />
    </QuizBackground>
  );
}
