export async function getFakerJs() {
  return (await import('@faker-js/faker')).default;
}
