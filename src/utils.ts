import db from './db';
import { Post } from './entity/Post';

const postOneName = 'Migrating our legacy text editor to React';
const postTwoName = 'Webpack 5: leveraging module federation';
export async function seedDatabase() {
  const postRepository = db.getRepository(Post);
  const initPosts = await postRepository
    .createQueryBuilder('post')
    .where('post.name IN (:...names)', { names: [postOneName, postTwoName] })
    .getCount();
  if (initPosts > 0) {
    console.log('already initialized seed posts');
    return;
  }
  const [postOne, postTwo] = postRepository.create([
    {
      name: postOneName,
    },
    {
      name: postTwoName,
    },
  ]);
  await postRepository.save([postOne, postTwo]);
}
