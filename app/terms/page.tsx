import type { Metadata } from 'next'
import { LegalDocShell } from '@/components/legal/legal-doc-shell'

export const metadata: Metadata = {
  title: 'Terms & Legal Notice',
  description: 'Legal notice, company information, and terms of use for Birdmember.',
}

export default function TermsPage() {
  return (
    <LegalDocShell title="Terms & Legal Notice">
      <p className="text-white/70">
        This page contains the legal notice (imprint) for Birdmember GmbH and general terms governing use of this website. By using the site, you acknowledge
        these provisions where applicable.
      </p>

      <section>
        <h2>Legal notice (Imprint)</h2>
        <p>Information provided in accordance with applicable transparency and disclosure requirements.</p>
      </section>

      <section>
        <h3>Company name</h3>
        <p>Birdmember GmbH</p>
      </section>

      <section>
        <h3>Address</h3>
        <p>
          Dorfstrasse 78
          <br />
          CH-3646 Einigen
          <br />
          Switzerland
        </p>
      </section>

      <section>
        <h3>Contact</h3>
        <p>
          E-mail:{' '}
          <a href="mailto:info@birdmember.com" className="text-secondary hover:text-white">
            info@birdmember.com
          </a>
          <br />
          Phone: +41 79 310 15 13
        </p>
      </section>

      <section>
        <h3>Authorized representative</h3>
        <p>Alexander Zaugg</p>
      </section>

      <section>
        <h3>Commercial register entry</h3>
        <p>CHE-155.323.849</p>
      </section>

      <section>
        <h3>Disclaimer</h3>
        <p>
          The author assumes no warranty for the correctness, accuracy, currency, reliability, and completeness of the information. Liability claims against the
          author for damages of a material or immaterial nature arising from access to or use or non-use of the published information, from misuse of the
          connection, or from technical faults are excluded.
        </p>
      </section>

      <section>
        <h3>Liability for links</h3>
        <p>
          References and links to third-party websites are outside our area of responsibility. We disclaim any responsibility for such websites. Access to and
          use of such websites is at the user&apos;s own risk.
        </p>
      </section>

      <section>
        <h3>Copyright</h3>
        <p>
          Copyright and all other rights in content, images, photographs, or other files on this website belong exclusively to Birdmember GmbH or the rights
          holders expressly named. The reproduction of any elements requires the prior written consent of the rights holder.
        </p>
      </section>
    </LegalDocShell>
  )
}
