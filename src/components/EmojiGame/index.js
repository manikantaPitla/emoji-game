import {Component} from 'react'
import './index.css'
import NavNar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {isGameRunning: true, topScore: 0, clickedEmojiesList: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickReset = () => {
    this.setState({
      isGameRunning: true,
      clickedEmojiesList: [],
    })
  }

  setTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (currentScore > topScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isGameRunning: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props

    const {clickedEmojiesList} = this.state
    const isSameEmojiClicked = clickedEmojiesList.includes(id)

    if (isSameEmojiClicked) {
      this.setTopScore(clickedEmojiesList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojiesList.length) {
        this.setTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiesList: [...prevState.clickedEmojiesList, id],
      }))
    }
  }

  render() {
    const {isGameRunning, topScore, clickedEmojiesList} = this.state
    const scoreAndTopScore = {isGameRunning, topScore, clickedEmojiesList}

    return (
      <div className="main-container">
        <NavNar scoreAndTopScore={scoreAndTopScore} />
        <div className="body-container">
          <ul className="emoji-container">
            {isGameRunning ? (
              this.shuffledEmojisList().map(eachEmoji => (
                <EmojiCard
                  emojisList={eachEmoji}
                  key={eachEmoji.id}
                  onClickEmoji={this.onClickEmoji}
                />
              ))
            ) : (
              <WinOrLoseCard
                scoreAndTopScore={scoreAndTopScore}
                onClickReset={this.onClickReset}
              />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
