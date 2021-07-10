import { Post } from "../models/post";


export class FileUtils {

  public static dayDiff(d1: Date, d2: Date) {
    const diff = Math.abs(d1.getTime() - d2.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  public static hoursDiff(d1: Date, d2: Date) {
    return Math.abs(d1.valueOf() - d2.valueOf()) / 36e5;
  }

  public static sortByDate(a: Post, b: Post) {
    return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())

  }
}
