export const createSession = function(user) {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user}
  });
};
