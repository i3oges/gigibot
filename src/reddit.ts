import request from 'axios';

export async function getImageFromReddit(postID: string): Promise<string> {
  const redditDetails = await request(`https://api.reddit.com/api/info/?id=t3_${postID}`);
  return redditDetails.data.data.children[0].data.url_overridden_by_dest;
}
