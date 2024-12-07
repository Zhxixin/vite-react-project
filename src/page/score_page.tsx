import { Container, ResultCard, ScoreCircle, SummarySection, SummaryItem, Button } from './../theme/style.ts';
import data from './../config/data.json';
import { SummaryItemData } from '../util/types.ts';

export const ScorePage: React.FC = () => {
    return <Container>
        <ResultCard>
            <h2>Your Result</h2>
            <ScoreCircle>
                <p>76</p>
                <span>of 100</span>
            </ScoreCircle>
            <h3>Great</h3>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
        </ResultCard>
        <SummarySection>
            <h2>Summary</h2>
            {data.map((item: SummaryItemData) => (<SummaryItem key={item.category} color={item.color}>
                <div>
                    <img src={item.icon} alt={item.category} ></img>
                    {item.category}</div>
                <div><span>{item.score}</span><span> / 100</span></div>
            </SummaryItem>))}

            <Button>Continue</Button>
        </SummarySection>

    </Container>
}