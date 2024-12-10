import { Container, ResultCard, ScoreCircle, SummarySection, SummaryItem, Button } from '../theme/results_summary_style.ts';
import data from '../config/results_summary_data.json';
import { SummaryItemData } from '../util/types.ts';
const icons: Record<string, { default: string }> = import.meta.glob('../assets/images/results_summary/*.svg', { eager: true });
let scoreRank: number = 65;

export const ResultsSummary: React.FC = () => {
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
                console.log('iconPath', icons);
                const iconPath = (icons[`../assets/images/results_summary/${item.icon}`] as { default: string }).default;
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