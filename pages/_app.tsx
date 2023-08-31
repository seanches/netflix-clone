// pages/_app.js

import './globals.css'; // Импортируйте глобальные стили здесь

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
