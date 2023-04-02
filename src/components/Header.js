const Header = (props) => {
    const {currentScore, bestScore} = props;

    return (
        <header>
            <h1>Memory Card Game</h1>
            <div className='scores'>
                <div className='current-score'>Score: {currentScore}</div>
                <div className='best-score'>Best Score: {bestScore}</div>
            </div>
        </header>
    )
}

export default Header;