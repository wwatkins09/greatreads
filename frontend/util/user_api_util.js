export const fetchCurrentUser = function(userId) {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  });
};
