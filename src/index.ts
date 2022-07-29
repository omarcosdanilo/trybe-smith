import app, { router } from './app';

const PORT = 3000;

app.use(router);

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
