import{
    GameScoreContainer,
    GameScoreNameContainer,
    GameScoreName,
    GameScoreBoardContainer,
    GameScoreBoardHeading,
    GameScoreBoardScore,
} from './styledComponents'

const GameScore = props =>{
    const {score}=props 
    return(
        <GameScoreContainer>
            <GameScoreNameContainer>
                <GameScoreName>
                    ROCK
                    <br/>
                    PAPER
                    <br/>
                    SCISSORS
                </GameScoreName>
            </GameScoreNameContainer>
            <GameScoreBoardContainer>
                <GameScoreBoardHeading>score</GameScoreBoardHeading>
                <GameScoreBoardScore>{score}</GameScoreBoardScore>
            </GameScoreBoardContainer>
        </GameScoreContainer> 
    )
}

export default GameScore
