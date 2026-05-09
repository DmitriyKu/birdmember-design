import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalDocShell } from '@/components/legal/legal-doc-shell'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Birdmember collects, uses, and protects your personal data.',
}

export default function PrivacyPage() {
  return (
    <LegalDocShell title="Privacy Policy">
      <section>
        <h2>1. Privacy at a glance</h2>
        <h3>General information</h3>
        <p>
          The following notes provide a straightforward overview of what happens to your personal data when you visit this website. Personal data is any data
          with which you can be personally identified.
        </p>
      </section>

      <section>
        <h2>2. Data collection on this website</h2>
        <h3>Who is responsible for data collection on this website?</h3>
        <p>
          Data processing on this website is carried out by the website operator. You can find the operator&apos;s contact details in the{' '}
          <Link href="/terms">legal notice</Link> on this website.
        </p>
        <h3>How do we collect your data?</h3>
        <p>
          Your data is collected partly because you provide it to us. This may, for example, be data you enter in a contact form. Other data is collected
          automatically or after your consent when you visit the website by our IT systems. This is mainly technical data (e.g. internet browser, operating system,
          or time of the page view).
        </p>
      </section>

      <section>
        <h2>3. Contact form</h2>
        <p>
          If you send us enquiries via a contact form, the information you provide in the form, including the contact details you enter there, will be stored by
          us for the purpose of processing the enquiry and in case of follow-up questions. We will not pass on this data without your consent.
        </p>
      </section>

      <section>
        <h2>4. General information and mandatory information</h2>
        <h3>Data protection</h3>
        <p>
          The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance
          with the statutory data protection regulations and this privacy policy. When you use this website, various personal data are collected. This privacy
          policy explains what data we collect and what we use it for.
        </p>
      </section>

      <section>
        <h2>5. Your rights</h2>
        <p>You have the right at any time to:</p>
        <ul>
          <li>Obtain information about your personal data stored by us</li>
          <li>Request the correction of incorrect personal data</li>
          <li>Request the deletion of your personal data stored by us</li>
          <li>Request the restriction of processing</li>
          <li>Object to processing</li>
        </ul>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>
          If you have questions about the collection, processing, or use of your personal data, or regarding information, correction, blocking, or deletion of
          data, please contact:
        </p>
        <p>
          Birdmember GmbH
          <br />
          Dorfstrasse 78
          <br />
          CH-3646 Einigen
          <br />
          Switzerland
          <br />
          E-mail:{' '}
          <a href="mailto:info@birdmember.com" className="text-secondary hover:text-white">
            info@birdmember.com
          </a>
          <br />
          Phone: +41 79 310 15 13
        </p>
        <p className="text-white/60">
          Note: This privacy policy may be updated and supplemented as needed to reflect legal requirements or changes to our services.
        </p>
      </section>
    </LegalDocShell>
  )
}
