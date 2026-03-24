import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Statement | Apex Leadership Specialists',
}

const company = 'Apex Leadership Specialists'
const address = 'Durban North, KwaZulu-Natal, South Africa'
const url = 'www.apexleadership.co.za'
const email = 'craig@apexcoaching.co.za'

export default function PrivacyStatementPage() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Our Privacy Statement
        </h1>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Definitions</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-800">We, us and our</dt>
                <dd>refers to {company}, a private company with limited liability registered under the company laws of the Republic of South Africa, and where the principal place of business is {address}.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-800">You and your</dt>
                <dd>refers to any customer of {company} or other data subject whose personal information is held by any member of {company}.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-800">Your personal information</dt>
                <dd>refers to personal information about you, your spouse or dependants (as relevant) as described in POPIA. It includes information about financial status, gender, age, contact numbers and addresses.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-800">Processing of information</dt>
                <dd>means the automated or manual activity of collecting, recording, organising, storing, updating, sharing, distributing and removing or deleting personal information.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Purpose of this Privacy Statement</h2>
            <p>When you engage with us, you trust us with personal information about yourself and your spouse and your dependants. We are committed to protecting your right to privacy. We&apos;ll take all reasonable steps to keep your personal information safe and confidential. The purpose of this Privacy Statement is to set out how we collect, use, share and otherwise process your personal information, in line with the Protection of Personal Information Act (&quot;POPIA&quot;). This Privacy Statement will be effective from the date POPIA is in force in South Africa.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Acceptance of this Privacy Statement</h2>
            <p>By using the services of {company} and/or by providing your personal information to us, you confirm you give us consent that we may process your personal information subject to the provisions of this Privacy Statement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Acceptance is voluntary</h2>
            <p>You have the right to object to the processing of your personal information. It is voluntary to accept these terms and conditions. However, we may require your acceptance to provide you with our products and services. The acceptance of these terms and conditions will continue while you are a customer of {company}, and for such period thereafter as we are required by contract or legislation to retain your records.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Purpose for processing your personal information</h2>
            <p>You agree that we may process your personal information for the following purposes:</p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>Providing coaching, leadership development and related services on your behalf.</li>
              <li>Administering your engagement with {company} and assessing any requests submitted.</li>
              <li>Allowing third-party providers to advise you about or offer related products and services that you may qualify for.</li>
              <li>Providing relevant information, including your personal information, to a contracted third party who needs the information to provide a service to you. We will ensure that the third party has agreed to keep the information confidential as required by POPIA.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Privacy Preferences</h2>
            <p>We will not use your personal information for a different purpose than the one stated when you provided your data or otherwise agreed would be permissible. You may opt out of communications about updated information, new services and marketing messages at any time by unsubscribing from the communication concerned.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">We keep personal information confidential</h2>
            <p>We will keep your personal information confidential as required by POPIA. You may have given us this information yourself or we may have collected it from other sources.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Authority to act for other people</h2>
            <p>You warrant that when you give us personal information about your spouse, your dependants and your family, which may include a person under 18 (a minor), you have received their permission or the necessary permission from the guardian of the minor person to share their personal information with us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Sharing of your personal information</h2>
            <p>If a third party asks us for any of your personal information, we will share it with them only if:</p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>You have already given your consent for the disclosure of this information to that third party.</li>
              <li>Third parties that we contract with to provide services to you, for example FICA verification agencies.</li>
              <li>Any person or organisation that has a legal right to access the information, for example, regulators.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Sharing for research and improvement purposes</h2>
            <p>You also confirm that we may share and combine all your personal information for the following purposes:</p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>Market, statistical and academic research, in which case your personal information will be de-identified.</li>
              <li>To customise our services to meet your needs.</li>
            </ol>
            <p className="mt-3">If we want to share your personal information for any other reason, we will do so only with your permission and/or subject to your right to opt out.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Obtaining personal information for data quality purposes</h2>
            <p>We have a duty to take all reasonably practicable steps to ensure your personal information is complete, accurate, not misleading and updated on a regular basis. To enable this we will always try to obtain personal information from you directly.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Direct Electronic Marketing</h2>
            <p>If you have chosen to opt in to any Electronic Marketing, you may opt out of that Electronic Marketing at any time. We will store your personal information for the purpose to action this request and action it as soon as reasonably possible.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">You have the right to know what personal information we have</h2>
            <p>You have the right to know what personal information we hold about you. You can request a copy by contacting us via the <a href="/contact" className="text-accent hover:underline">contact page</a>. We will take all reasonable steps to confirm your identity before providing details of your personal information.</p>
            <p className="mt-3">You have the right to ask us to update, correct or delete your personal information. The following are examples of laws that require us to collect and keep personal information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The Electronic Communications and Transactions Act (ECT)</li>
              <li>The Financial Intelligence Centre Act (FICA)</li>
              <li>The Financial Advisory and Intermediary Services Act (FAIS)</li>
              <li>The National Credit Act (NCA)</li>
              <li>The Consumer Protection Act (CPA)</li>
              <li>Long-term Insurance Act (LTIA)</li>
              <li>Financial Sector Regulation Act (FSRA)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Transferring your personal information outside South Africa</h2>
            <p>You agree that we may transfer your personal information outside South Africa, for example to administer certain services such as cloud services. We will take reasonable steps to ensure that any country, company or person that we pass your personal information to agrees or is obliged by law to treat your information with the same level of protection as required by the laws of South Africa.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Changing this Privacy Statement</h2>
            <p>We may change this Privacy Statement at any time. The most updated version will always be available on <a href={`https://${url}`} className="text-accent hover:underline">{url}</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">If you have any concerns</h2>
            <p>If you believe that we have used your personal information contrary to this Privacy Statement, you must first attempt to resolve any concerns with us by contacting the Information Officer at <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>.</p>
            <p className="mt-3">If you are not satisfied after this process, you have the right to lodge a complaint with the Information Regulator under POPIA. The contact details are:</p>
            <address className="mt-2 not-italic text-gray-600">
              The Information Regulator (South Africa)<br />
              33 Hoof Street, Forum III, 3rd Floor Braampark<br />
              P.O Box 31533, Braamfontein, Johannesburg, 2017<br />
              <a href="mailto:complaints.IR@justice.gov.za" className="text-accent hover:underline">complaints.IR@justice.gov.za</a>
            </address>
          </section>

        </div>
      </div>
    </div>
  )
}
