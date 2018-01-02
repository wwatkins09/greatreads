const MainPage = () => {
  return (
  <div>
    <Switch>
      <Route exact path="/" component={NewUserFormContainer} />
      <Route exact path="/users/:userId" component={UserShowContainer} />
    </Switch>
  </div>
  );
};
