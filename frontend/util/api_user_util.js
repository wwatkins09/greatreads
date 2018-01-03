export const createUser = function(user) {
  return $.ajax({
    method: 'POST',
    url: 'api_users',
    data: {user}
  });
};
