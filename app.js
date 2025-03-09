function app() {
  if (loggedIn()) {
    return 'Welcome to the app!';
  }
}

function loggedIn() {
  return true;
}
