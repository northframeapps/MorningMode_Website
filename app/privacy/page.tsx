import type { Metadata } from "next";

import { LegalPageShell } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Morning Mode",
  description:
    "Read how MorningMode handles privacy, local app data, HealthKit data, Screen Time shielding, notifications, widgets, and subscriptions.",
  alternates: {
    canonical: "https://morningmode.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageShell activePage="privacy">
      <article className="legal-doc">
        <p className="legal-doc__eyebrow mm-label">Legal</p>
        <h1 className="mm-display">Privacy Policy</h1>
        <p className="legal-doc__effective-date mm-text mm-text--sm">
          Effective date: May 26, 2026
        </p>

        <p className="mm-text">
          <span translate="no">MorningMode</span> (“MorningMode,” “we,” “us,”
          or “our”) is operated by Max Dannheim. This Privacy Policy explains
          how <span translate="no">MorningMode</span> handles information when
          you use the <span translate="no">MorningMode</span> mobile
          application, widgets, and related app extensions.
        </p>

        <p className="mm-text">
          <span translate="no">MorningMode</span> is designed to be
          local-first. We do not operate an account system, we do not run a
          developer backend for app data, and we do not use third-party
          analytics, advertising, or tracking SDKs.
        </p>

        <h2 className="mm-heading" id="information-we-collect">
          Information We Collect
        </h2>
        <p className="mm-text">
          We do not collect personal information from the{" "}
          <span translate="no">MorningMode</span> app on our servers.
        </p>
        <p className="mm-text">
          The app stores the information needed to run your morning routine
          locally on your device, including:
        </p>
        <ul>
          <li>
            Morning routines, tasks, workouts, session progress, streaks, and
            local insight statistics.
          </li>
          <li>
            App settings such as wake times, movement goals, active days,
            language, notification preferences, and onboarding status.
          </li>
          <li>
            Subscription access status, where applicable, so the app and
            widgets can show the correct feature access state.
          </li>
          <li>
            Screen Time shielding selections as opaque Apple tokens. These
            tokens allow the app to shield selected apps or categories, but they
            are not sent to us.
          </li>
        </ul>
        <p className="mm-text">
          This information stays on your device unless you choose to export or
          share it using system sharing features.
        </p>

        <h2 className="mm-heading" id="healthkit-data">
          HealthKit Data
        </h2>
        <p className="mm-text">
          If you grant HealthKit permission,{" "}
          <span translate="no">MorningMode</span> reads step count, walking and
          running distance, and active energy data from Apple Health to help
          track movement goals and unlock your morning routine.{" "}
          <span translate="no">MorningMode</span> does not write data to
          HealthKit.
        </p>
        <p className="mm-text">
          HealthKit data is processed on your device. We do not receive,
          collect, sell, or share your HealthKit data.
        </p>
        <p className="mm-text">
          You can change HealthKit permissions at any time in the iOS Settings
          app or the Apple Health app.
        </p>

        <h2 className="mm-heading" id="screen-time-and-app-shielding">
          Screen Time and App Shielding
        </h2>
        <p className="mm-text">
          If you enable app shielding, <span translate="no">MorningMode</span>{" "}
          uses Apple’s Family Controls, Managed Settings, and Device Activity
          frameworks to temporarily restrict selected apps or categories during
          your morning routine.
        </p>
        <p className="mm-text">
          Your Screen Time selections are stored locally on your device and in
          the app group shared with the{" "}
          <span translate="no">MorningMode</span> extensions. We do not receive
          the names of the apps or categories you choose to shield.
        </p>
        <p className="mm-text">
          You can disable app shielding in{" "}
          <span translate="no">MorningMode</span> or change the related
          authorization in iOS Settings.
        </p>

        <h2
          className="mm-heading"
          id="notifications-alarms-widgets-and-live-activities"
        >
          Notifications, Alarms, Widgets, and Live Activities
        </h2>
        <p className="mm-text">
          <span translate="no">MorningMode</span> may ask permission to send
          notifications, schedule alarms, show widgets, and display Live
          Activities. These features are used for reminders, wake-up flows,
          routine progress, and app status.
        </p>
        <p className="mm-text">
          Notification preferences and related scheduling information are stored
          locally on your device. You can change notification permissions in iOS
          Settings.
        </p>

        <h2 className="mm-heading" id="sharing-of-information">
          Sharing of Information
        </h2>
        <p className="mm-text">
          We do not sell your personal information. We do not share personal
          information with advertisers, data brokers, or analytics providers.
        </p>
        <p className="mm-text">
          Information may leave your device only in these limited cases:
        </p>
        <ul>
          <li>
            You choose to export or share information using iOS sharing
            features.
          </li>
          <li>You make a purchase or manage a subscription through Apple.</li>
          <li>
            Apple system frameworks process information as necessary to provide
            features such as HealthKit, notifications, Screen Time, widgets,
            Live Activities, and StoreKit.
          </li>
        </ul>

        <h2 className="mm-heading" id="storage-and-retention">
          Storage and Retention
        </h2>
        <p className="mm-text">
          <span translate="no">MorningMode</span> stores app data locally using
          device storage such as UserDefaults, app group storage, and local JSON
          files. This allows the main app, widgets, and app extensions to work
          together.
        </p>
        <p className="mm-text">
          You can delete your <span translate="no">MorningMode</span> data
          using the “Delete All Data” option in Settings. You can also remove
          locally stored app data by deleting the app from your device.
        </p>

        <h2 className="mm-heading" id="your-choices">
          Your Choices
        </h2>
        <p className="mm-text">
          You can control <span translate="no">MorningMode</span> data and
          permissions by:
        </p>
        <ul>
          <li>
            Deleting app data in <span translate="no">MorningMode</span>{" "}
            Settings.
          </li>
          <li>Deleting the app from your device.</li>
          <li>Changing HealthKit permissions in Apple Health or iOS Settings.</li>
          <li>
            Changing Screen Time / Family Controls authorization in iOS
            Settings.
          </li>
          <li>Changing notification permissions in iOS Settings.</li>
          <li>
            Managing or canceling subscriptions in your Apple ID subscription
            settings.
          </li>
        </ul>

        <h2 className="mm-heading" id="children">
          Children
        </h2>
        <p className="mm-text">
          <span translate="no">MorningMode</span> is not directed to children
          under 13. We do not knowingly collect personal information from
          children under 13. If you believe a child has provided personal
          information to us, contact us so we can review and respond
          appropriately.
        </p>

        <h2 className="mm-heading" id="security">
          Security
        </h2>
        <p className="mm-text">
          <span translate="no">MorningMode</span> is designed to reduce privacy
          risk by keeping routine, health-related, and app shielding data on
          your device rather than sending it to our servers. No method of
          storage or transmission is completely secure, but{" "}
          <span translate="no">MorningMode</span> minimizes off-device data
          handling wherever possible.
        </p>

        <h2 className="mm-heading" id="changes-to-this-policy">
          Changes to This Policy
        </h2>
        <p className="mm-text">
          We may update this Privacy Policy from time to time. If we make
          changes, we will update the effective date above and post the new
          policy at:
        </p>
        <p className="mm-text">
          <a href="https://morningmode.app/privacy" rel="noopener noreferrer">
            https://morningmode.app/privacy
          </a>
        </p>

        <h2 className="mm-heading" id="contact">
          Contact
        </h2>
        <p className="mm-text">
          If you have questions about this Privacy Policy or{" "}
          <span translate="no">MorningMode</span>’s privacy practices, contact
          us at:
        </p>
        <p className="mm-text">
          <a href="mailto:northframeapps@gmail.com">northframeapps@gmail.com</a>
        </p>
        <p className="mm-text">Operator: Max Dannheim</p>
      </article>
    </LegalPageShell>
  );
}
