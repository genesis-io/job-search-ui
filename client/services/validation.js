export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordRegex = /^[a-zA-Z0-9]{3,30}$/;

// export const validateRegex = (context, regex) => {
//   if (!regex.test(email) || !email.length) {
//     context.setState({ isEmailError: true });
//   } else {
//     context.setState({ isEmailError: false });
//   }
// }
