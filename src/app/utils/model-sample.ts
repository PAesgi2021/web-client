import { User } from "../models/user";
import { Post } from "../models/post";


export class modelSample {

  public static user_sample(): User {
    return new User({
      firstname: "toto",
      lastname: "tata",
      email: "toto.tata@email.tt",
      password: "tototata"
    });
  }

  public static post_sample(): Post {
    return new Post({
      title: "un titre super nickel",
      description: "pas de description",
      isPrivate: false
    });
  }

}
