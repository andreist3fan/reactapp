import { useEffect, useState } from "react";
import { Project } from "../objects/Project";
import { fetchProjects, uploadProject } from "../ProjectController";

function AddArticle() {
  const [projectsLength, setProjectLength] = useState(0);
  const [success, setSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string[]>();

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      if (e.target !== null) {
        const imageDataURL = e.target.result?.toString();
        console.log(imageDataURL?.substring(0, 10));
        if (imageDataURL) {
          const foo = imageDataURL;

          const s = selectedImage?.concat([foo]) || Array.of(foo);
          setSelectedImage(s);
        }
      }
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const setLength = async () => {
      const proj = await fetchProjects();
      if (proj != undefined) setProjectLength(proj?.length | 0);
    };
    setLength();
    const uploaded = async () => {
      setSuccess(true);
      setProjectLength(projectsLength + 1);
      await new Promise((r) => setTimeout(r, 10000));
      setSuccess(false);
    };

    const form = document.getElementById("projectForm");
    if (form !== null) {
      const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const title = document.getElementsByName(
          "title"
        )[0] as HTMLInputElement;
        const description = document.getElementsByName(
          "description"
        )[0] as HTMLInputElement;
        if (selectedImage != undefined) {
          const myProject = new Project(
            projectsLength + 1,
            title.value,
            description.value,
            selectedImage?.length > 0 ? selectedImage : ["gear"]
          );

          uploadProject(myProject);
          uploaded();
        }
      };

      form.addEventListener("submit", handleSubmit);

      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, [selectedImage, projectsLength]);

  return (
    <>
      <div>
        <h1>addArticle</h1>
      </div>
      <div>
        <form id="projectForm">
          <p>Project name</p>
          <input type="text" name="title" />
          <br />
          <p>Project description</p>
          <input type="text" name="description" />
          <br />
          <input type="file" onChange={handleImageUpload} accept="image/*" />
          {selectedImage && (
            <div>
              <h2>Selected Images:</h2>
              {selectedImage.map((image) => (
                <img src={image} />
              ))}
            </div>
          )}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      {success && <p>Project added successfully</p>}
    </>
  );
}

export default AddArticle;
