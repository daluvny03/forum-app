const BASE_URL = 'https://forum-api.dicoding.dev/v1';
function putAccessToken(token){
    return localStorage.setItem('accessToken', token);
}
function getAccessToken(){
    return localStorage.getItem('accessToken');
}
function removeAccessToken(){
    return localStorage.removeItem('accessToken');
}

async function fetchWithAuth(endpoint, options = {}) {
  // 1. Mengambil token secara otomatis menggunakan helper yang sudah ada
  const token = getAccessToken();
  // 2. Menyiapkan headers default
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers, // menggabungkan jika ada headers tambahan dari luar
  };
  // 3. Menambahkan Authorization header jika tokennya tersedia
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  // 4. Mengirim request ke server
  const config = {
    ...options,
    headers,
  };
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    // Opsional: Jika token kedaluwarsa / tidak valid (Error 401), otomatis logout
    if (response.status === 401) {
      removeAccessToken();
      window.location.href = '/login'; // Tendang user ke halaman login
      return Promise.reject('Sesi habis, silakan login kembali.');
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }

  return responseJson.data;
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }
  return responseJson.data;
}

async function getOwnProfile() {
  const response = await fetchWithAuth(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }
  return responseJson.data.user;
}

async function getAllThreads() {
  const response = await fetch(`${BASE_URL}/threads`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }
  return responseJson.data.threads;
}

async function getThreadDetail(threadId) {
  const response = await fetch(
    `${BASE_URL}/threads/${threadId}`,
  );
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }
  return responseJson.data.detailThread;
}

async function createThread({ title, body, category }) {
  const response = await fetchWithAuth(
    `${BASE_URL}/threads`,
    {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    },
  );
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }
  return responseJson.data.thread;
}

async function createComment({
  threadId,
  content,
}) {
  const response = await fetchWithAuth(
    `${BASE_URL}/threads/${threadId}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        content,
      }),
    },
  );
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }
  return responseJson.data.comment;
}

async function getLeaderboards() {
  const response = await fetch(
    `${BASE_URL}/leaderboards`,
  );
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }
  return responseJson.data.leaderboards;
}

async function upVoteThread(threadId) {
  const response = await fetchWithAuth(
    `${BASE_URL}/threads/${threadId}/up-vote`,
    {
      method: 'POST',
    },
  );
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }
}

async function downVoteThread(threadId) {
  const response = await fetchWithAuth(
    `${BASE_URL}/threads/${threadId}/down-vote`,
    {
      method: 'POST',
    },
  );
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }
}

async function neutralVoteThread(threadId) {
  const response = await fetchWithAuth(
    `${BASE_URL}/threads/${threadId}/neutral-vote`,
    {
      method: 'POST',
    },
  );
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    throw new Error(responseJson.message);
  }
}

export { putAccessToken,
         getAccessToken,
         removeAccessToken,
         fetchWithAuth, 
         register, 
         login, 
         getOwnProfile, 
         getAllThreads, 
         getThreadDetail, 
         getLeaderboards, 
         createThread, 
         createComment, 
         upVoteThread, 
         downVoteThread, 
         neutralVoteThread
        };
