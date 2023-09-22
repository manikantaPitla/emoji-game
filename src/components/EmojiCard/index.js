import './index.css'

const EmojiCard = props => {
  const {emojisList, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojisList

  const clickedEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-button" type="button" onClick={clickedEmoji}>
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
