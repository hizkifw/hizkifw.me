import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>hizkifw's website</title>
      </Head>
      <div
        className={[
          'min-h-screen py-8 lg:py-12',
          'flex flex-col justify-center',
          'relative overflow-hidden',
        ].join(' ')}
      >
        <div
          className="absolute top-0 left-0 w-full h-full print:hidden"
          style={{
            background: [
              'linear-gradient(180deg, #F7D6FF 0%, #005686 100%)',
              'linear-gradient(180deg, #FFFFFF 0%, #060046 100%)',
              'linear-gradient(130deg, #00FFA3 0%, #1A003C 100%)',
              'linear-gradient(307deg, #FF0000 0%, #3300C6 100%)',
              'radial-gradient(50% 72% at 50% 50%, #004584 0%, #00FFB2 100%)',
              'radial-gradient(100% 140% at 100% 0%, #5ED500 0%, #2200AA 100%)',
            ].join(','),
            backgroundBlendMode:
              'soft-light, overlay, difference, difference, color-burn, normal',
          }}
        />
        <div
          className={[
            'relative w-full py-12 px-16',
            'bg-white drop-shadow-xl shadow-slate-700/10',
            'ring-1 ring-gray-900/5',
            'print:drop-shadow-none print:ring-0',
            'md:max-w-5xl md:mx-auto',
            'lg:max-w-6xl lg:pt-16 lg:pb-28',
          ].join(' ')}
        >
          <header className="prose">
            <h1>Hizkia Felix Winata</h1>
            <p className="lead -mt-8 mb-8">Web Developer</p>
          </header>
          <main className="flex gap-12 flex-col lg:flex-row-reverse">
            <article className="prose prose-slate">
              <h2 id="profile">Profile</h2>
              <p>
                Exploring the world of computers, with a passion in building
                software that helps others. I have extensive experience building
                responsive web applications, and have general knowledge on
                developing and deploying scalable backend systems. I can quickly
                learn anything by getting hands-on with new tech.
              </p>
              <h2 id="experience">Experience</h2>
              <ul>
                <li>
                  <a href="https://pintu.co.id">Pintu</a> - Part time (Feb 2020
                  - Aug 2021)
                  <ul>
                    <li>
                      Built Pintu&#39;s landing page and Pintu Academy, using
                      Next.js and a Wordpress backend
                    </li>
                    <li>
                      Developed internal tools to speed up KYC flow by
                      automatically extracting details from identity cards using
                      Google&#39;s Cloud Vision OCR
                    </li>
                    <li>
                      Implemented the referral feature on the app using React
                      Native
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://rupiahtoken.com">Rupiah Token</a> -
                  Internship (May - Sep 2019)
                  <ul>
                    <li>
                      Developed Rupiah Token&#39;s website from scratch with
                      React and styled-components
                    </li>
                    <li>
                      Built a multisig BEP2 wallet (before native multisig was
                      available) using Amazon CloudHSM to generate ECDSA
                      signatures.
                    </li>
                    <li>
                      Generated a vanity transaction for IDRTB&#39;s deployment
                      on the Binance chain
                    </li>
                  </ul>
                </li>
              </ul>
              <h2 id="personal-projects">Personal projects</h2>
              <ul>
                <li>
                  Deployed Kubernetes with k3s on a cluster of 3 servers on
                  Hetzner, and used Helm to run Nextcloud, Keycloak, and a
                  custom Discord OAuth2 to OpenID Connect shim written in Rust{' '}
                  <small>
                    (
                    <a href="https://gitlab.com/aonahara/discord-oidc">
                      gitlab.com/aonahara/discord-oidc
                    </a>
                    )
                  </small>
                  .
                </li>
                <li>
                  <a href="https://archive.ragtag.moe">Ragtag Archive</a>: A
                  public YouTube archive, indexing over 125,000 videos on
                  Elasticsearch and serving over 750 TB of data stored on
                  GSuite&#39;s unlimited plan.
                  <span className="hidden print:block">
                    (archive.ragtag.moe)
                  </span>
                </li>
                <li>
                  Created a project management web app with Next.js and Firebase
                  auth to help a VTuber translation group manage their video
                  projects.
                </li>
                <li>
                  <a href="https://github.com/hizkifw/fc2-live-dl">
                    fc2-live-dl
                  </a>
                  : Reverse engineered FC2&#39;s streaming service to build a
                  tool that records live streams in original quality.
                  <span className="hidden print:block">
                    (github.com/hizkifw/fc2-live-dl)
                  </span>
                </li>
                <li>
                  <a href="https://github.com/hizkifw/react-srv3">react-srv3</a>
                  : Built a React component to render YouTube&#39;s SRV3
                  captions and published it as an NPM package.
                  <span className="hidden print:block">
                    (github.com/hizkifw/react-srv3)
                  </span>
                </li>
              </ul>
            </article>
            <aside className="prose prose-slate">
              <h2>Contact information</h2>
              <ul>
                <li>
                  <a href="https://github.com/hizkifw">github.com/hizkifw</a>
                </li>
                <li>
                  <a href="https://hizkifw.me">hizkifw.me</a>
                </li>
                <li>
                  <a href="mailto:felix@hizkifw.me">felix@hizkifw.me</a>
                </li>
              </ul>

              <h2 id="skills">Skills</h2>
              <p>I primarily use this software stack for development:</p>
              <ul>
                <li>Git</li>
                <li>React/Next.js</li>
                <li>Typescript</li>
                <li>TailwindCSS</li>
                <li>NestJS</li>
              </ul>
              <p>Other languages and tools I have experience in:</p>
              <ul>
                <li>Python</li>
                <li>Rust</li>
                <li>Helm</li>
              </ul>
              <p>Other notable skills:</p>
              <ul>
                <li>
                  Proficient in the Linux command line, have been managing Linux
                  servers for personal use since 2015.
                </li>
              </ul>

              <h2>Education</h2>
              <ul>
                <li>
                  <a href="https://www.uow.edu.au">University of Wollongong</a>:
                  Bachelor of Science in Computer Science
                  <p>
                    <time dateTime="2019-10-01">Oct 2019</time> -{' '}
                    <time dateTime="2022-09-01">Sep 2022</time> (ongoing)
                  </p>
                </li>
              </ul>
            </aside>
          </main>
        </div>
      </div>
    </>
  );
}
