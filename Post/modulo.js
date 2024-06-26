export const post = async (id) => {
  const responde = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const pot = await responde.json();
  return pot;
};
