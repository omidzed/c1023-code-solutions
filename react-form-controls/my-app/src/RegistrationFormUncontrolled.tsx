export function RegistrationFormUncontrolled() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    for (const [username, password] of formData.entries()) {
      console.log({ username, password });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input name="username" type="text" autoComplete="username"></input>
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          autoComplete="current-password"></input>
      </label>
      <input type="submit" value="Sign Up" />
    </form>
  );
}
