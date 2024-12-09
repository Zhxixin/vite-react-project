import { Container, ResultCard, ScoreCircle, SummarySection, SummaryItem, Button } from './../theme/style.ts';
import data from './../config/data.json';
import { SummaryItemData } from '../util/types.ts';
const icons: Record<string, { default: string }> = import.meta.glob('../assets/icons/*.svg', { eager: true });
let scoreRank: number = 65;

export const ScorePage: React.FC = () => {
    return <Container>
        <ResultCard>
            <h2>Your Result</h2>
            <ScoreCircle>
                <span>76</span>
                <span>of 100</span>
            </ScoreCircle>
            <h3>Great</h3>
            <p>You scored higher than {scoreRank}% of the people who have taken these tests.</p>
        </ResultCard>
        <SummarySection>
            <h2>Summary</h2>
            {data.map((item: SummaryItemData) => {
                const iconPath = (icons[`../assets/icons/${item.icon}`] as { default: string }).default;

                return (
                    <SummaryItem key={item.category} color={item.color}>
                        <div>
                            <img src={iconPath} alt={item.category} ></img>
                            {item.category}</div>
                        <div><span>{item.score}</span><span> / 100</span></div>
                    </SummaryItem>)
            })}

            <Button>Continue</Button>
        </SummarySection>

    </Container>
}