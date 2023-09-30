import { useState } from "react";
const ImageSelect = () => {
  const [selectedImage, setSelectedImage] = useState<string>();

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target !== null) {
        const imageDataURL = e.target.result?.toString();
        setSelectedImage(imageDataURL);
        console.log(imageDataURL);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <img src={selectedImage} alt="Selected" width="200" />
        </div>
      )}
    </div>
  );
};

export default ImageSelect;
