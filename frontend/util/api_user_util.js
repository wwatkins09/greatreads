export const fetchUser = function(userId) {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  });
};

export const createUser = function(user) {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  });
};
