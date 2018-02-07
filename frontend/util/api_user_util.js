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

export const updateUserPhoto = function(formData) {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${formData.get("user[id]")}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
}
