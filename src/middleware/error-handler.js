

var ErrorAnalysis = function (err, history) {
  if (err.response.status === 401){
    history.push("/");
  } else if (err.response.status === 500){
    history.push("/500");
  }
}

export { ErrorAnalysis };
