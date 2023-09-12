import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Post } from '../../entity/Post';
import db from '../../db';
import { Repository } from 'typeorm';
import { IsString } from 'class-validator';

type ViewPostInputType = { id: string };

@InputType()
class ViewPostInput implements ViewPostInputType {
  @Field({ nullable: false })
  @IsString()
  id: string;
}

@Resolver(() => Post)
export class PostResolver {
  postsRepository: Repository<Post>;

  constructor() {
    this.postsRepository = db.getRepository(Post as typeof Post);
  }
  @Query(() => [Post])
  posts(): Promise<Post[]> {
    return this.postsRepository.find();
  }
  @Mutation((_type) => Post)
  async viewPost(@Arg('input') input: ViewPostInput): Promise<Post> {
    const post = await this.postsRepository.findOneOrFail({
      where: { id: input.id },
    });

    post.views += 1;
    await this.postsRepository.save(post);
    return post;
  }
}
