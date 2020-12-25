export default function getUserData() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL
  return fetch(`${apiBaseUrl}/user`).then((res) => res.json())
}
