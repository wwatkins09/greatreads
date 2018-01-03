export const createUser = function(user) {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  });
};
