/**
 * @route /api/users
 */
export default defineEventHandler((event) => {
  return {
    path: event._path,
    success: true,
  };
});
