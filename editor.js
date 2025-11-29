btnLogin.onclick = () => {
  const u = usernameEl.value.trim();
  const p = passwordEl.value;
  const user = authStore.users[u];
  if (!user || user.password !== p) {
    toast('Invalid credentials.');
    return;
  }
  console.log("Login successful for", u);
  enterApp(u);
};


