// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onThumbnailClick, isClick} = props
  const {
    id,
    thumbnailUrl,

    thumbnailAltText,
  } = imageDetails

  const onThumbnail = () => {
    onThumbnailClick(id)
  }

  const opacityClassName = isClick ? 'thumbnail' : 'thumbnail-opacity'

  return (
    <li className="list-item">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={opacityClassName}
          onClick={onThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
