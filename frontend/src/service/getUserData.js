export default function getUserData() {
    return fetch('http://onboarding.local/user')
      .then(res => res.json())
  }