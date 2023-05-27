import { ref, push } from "firebase/database";
import database from "../firebase";
export class Project {
  id: number;
  name: string;
  description: string;
  images: string[];
  constructor(id: number, name: string, description: string, images: string[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
  }

  add_image(image: string) {
    this.images.push(image);
  }

  set_name(name: string) {
    this.name = name;
  }

  set_description(description: string) {
    this.description = description;
  }

  get_id() {
    return this.id;
  }
}
