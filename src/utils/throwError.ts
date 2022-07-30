const throwError = (status: string, message: string) => {
  const error = Error();
  error.name = status;
  error.message = message;
  throw error;
};

export default throwError;