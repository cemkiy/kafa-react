var ErrorAnalysis = function(err, history) {
  // TODO: Error handlers
  if (err.response.status === 401) {
    history.push("/");
  } else if (err.response.status === 500) {
    history.push("/");
  }
}

export {
  ErrorAnalysis
};
