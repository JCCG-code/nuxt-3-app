/**
 * @route /api/users/[id]
 */
export default defineEventHandler((event) => {
  // Accessing params
  console.log(getRouterParam(event, "id"));

  // Return statement
  return {
    path: event._path,
    success: true,
  };
});
