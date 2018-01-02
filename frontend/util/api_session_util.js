export const createSession = function(credentials) {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {credentials}
  });
};
