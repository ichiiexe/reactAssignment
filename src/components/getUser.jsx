export async function getUsers() {
  const response = await fetch("https://reqres.in/api/users");

  return await response.json();
}
