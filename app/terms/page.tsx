import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms of Service — Morning Mode",
  description:
    "Read the MorningMode Terms of Service for app usage, subscriptions, HealthKit, Screen Time shielding, disclaimers, and legal terms.",
  alternates: {
    canonical: "https://morningmode.app/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPageShell activePage="terms">
      <article className="legal-doc">
        <p className="legal-doc__eyebrow mm-label">Legal</p>
        <h1 className="mm-display">Terms of Service</h1>
        <p className="legal-doc__effective-date mm-text mm-text--sm">
          Effective date: May 26, 2026
        </p>

        <p className="mm-text">
          These Terms of Service (“Terms”) govern your use of the{" "}
          <span translate="no">MorningMode</span> mobile application, widgets,
          app extensions, and related features (collectively, the “App”).{" "}
          <span translate="no">MorningMode</span> is operated by Max Dannheim
          (“MorningMode,” “we,” “us,” or “our”).
        </p>
        <p className="mm-text">
          By downloading, accessing, or using the App, you agree to these Terms.
          If you do not agree, do not use the App.
        </p>

        <h2 className="mm-heading" id="eligibility">
          Eligibility
        </h2>
        <p className="mm-text">
          You must be at least 13 years old to use{" "}
          <span translate="no">MorningMode</span>. If you use the App on behalf
          of another person or entity, you confirm that you have authority to
          accept these Terms on their behalf.
        </p>

        <h2 className="mm-heading" id="license-to-use-the-app">
          License to Use the App
        </h2>
        <p className="mm-text">
          Subject to these Terms, we grant you a personal, limited,
          non-exclusive, non-transferable, revocable license to use{" "}
          <span translate="no">MorningMode</span> on Apple-branded devices that
          you own or control, as permitted by Apple’s App Store terms.
        </p>
        <p className="mm-text">You may not:</p>
        <ul>
          <li>
            Copy, modify, reverse engineer, decompile, or attempt to extract the
            source code of the App, except where allowed by law.
          </li>
          <li>Use the App for unlawful, harmful, or abusive purposes.</li>
          <li>
            Interfere with the App’s operation or attempt to bypass technical
            protections in a way that harms{" "}
            <span translate="no">MorningMode</span>, Apple services, or other
            users.
          </li>
          <li>
            Resell, sublicense, or commercially exploit the App without our
            written permission.
          </li>
        </ul>

        <h2 className="mm-heading" id="morningmode-features">
          <span translate="no">MorningMode</span> Features
        </h2>
        <p className="mm-text">
          <span translate="no">MorningMode</span> helps you start your day with
          routines, movement goals, app shielding, reminders, alarms, widgets,
          Live Activities, and local progress insights.
        </p>
        <p className="mm-text">
          Some features depend on Apple system permissions or services,
          including HealthKit, notifications, AlarmKit, Family Controls, Managed
          Settings, Device Activity, WidgetKit, Live Activities, and StoreKit.
          These features may not work if permissions are denied, unavailable,
          restricted by device settings, or changed by Apple.
        </p>

        <h2 className="mm-heading" id="health-and-fitness-disclaimer">
          Health and Fitness Disclaimer
        </h2>
        <p className="mm-text">
          <span translate="no">MorningMode</span> is a productivity and routine
          app. It is not medical advice, health care advice, diagnosis,
          treatment, or a substitute for professional guidance.
        </p>
        <p className="mm-text">
          Movement goals, step counts, workout routines, streaks, and insights
          are provided for general motivation and convenience. You are
          responsible for deciding whether an activity is safe for you. Consult
          a qualified professional before starting or changing any exercise
          routine if you have health concerns.
        </p>

        <h2 className="mm-heading" id="screen-time-and-app-shielding">
          Screen Time and App Shielding
        </h2>
        <p className="mm-text">
          <span translate="no">MorningMode</span> may use Apple’s Screen
          Time-related frameworks to temporarily shield apps or categories that
          you choose. You are responsible for choosing which apps to shield and
          for ensuring that app shielding does not block access to services you
          need, including emergency, health, work, school, or family
          communication tools.
        </p>
        <p className="mm-text">
          You can change or disable shielding settings in{" "}
          <span translate="no">MorningMode</span> or through iOS settings where
          applicable.
        </p>

        <h2 className="mm-heading" id="apple-terms">
          Apple Terms
        </h2>
        <p className="mm-text">
          Your use of <span translate="no">MorningMode</span> is also subject
          to Apple’s applicable terms, including the Apple Media Services Terms
          and Conditions and, where applicable, Apple’s Standard End User
          License Agreement:
        </p>
        <p className="mm-text">
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            rel="noopener noreferrer"
          >
            https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
          </a>
        </p>
        <p className="mm-text">
          If there is a conflict between these Terms and Apple’s mandatory App
          Store terms, Apple’s terms apply to the extent required.
        </p>

        <h2 className="mm-heading" id="privacy">
          Privacy
        </h2>
        <p className="mm-text">
          Your privacy is important to us.{" "}
          <span translate="no">MorningMode</span> is designed to keep routine,
          health-related, and app shielding data on your device. Please review
          our Privacy Policy:
        </p>
        <p className="mm-text">
          <Link href="/privacy">https://morningmode.app/privacy</Link>
        </p>

        <h2 className="mm-heading" id="intellectual-property">
          Intellectual Property
        </h2>
        <p className="mm-text">
          <span translate="no">MorningMode</span>, the App, its design, text,
          graphics, icons, code, features, and related materials are owned by us
          or our licensors and are protected by intellectual property laws. These
          Terms do not transfer ownership of any intellectual property rights to
          you.
        </p>
        <p className="mm-text">
          You may provide feedback, suggestions, or ideas about{" "}
          <span translate="no">MorningMode</span>. If you do, you grant us
          permission to use that feedback without restriction or compensation to
          you.
        </p>

        <h2 className="mm-heading" id="user-content-and-local-data">
          User Content and Local Data
        </h2>
        <p className="mm-text">
          <span translate="no">MorningMode</span> may let you create routines,
          tasks, workouts, settings, and related local data. You are responsible
          for the content you create and store in the App.
        </p>
        <p className="mm-text">
          Because <span translate="no">MorningMode</span> is local-first, you
          are responsible for maintaining your device, backups, and access to
          your data. Deleting the App or using “Delete All Data” may permanently
          remove local <span translate="no">MorningMode</span> data.
        </p>

        <h2 className="mm-heading" id="updates-and-availability">
          Updates and Availability
        </h2>
        <p className="mm-text">
          We may update, change, suspend, or discontinue any part of{" "}
          <span translate="no">MorningMode</span> at any time. We are not
          required to provide maintenance, support, updates, or specific
          features, except where required by law.
        </p>
        <p className="mm-text">
          The App may not be available in all countries, on all devices, or for
          all operating system versions.
        </p>

        <h2 className="mm-heading" id="termination">
          Termination
        </h2>
        <p className="mm-text">
          You may stop using <span translate="no">MorningMode</span> at any
          time by deleting the App from your device.
        </p>
        <p className="mm-text">
          We may suspend or terminate access to the App if you violate these
          Terms, if required by law, or if we discontinue the App. Sections that
          by their nature should survive termination will continue to apply,
          including intellectual property, disclaimers, limitation of liability,
          and governing law.
        </p>

        <h2 className="mm-heading" id="disclaimers">
          Disclaimers
        </h2>
        <p className="mm-text">
          <span translate="no">MorningMode</span> is provided “as is” and “as
          available.” To the maximum extent permitted by law, we disclaim all
          warranties, express or implied, including warranties of
          merchantability, fitness for a particular purpose, title, and
          non-infringement.
        </p>
        <p className="mm-text">
          We do not guarantee that <span translate="no">MorningMode</span> will
          be uninterrupted, error-free, secure, accurate, or available at any
          particular time. We do not guarantee that reminders, alarms, app
          shielding, HealthKit data, widgets, Live Activities, or subscription
          features will always work as expected.
        </p>

        <h2 className="mm-heading" id="limitation-of-liability">
          Limitation of Liability
        </h2>
        <p className="mm-text">
          To the maximum extent permitted by law, we will not be liable for
          indirect, incidental, special, consequential, exemplary, or punitive
          damages, or for lost profits, lost data, loss of goodwill, device
          issues, missed alarms, missed reminders, or inability to access apps
          during shielding.
        </p>
        <p className="mm-text">
          To the maximum extent permitted by law, our total liability for any
          claim related to <span translate="no">MorningMode</span> or these
          Terms will not exceed the greater of: (a) the amount you paid us
          through the App in the 12 months before the claim, or (b) US $50.
        </p>
        <p className="mm-text">
          Some jurisdictions do not allow certain limitations of liability, so
          some of these limits may not apply to you.
        </p>

        <h2 className="mm-heading" id="indemnity">
          Indemnity
        </h2>
        <p className="mm-text">
          You agree to defend, indemnify, and hold us harmless from claims,
          liabilities, damages, losses, and expenses arising from your misuse of{" "}
          <span translate="no">MorningMode</span>, your violation of these
          Terms, or your violation of applicable law.
        </p>

        <h2 className="mm-heading" id="governing-law">
          Governing Law
        </h2>
        <p className="mm-text">
          These Terms are governed by the laws of the Federal Republic of
          Germany, without regard to conflict of law rules, except where your
          local law requires otherwise.
        </p>

        <h2 className="mm-heading" id="changes-to-these-terms">
          Changes to These Terms
        </h2>
        <p className="mm-text">
          We may update these Terms from time to time. If we make changes, we
          will update the effective date above and post the new Terms at:
        </p>
        <p className="mm-text">
          <a href="https://morningmode.app/terms" rel="noopener noreferrer">
            https://morningmode.app/terms
          </a>
        </p>
        <p className="mm-text">
          Your continued use of <span translate="no">MorningMode</span> after
          changes become effective means you accept the updated Terms.
        </p>

        <h2 className="mm-heading" id="contact">
          Contact
        </h2>
        <p className="mm-text">
          If you have questions about these Terms, contact us at:
        </p>
        <p className="mm-text">
          <a href="mailto:northframeapps@gmail.com">northframeapps@gmail.com</a>
        </p>
        <p className="mm-text">Operator: Max Dannheim</p>
      </article>
    </LegalPageShell>
  );
}
