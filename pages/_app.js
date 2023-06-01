import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>My Next.js App</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;