import { useEffect, useState } from "react";
import { Project } from "../objects/Project";
import { uploadProject, fetchProjects } from "../ProjectController";
function AddArticle() {
  const [projectsLength, setProjectLength] = useState(0);
  const [success, setSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target !== null) {
        const imageDataURL = e.target.result?.toString();
        console.log(imageDataURL);
        setSelectedImage(imageDataURL);
      }
    };

    reader.readAsDataURL(file);
  };
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await fetchProjects();
      if (fetchedProjects !== null) setProjectLength(fetchedProjects.length);
      else setProjectLength(0);
    };

    const shortPolling = async () => {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        await new Promise((r) => setTimeout(r, 10000));
      }
    };
    const uploaded = async () => {
      setSuccess(true);
      await new Promise((r) => setTimeout(r, 10000));
      setSuccess(false);
    };
    shortPolling();
    const form = document.getElementById("projectForm");
    if (form !== null) {
      form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        const title = document.getElementsByName(
          "title"
        )[0] as HTMLInputElement;
        const description = document.getElementsByName(
          "description"
        )[0] as HTMLInputElement;

        // Process the form data (e.g., send it to the server, validate, etc.)
        const myProject = new Project(
          projectsLength + 1,
          title.value,
          description.value,
          selectedImage ? [selectedImage] : [""]
        );
        console.log(selectedImage);
        uploadProject(myProject);
        console.log(selectedImage);
        uploaded();
      });
    }
  }, []);

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
              <h2>Selected Image:</h2>
              <img src={selectedImage} alt="Selected" width="100" />
            </div>
          )}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      {success && <p>Project added successfully</p>}
      {/* <button
        onClick={() => {
          console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA");
          const myProject = new Project(
            projectsLength + 1,
            ,
            "This is my project description",
            [typeof(selectedImage)==="string"?selectedImage:""]
          );
          uploadProject(myProject);
        }}
      >
        add project
      </button> */}
    </>
  );
}

export default AddArticle;
