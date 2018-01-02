export const createSession = function(credentials) {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {credentials}
  });
};

export const destroySession = function() {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });
};
