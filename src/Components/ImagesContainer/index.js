import './index.css'

const ImagesContainer = props => {
  const {imageList, changeImageId} = props
  const {id, thumbnailUrl, category, imageUrl} = imageList

  const clickedImage = () => {
    changeImageId(id)
  }

  return (
    <li key={id}>
      <button className="card" type="button" onClick={clickedImage}>
        <img className="card" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImagesContainer
