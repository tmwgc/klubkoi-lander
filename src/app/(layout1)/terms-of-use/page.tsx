import React from "react";

const Page = () => {
  return (
    <section className="max-w-[1600px] w-full m-auto max-md:max-w-full px-20 max-md:px-5">
      <div className="flex flex-col py-10 pb-20">
        <h1 className="text-4xl font-bold tracking-wide leading-10 text-white mb-8 uppercase">
          <span className="gradient-text">Terms of use</span>
        </h1>
        <div className="flex flex-col gap-5">
          <div>
            <p>
              By accessing and using Koi, users agree to the following Terms of Use. Failure to
              comply with these terms may result in restricted access, account suspension, or
              forfeiture of platform privileges.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium tracking-wide text-white mb-3">1. Eligibility</h4>
            <p>
              Koi is available only to individuals who are 21 years of age or older and legally
              permitted to participate in online wagering under the laws of their jurisdiction.
              Users are solely responsible for ensuring compliance with local gambling regulations.
              Koi reserves the right to restrict access to users from jurisdictions where online
              wagering is prohibited or where the platform does not operate legally. Any attempt to
              bypass these restrictions through VPNs or other means may result in account
              suspension.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium tracking-wide text-white mb-3">
              2. Financial Responsibility
            </h4>
            <p>
              Users acknowledge that all wagers, stakes, and KOI token transactions involve
              financial risk and potential loss. Koi does not guarantee winnings, investment
              returns, or profitability. Players are encouraged to bet responsibly and only wager
              funds they can afford to lose. Koi is not responsible for individual financial
              decisions or any losses incurred as a result of platform participation. Users are also
              responsible for any applicable taxes or financial reporting obligations in their
              jurisdiction.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium tracking-wide text-white mb-3">
              3. KOI Token & Blockchain Use
            </h4>
            <p>
              Koi operates on blockchain technology, and all transactions involving KOI tokens are
              subject to market fluctuations, gas fees, and liquidity risks. The platform does not
              control external exchanges, decentralized finance (DeFi) integrations, or third-party
              wallet providers. Users should conduct independent research before participating in
              KOI token transactions. Once processed, blockchain transactions are irreversible. Klub
              Koi assumes no responsibility for lost, stolen, or mishandled KOI tokens.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium tracking-wide text-white mb-3">
              4. Fair Play & Security
            </h4>
            <p>
              Koi is committed to maintaining a transparent, secure, and fair gaming environment.
              However, users are responsible for safeguarding their accounts, wallets, and private
              keys. Koi will never request private key information, and users should remain vigilant
              against phishing attempts, hacking threats, or unauthorized access. Any form of
              cheating, game manipulation, or abuse of platform mechanics is strictly prohibited and
              may result in account suspension and forfeiture of funds.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium tracking-wide text-white mb-3">
              5. Modifications & Updates
            </h4>
            <p>
              Koi reserves the right to modify platform rules, policies, game mechanics, and staking
              structures at any time. These changes may be necessary to enhance security, maintain
              fairness, or comply with evolving regulatory standards. Users will be notified of
              significant updates, but continued use of the platform constitutes acceptance of the
              revised Terms of Use. It is the responsibility of the user to stay informed about any
              changes to platform policies.
            </p>
          </div>

          <div>
            <p>
              By participating in Koi, users acknowledge and accept these Terms of Use. For further
              details on responsible gaming and platform security, please review our Responsible
              Gambling Policy and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
