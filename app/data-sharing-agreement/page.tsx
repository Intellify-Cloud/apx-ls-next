import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Sharing Agreement | Apex Leadership Specialists',
}

const company = 'Apex Leadership Specialists'
const address = 'Durban North, KwaZulu-Natal, South Africa'
const url = 'www.apexleadership.co.za'
const email = 'craig@apexcoaching.co.za'

export default function DataSharingAgreementPage() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10">
          Data Sharing Agreement
        </h1>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Definitions</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-gray-800">We, us and our</dt>
                <dd>refers to {company}, a private company with limited liability registered under the company laws of the Republic of South Africa. The principal place of business is {address}.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-800">Business Partner</dt>
                <dd>refers to any real estate agency or other business partner that shares a 3rd Party&apos;s personal information in any form with {company}.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-800">3rd Party</dt>
                <dd>refers to any customer of a Business Partner or other data subject whose personal information is shared by the Business Partner with any member of {company}.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-800">3rd Party&apos;s personal information</dt>
                <dd>refers to personal information about the 3rd Party or any of his or her, or their spouse or dependants (as relevant). It includes information about financial status, gender, age, contact numbers and addresses.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-800">Processing of information</dt>
                <dd>means the automated or manual activity of collecting, recording, organising, storing, updating, sharing, distributing and removing or deleting personal information.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Purpose of this Data Sharing Agreement</h2>
            <p>The purpose of this Data Sharing Agreement, as read with our Privacy Statement, is to set out how {company} collects, uses, shares and otherwise processes all 3rd Party personal information, in line with the Protection of Personal Information Act (&quot;POPIA&quot;). This Data Sharing Agreement will be effective from 1 July 2021.</p>
            <p className="mt-3">After contacting any 3rd Party, {company} will only further process personal information of the 3rd Party in terms of a specific mandate with the 3rd Party, should the 3rd Party enter into such a mandate with {company}. Any such mandate will be subject to the {company} Privacy Statement. Should the 3rd Party not conclude a mandate with {company}, then {company} will not retain any personal information of the 3rd Party unless required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">{company} commitment to privacy and POPIA compliance</h2>
            <p>{company} is committed to protecting all data subjects&apos; right to privacy.</p>
            <p className="mt-3">As our valued Business Partner, we want you to have the assurance that when you engage with {company}, you can trust that any 3rd Party&apos;s personal information shared with us will be treated subject to the {company} Privacy Policy (a copy of which can be found on {url}), as well as the requirements of POPIA.</p>
            <p className="mt-3">You should only share 3rd Party personal information with us if you have the 3rd Party&apos;s consent or are otherwise entitled to share such information. You should only share such information as is necessary and you should inform the 3rd Party that you have shared the information with us. Should the 3rd Party withdraw their consent given to you, you should notify us thereof as soon as possible.</p>
            <p className="mt-3">In your privacy notices with your customers, you should inform them that any such sharing of personal information with {company} will be subject to this Data Sharing Agreement and {company} Privacy Policy, and specifically that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The 3rd Party may withdraw his or her consent at any time.</li>
              <li>Should the 3rd Party withdraw such consent or not grant {company} a specific mandate, then {company} will not retain any personal information of the 3rd Party.</li>
            </ul>
            <p className="mt-3">We will take all reasonable steps to keep all 3rd Party personal information safe and confidential. Should you receive any complaints from a 3rd Party in regard to any personal information shared with us, you will notify us as soon as reasonably possible by emailing <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Binding nature of this Data Sharing Agreement</h2>
            <p>Should you share a 3rd Party&apos;s personal information with any member of {company}, then {company} will comply with the terms of this Data Sharing Agreement and {company} Privacy Policy. This undertaking is given in your favour and in favour of the 3rd Party.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Acceptance is voluntary</h2>
            <p>Any 3rd Party has the right to object to the processing of his or her personal information. It is voluntary for the 3rd Party to accept the terms and conditions of the {company} Privacy Policy. A 3rd Party may withdraw their consent at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Purpose for processing a 3rd Party&apos;s personal information</h2>
            <p>We undertake in favour of our Business Partner (and the 3rd Parties) that we will only process the 3rd Party&apos;s personal information for the following purposes:</p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>Applying for services on behalf of the 3rd Party.</li>
              <li>Applying for any other product or service specifically requested by the 3rd Party or by the Business Partner.</li>
              <li>Advising the 3rd Party about related products and services that he or she may qualify for.</li>
            </ol>
            <p className="mt-3">We will ensure that any such third-party provider has agreed to keep the information confidential and that same can only be used for a specific agreed purpose.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Privacy Preferences</h2>
            <p>We will not use 3rd Party personal information for a different purpose than the one stated when you provided the data to us. A 3rd Party may opt out of communications about updated information, new services and marketing messages at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">We keep personal information confidential</h2>
            <p>We will keep the 3rd Party personal information confidential, notwithstanding the source it is collected from.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Sharing of personal information</h2>
            <p>If a third party asks us for any 3rd Party personal information, we will share it with them only if:</p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>The 3rd Party has given consent for the disclosure of this information to that third party.</li>
              <li>Any person or organisation has a legal right to access the information, for example, regulators, and/or any party entitled to such information in terms of a contract with the 3rd Party.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Sharing for research and improvement purposes</h2>
            <p>While {company} may share and combine all 3rd Party personal information for market, statistical and academic research purposes, in such cases the personal information will be de-identified.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Direct Electronic Marketing and opting out</h2>
            <p>{company} will not use information provided by a Business Partner for Direct Electronic Marketing unless it has obtained the 3rd Party&apos;s consent. Additionally, {company} will always permit a 3rd Party to opt out of any communications.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">3rd Parties have the right to know what personal information we have</h2>
            <p>All 3rd Parties have the right to know what personal information we hold about them and have the right to ask us to update, correct or delete their personal information. The following are examples of laws that require us to collect and keep personal information:</p>
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
            <h2 className="text-xl font-bold text-primary mb-3">Transferring personal information outside South Africa</h2>
            <p>We will take reasonable steps to ensure that any country, company or person to which we pass personal information agrees or is obliged by law to treat personal information with the same level of protection as required by the laws of South Africa.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3">Changing this Data Sharing Agreement</h2>
            <p>We may change this Data Sharing Agreement at any time. The most updated version will always be available on <a href={`https://${url}`} className="text-accent hover:underline">{url}</a> and will be effective only from publication on our website.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
