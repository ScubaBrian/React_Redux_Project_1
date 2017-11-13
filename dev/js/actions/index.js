export const selectUser = (user) => {
  console.log("CLICKED!!", user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  }
};
