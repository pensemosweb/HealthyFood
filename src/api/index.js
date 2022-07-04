import posts from '../../doubles/posts/dummies/homePosts';

export async function fetchData(url) {
  let response;
  try {
    response = await simulateFetch(url);
  } catch(error) {
    return;
  }

  return response
}

async function simulateFetch(url) {
  await delay(1000);
  
  if (url.includes('posts')) {
    return posts;
  }
}

function delay(time = 1000) {
  return new Promise(resolve => setTimeout(resolve, time));
}