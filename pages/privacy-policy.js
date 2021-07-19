import Link from 'next/link'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import { SectionFlex } from '../styles'

const List = styled.li`
  list-style: circle;
  font-weight: normal;
  font-family: 'Open Sans', sans-serif;
  text-transform: none;
`
const Heading = styled.h3`
  margin-top: ${({ theme }) => theme.margin.medium};
`

export default function Home() {
  return (
    <>
      <Meta />
      <header>
        <Navbar />
      </header>
      <main>
        <SectionFlex>
          <h1>Privacy Policy</h1>
          <h2>Who we are</h2>
          <p>
            Our website address is{' '}
            <Link href="/">https://letschatnownownow.com</Link>.
          </p>
          <Heading>A. Introduction</Heading>
          <ol>
            <List>
              The privacy of our website visitors is very important to us, and
              we are committed to safeguarding it. This policy explains what we
              will do with your personal information.
            </List>
            <List>
              Consenting to our use of cookies in accordance with the terms of
              this policy when you first visit our website permits us to use
              cookies every time you visit our website.
            </List>
          </ol>
          <Heading>B. Credit</Heading>
          <p>
            This document was created using a template from SEQ Legal
            (seqlegal.com) and modified by Website Planet (
            <a href="https://www.websiteplanet.com">www.websiteplanet.com</a>)
            <Heading>C. Collecting personal information</Heading>
            The following types of personal information may be collected,
            stored, and used:
          </p>
          <ol>
            <List>
              information about your computer including your IP address,
              geographical location, browser type, and version, and operating
              system;
            </List>
            <List>
              information about your visits to and use of this website including
              the referral source, length of visit, page views, and website
              navigation paths;
            </List>
            <List>
              information, such as your email address, that you enter when you
              register with our website;
            </List>
            <List>
              information that you enter when you create a profile on our
              website—for example, your name, profile pictures, gender,
              birthday, relationship status, interests and hobbies, educational
              details, and employment details;
            </List>
            <List>
              information, such as your name and email address, that you enter
              in order to set up subscriptions to our emails and/or newsletters;
            </List>
            <List>
              information that you enter while using the services on our
              website;
            </List>
            <List>
              information that is generated while using our website, including
              when, how often, and under what circumstances you use it;
            </List>
            <List>
              information relating to anything you purchase, services you use,
              or transactions you make through our website, which includes your
              name, address, telephone number, email address, and credit card
              details;
            </List>
            <List>
              information that you post to our website with the intention of
              publishing it on the internet, which includes your username,
              profile pictures, and the content of your posts;
            </List>
            <List>
              information contained in any communications that you send to us by
              email or through our website, including its communication content
              and metadata;
            </List>
            <List>any other personal information that you send to us.</List>
          </ol>
          <p>
            Before you disclose to us the personal information of another
            person, you must obtain that person’s consent to both the disclosure
            and the processing of that personal information in accordance with
            this policy
          </p>
          <Heading>D. Using your personal information</Heading>
          <p>
            Personal information submitted to us through our website will be
            used for the purposes specified in this policy or on the relevant
            pages of the website. We may use your personal information for the
            following:
          </p>
          <ol>
            <List>administering our website and business;</List>
            <List>personalizing our website for you;</List>
            <List>
              enabling your use of the services available on our website;
            </List>
            <List>sending you goods purchased through our website;</List>
            <List>supplying services purchased through our website;</List>
            <List>
              sending statements, invoices, and payment reminders to you, and
              collecting payments from you;
            </List>
            <List>sending you non-marketing commercial communications;</List>
            <List>
              sending you email notifications that you have specifically
              requested;
            </List>
            <List>
              sending you our email newsletter, if you have requested it (you
              can inform us at any time if you no longer require the
              newsletter);
            </List>
            <List>
              sending you marketing communications relating to our business or
              the businesses of carefully-selected third parties which we think
              may be of interest to you, by post or, where you have specifically
              agreed to this, by email or similar technology (you can inform us
              at any time if you no longer require marketing communications);
            </List>
            <List>
              providing third parties with statistical information about our
              users (but those third parties will not be able to identify any
              individual user from that information);
            </List>
            <List>
              dealing with inquiries and complaints made by or about you
              relating to our website;
            </List>
            <List>keeping our website secure and prevent fraud;</List>
            <List>
              verifying compliance with the terms and conditions governing the
              use of our website (including monitoring private messages sent
              through our website private messaging service); and
            </List>
            <List>other uses.</List>
          </ol>
          <p>
            If you submit personal information for publication on our website,
            we will publish and otherwise use that information in accordance
            with the license you grant to us.
          </p>
          <p>
            Your privacy settings can be used to limit the publication of your
            information on our website and can be adjusted using privacy
            controls on the website.
          </p>
          <p>
            We will not, without your express consent, supply your personal
            information to any third party for their or any other third party’s
            direct marketing.
          </p>
          <Heading>E. Disclosing personal information</Heading>
          <p>
            We may disclose your personal information to any of our employees,
            officers, insurers, professional advisers, agents, suppliers, or
            subcontractors as reasonably necessary for the purposes set out in
            this policy.
          </p>
          <p>
            We may disclose your personal information to any member of our group
            of companies (this means our subsidiaries, our ultimate holding
            company, and all its subsidiaries) as reasonably necessary for the
            purposes set out in this policy.
          </p>
          <p>We may disclose your personal information:</p>
          <ol>
            <List>to the extent that we are required to do so by law;</List>
            <List>
              in connection with any ongoing or prospective legal proceedings;
            </List>
            <List>
              in order to establish, exercise, or defend our legal rights
              (including providing information to others for the purposes of
              fraud prevention and reducing credit risk);
            </List>
            <List>
              to the purchaser (or prospective purchaser) of any business or
              asset that we are (or are contemplating) selling; and
            </List>
            <List>
              to any person who we reasonably believe may apply to a court or
              other competent authority for disclosure of that personal
              information where, in our reasonable opinion, such court or
              authority would be reasonably likely to order disclosure of that
              personal information.
            </List>
          </ol>
          <p>
            Except as provided in this policy, we will not provide your personal
            information to third parties.
          </p>
          <Heading>F. International data transfers</Heading>
          <ol>
            <List>
              Information that we collect may be stored, processed in, and
              transferred between any of the countries in which we operate in
              order to enable us to use the information in accordance with this
              policy.
            </List>
            <List>
              Information that we collect may be transferred to the following
              countries which do not have data protection laws equivalent to
              those in force in the European Economic Area: the United States of
              America, Russia, Japan, China, and India.
            </List>
            <List>
              Personal information that you publish on our website or submit for
              publication on our website may be available, via the internet,
              around the world. We cannot prevent the use or misuse of such
              information by others.
            </List>
            <List>
              You expressly agree to the transfers of personal information
              described in this Section F.
            </List>
          </ol>
          <Heading>G. Retaining personal information</Heading>
          <ol>
            <List>
              <p>
                Section G sets out our data retention policies and procedure,
                which are designed to help ensure that we comply with our legal
                obligations regarding the retention and deletion of personal
                information.
              </p>
            </List>
            <List>
              <p>
                Personal information that we process for any purpose or purposes
                shall not be kept for longer than is necessary for that purpose
                or those purposes.
              </p>
            </List>
            <List>
              <p>
                Notwithstanding the other provisions of this Section G, we will
                retain documents (including electronic documents) containing
                personal data:
              </p>
              <ol>
                <List>to the extent that we are required to do so by law;</List>
                <List>
                  if we believe that the documents may be relevant to any
                  ongoing or prospective legal proceedings; and
                </List>
                <List>
                  in order to establish, exercise, or defend our legal rights
                  (including providing information to others for the purposes of
                  fraud prevention and reducing credit risk).
                </List>
              </ol>
            </List>
          </ol>
          <Heading>H. Security of your personal information</Heading>
          <ol>
            <List>
              We will take reasonable technical and organizational precautions
              to prevent the loss, misuse, or alteration of your personal
              information.
            </List>
            <List>
              We will store all the personal information you provide on our
              secure (password- and firewall-protected) servers.
            </List>
            <List>
              All electronic financial transactions entered into through our
              website will be protected by encryption technology.
            </List>
            <List>
              You acknowledge that the transmission of information over the
              internet is inherently insecure, and we cannot guarantee the
              security of data sent over the internet.
            </List>
            <List>
              You are responsible for keeping the password you use for accessing
              our website confidential; we will not ask you for your password
              (except when you log in to our website).
            </List>
          </ol>
          <Heading>I. Amendments</Heading>
          <p>
            We may update this policy from time to time by publishing a new
            version on our website. You should check this page occasionally to
            ensure you understand any changes to this policy. We may notify you
            of changes to this policy by email or through the private messaging
            system on our website.
          </p>
          <Heading>J. Your rights</Heading>
          <p>
            You may instruct us to provide you with any personal information we
            hold about you; the provision of such information will be subject to
            the following:
          </p>
          <ol>
            <List>the payment of a fee; and</List>
            <List>the supply of appropriate evidence of your identity.</List>
          </ol>
          <p>
            We may withhold personal information that you request to the extent
            permitted by law.
          </p>
          <p>
            You may instruct us at any time not to process your personal
            information for marketing purposes.
          </p>
          <p>
            In practice, you will usually either expressly agree in advance to
            our use of your personal information for marketing purposes, or we
            will provide you with an opportunity to opt-out of the use of your
            personal information for marketing purposes.
          </p>
          <Heading>K. Third party websites</Heading>
          <p>
            Our website includes hyperlinks to, and details of, third party
            websites. We have no control over and are not responsible for, the
            privacy policies and practices of third parties.
          </p>
          <Heading>L. Updating information</Heading>
          <p>
            Please let us know if the personal information that we hold about
            you needs to be corrected or updated.
          </p>
          <Heading>M. Cookies</Heading>
          <p>
            Our website uses cookies. A cookie is a file containing an
            identifier (a string of letters and numbers) that is sent by a web
            server to a web browser and is stored by the browser. The identifier
            is then sent back to the server each time the browser requests a
            page from the server. Cookies may be either “persistent” cookies or
            “session” cookies: a persistent cookie will be stored by a web
            browser and will remain valid until its set expiry date unless
            deleted by the user before the expiry date; a session cookie, on the
            other hand, will expire at the end of the user session, when the web
            browser is closed. Cookies do not typically contain any information
            that personally identifies a user, but personal information that we
            store about you may be linked to the information stored in and
            obtained from cookies.
          </p>
          <ol>
            <List>
              <p>
                The names of the cookies that we use on our website, and the
                purposes for which they are used, are set out below:
              </p>
              <ol>
                <List>
                  we use Google Analytics and Adwords on our website to
                  recognize a computer when a user visits the website.
                </List>
              </ol>
            </List>
            <List>
              <p>
                Most browsers allow you to refuse to accept cookies—for example:
              </p>
              <ol>
                <List>
                  in Internet Explorer (version 10) you can block cookies using
                  the cookie handling override settings available by clicking
                  “Tools,” “Internet Options,” “Privacy,” and then “Advanced”;
                </List>
                <List>
                  in Firefox (version 24) you can block all cookies by clicking
                  “Tools,” “Options,” “Privacy,” selecting “Use custom settings
                  for history” from the drop-down menu, and unticking “Accept
                  cookies from sites”; and
                </List>
                <List>
                  in Chrome (version 29), you can block all cookies by accessing
                  the “Customize and control” menu and clicking “Settings,”
                  “Show advanced settings,” and “Content settings,” and then
                  selecting “Block sites from setting any data” under the
                  “Cookies” heading.
                </List>
              </ol>
            </List>
          </ol>
          <p>
            Blocking all cookies will have a negative impact upon the usability
            of many websites. If you block cookies, you will not be able to use
            all the features on our website.
          </p>
          <ol>
            <List>
              <p>
                You can delete cookies already stored on your computer—for
                example:
              </p>
              <ol>
                <List>
                  in Internet Explorer (version 10), you must manually delete
                  cookie files (you can find instructions for doing so at{' '}
                  <a href="https://support.microsoft.com/kb/278835">
                    http://support.microsoft.com/kb/278835
                  </a>{' '}
                  );
                </List>
                <List>
                  in Firefox (version 24), you can delete cookies by clicking
                  “Tools,” “Options,” and “Privacy”, then selecting “Use custom
                  settings for history”, clicking “Show Cookies,” and then
                  clicking “Remove All Cookies”; and
                </List>
                <List>
                  in Chrome (version 29), you can delete all cookies by
                  accessing the “Customize and control” menu, and clicking
                  “Settings,” “Show advanced settings,” and “Clear browsing
                  data,” and then selecting “Delete cookies and other site and
                  plug-in data” before clicking “Clear browsing data.”
                </List>
              </ol>
            </List>
            <List>
              <p>
                Deleting cookies will have a negative impact on the usability of
                many websites.
              </p>
            </List>
          </ol>
        </SectionFlex>
      </main>
      <footer>
        <Footer footer />
      </footer>
    </>
  )
}
