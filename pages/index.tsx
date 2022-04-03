import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="max-w-xl mx-auto py-24">
        <h1 className="text-4xl font-bold text-gray-900">Hizkia Felix</h1>
        <p className="text-gray-700">
          Student at the{' '}
          <a
            href="https://uow.edu.au"
            className="text-gray-900 hover:underline focus:underline focus:outline-none"
          >
            University of Wollongong
          </a>
        </p>
        <p className="mt-4 text-gray-700">
          Building webapps with Next.js, TypeScript, and TailwindCSS, and
          learning backend with Go and Kubernetes.
        </p>
        <p className="mt-4 text-gray-700">
          <a
            href="/cv"
            className="text-gray-900 hover:underline focus:underline focus:outline-none"
          >
            View my CV
          </a>
        </p>
      </div>
    </>
  );
};

export default HomePage;
