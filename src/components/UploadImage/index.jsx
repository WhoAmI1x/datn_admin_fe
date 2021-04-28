import { Container, Img } from "./styled";

function UploadImage({ image, setImage }) {
  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
      e.target.value = null;
    }
  };

  return (
    <Container>
      <label htmlFor="upload-button">
        {image.preview ? (
          <Img src={image.preview} alt="Image preview" />
        ) : (
          <Img src="/images/uploadIcon.JPG" alt="Upload image" />
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </Container>
  );
}

export default UploadImage;
