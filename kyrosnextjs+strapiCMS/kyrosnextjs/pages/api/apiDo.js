import api from './api';

export async function fetchData(url) {
  const res = await fetch(`${api.baseUrl}${url}`);
  const data = await res.json();
  return data;
}

export async function addComment(name,email,message) {
  const data = {
    name: name,
    email: email,
    message: message,
    date: new Date(),
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${api.baseUrl}${api.comments}`,requestOptions);
  const responseData = await response.json();

  return responseData.data;
}

export async function addCommentToBlog(blogId,allComments) {
  const data = {
    data: {
      comments: allComments,
    }
  };
  
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${api.baseUrl}${api.blog}/${blogId}`,requestOptions);
  const responseData = await response.json();

  return responseData;
}