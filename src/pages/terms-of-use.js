/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H1, H5, Body, Bold, Green } from '@hummingbot/hbui/elements/typography'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function TermsOfUse() {
  return (
    <Layout>
      <Seo pageTitle="Terms of Use" />
      <Section>
        <Navigation />
        <Container>
          <div tw='py-36 mb-36 border-b border-green'>
            <H1 isGreen>Terms of Use</H1>
          </div>
          <P><Bold>VERSION 2.0</Bold></P>
          <br />
          <P isGreen isBold isItalic>LAST REVISED ON: July 14, 2022</P>
          <br />
          <P>The websites located at https://hummingbot.org, https://docs.hummingbot.org, https://blog.hummingbot.org/ and any site with the domain hummingbot.org (https://*.hummingbot.org) (collectively, the "Site") are copyrighted works belonging to Hummingbot Fondation ("<Bold>Company</Bold>", "<Bold>us</Bold>", "<Bold>our</Bold>", and "<Bold>we</Bold>"). Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms.</P>
          <br />
          <P>These terms of use (these "<Bold>Terms</Bold>") set forth the legally binding terms and conditions that govern your use of the Site. By accessing or using the Site, you are accepting these Terms (on behalf of yourself or the entity that you represent), and you represent and warrant that you have the right, authority, and capacity to enter into these terms (on behalf of yourself or the entity that you represent). You may not access or use the Site or accept the terms if you are not at least 18 years old. If you do not agree with all of the provisions of these terms, do not access and/or use the Site.</P>
          <br />
          <P>These Terms require the use of arbitration (section 8.2) on an individual basis to resolve disputes, rather than jury trials or class actions, and also limit the remedies available to you in the event of a dispute.</P>
          <br />
          <H5 isGreen isBold>1. Accounts</H5>
          <br />
          <P><Bold>1.1 Account Creation</Bold>. In order to use certain features of the Site, you may be required to register for an account ("<Bold>Account</Bold>") and provide certain information about yourself as prompted by the account registration form. You represent and warrant that: (a) all required registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information. You may delete your Account at any time, for any reason, by following the instructions on the Site. The Company may suspend or terminate your Account in accordance with Section 7.</P>
          <br />
          <P><Bold>1.2 Account Responsibilities</Bold>. You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account. You agree to immediately notify Company of any unauthorized use, or suspected unauthorized use of your Account or any other breach of security. Company cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.</P>
          <br />
          <H5 isGreen isBold>2. Access to the Site</H5>
          <br />
          <P><Bold>2.1 License</Bold>. Subject to these Terms, the Company grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Site solely for your own personal, noncommercial use.</P>
          <br />
          <P><Bold>2.2 Certain Restrictions</Bold>. The rights granted to you in these Terms are subject to the following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site, whether in whole or in part, or any content displayed on the Site; (b) you shall not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website, product, or service; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means. Unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices on the Site (or on any content displayed on the Site) must be retained on all copies thereof.</P>
          <br />
          <P><Bold>2.3 Modification</Bold>. The Company reserves the right, at any time, to modify, suspend, or discontinue the Site (in whole or in part) with or without notice to you. You agree that Company will not be liable to you or to any third party for any modification, suspension, or discontinuation of the Site or any part thereof.</P>
          <br />
          <P><Bold>2.4 No Support or Maintenance</Bold>. You acknowledge and agree that Company will have no obligation to provide you with any support or maintenance in connection with the Site.</P>
          <br />
          <P><Bold>2.5 Ownership</Bold>. You acknowledge that all the intellectual property rights, including copyrights, patents, trade marks, and trade secrets, in the Site and its content are owned by Company or Company’s suppliers. Neither these Terms (nor your access to the Site) transfers to you or any third party any rights, title or interest in or to such intellectual property rights, except for the limited access rights expressly set forth in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms. There are no implied licenses granted under these Terms.</P>
          <br />
          <H5 isGreen isBold>3. Indemnification</H5>
          <br />
          <P>You agree to indemnify and hold Company (and its officers, employees, and agents) harmless, including costs and attorneys’ fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Site, (b) your violation of these Terms or (c) your violation of applicable laws or regulations. Company reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior written consent of Company. Company will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.</P>
          <br />
          <H5 isGreen isBold>4. Third-Party Links & Ads; Other Users</H5>
          <br />
          <P><Bold>4.1 Third-Party Links & Ads</Bold>. The Site may contain links to third-party websites and services, and/or display advertisements for third parties (collectively, "Third-Party Links & Ads"). Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads. Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads. You use all Third-Party Links & Ads at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices. You should make whatever investigation you feel necessary or appropriate before proceeding with any transaction in connection with such Third-Party Links & Ads.</P>
          <br />
          <P><Bold>4.2 Other Users</Bold>. Your interactions with other Site users are solely between you and such users. You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions. If there is a dispute between you and any Site user, we are under no obligation to become involved.</P>
          <br />
          <P><Bold>4.3 Release</Bold>. You hereby release and forever discharge the Company (and our officers, employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site (including any interactions with, or act or omission of, other Site users or any Third-Party Links & Ads). IF YOU ARE A CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES: "A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party."</P>
          <br />
          <H5 isGreen isBold>5. Disclaimers</H5>
          <br />
          <P>THE SITE IS PROVIDED ON AN "AS-IS" AND "AS AVAILABLE" BASIS, AND COMPANY (AND OUR SUPPLIERS) EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT. WE (AND OUR SUPPLIERS) MAKE NO WARRANTY THAT THE SITE WILL MEET YOUR REQUIREMENTS, WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR WILL BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE. IF APPLICABLE LAW REQUIRES ANY WARRANTIES WITH RESPECT TO THE SITE, ALL SUCH WARRANTIES ARE LIMITED IN DURATION TO NINETY (90) DAYS FROM THE DATE OF FIRST USE.</P>
          <br />
          <P>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.</P>
          <br />
          <H5 isGreen isBold>6. Limitation on Liability</H5>
          <br />
          <P>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COMPANY (OR OUR SUPPLIERS) BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFITS, LOST DATA, COSTS OF PROCUREMENT OF SUBSTITUTE PRODUCTS, OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO THESE TERMS OR YOUR USE OF, OR INABILITY TO USE, THE SITE, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE SITE IS AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE OR COMPUTER SYSTEM, OR LOSS OF DATA RESULTING THEREFROM.</P>
          <br />
          <P>TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY DAMAGES ARISING FROM OR RELATED TO THIS AGREEMENT (FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION), WILL AT ALL TIMES BE LIMITED TO A MAXIMUM OF FIFTY US DOLLARS (U.S. $50). THE EXISTENCE OF MORE THAN ONE CLAIM WILL NOT ENLARGE THIS LIMIT. YOU AGREE THAT OUR SUPPLIERS WILL HAVE NO LIABILITY OF ANY KIND ARISING FROM OR RELATING TO THIS AGREEMENT.</P>
          <br />
          <P>SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</P>
          <br />
          <H5 isGreen isBold>7. Term and Termination</H5>
          <br />
          <P>Subject to this Section, these Terms will remain in full force and effect while you use the Site. We may suspend or terminate your rights to use the Site (including your Account) at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms. Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately. Company will not have any liability whatsoever to you for any termination of your rights under these Terms, including for termination of your Account. Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 2.2 through 2.5 and Sections 3 through 8.</P>
          <br />
          <H5 isGreen isBold>8. General</H5>
          <br />
          <P><Bold>8.1 Changes</Bold>. These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us (if any), and/or by prominently posting notice of the changes on our Site. You are responsible for providing us with your most current e-mail address. In the event that the last e-mail address that you have provided us is not valid, or for any reason is not capable of delivering to you the notice described above, our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice. Any changes to these Terms will be effective upon the earlier of thirty (30) calendar days following our dispatch of an e-mail notice to you (if applicable) or thirty (30) calendar days following our posting of notice of the changes on our Site. These changes will be effective immediately for new users of our Site. Continued use of our Site following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.</P>
          <br />
          <P isGreen isBold>8.2 Prohibition of Use.</P>
          <br />
          <P>You may not use this Site or associated services if you are an individual who is sanctioned by the Office of Foreign Assets Control (OFAC), or otherwise located in any country, region, or jurisdiction sanctioned by OFAC or another U.S. agency. OFAC's programs are dynamic, but as of the "Last Revised" date (specified above), a representative sample of jurisdictions includes:</P>
          <br />
          <P>- Balkans</P>
          <P>- Belarus</P>
          <P>- Burma</P>
          <P>- Burundi</P>
          <P>- Central African Republic</P>
          <P>- Congo, Democratic Republic of</P>
          <P>- Crimea region of Ukraine</P>
          <P>- Cuba</P>
          <P>- Iran (Islamic Republic of)</P>
          <P>- Lebanon</P>
          <P>- Libya</P>
          <P>- Mali</P>
          <P>- Nicaragua</P>
          <P>- North Korea (Democratic Republic of Korea)</P>
          <P>- Somalia</P>
          <P>- South Sudan</P>
          <P>- Sudan</P>
          <P>- Syria</P>
          <P>- Ukraine / Russia-related</P>
          <P>- Venezuela</P>
          <P>- Yemen</P>
          <P>- Zimbabwe</P>
          <br />
          <P isGreen isBold>8.3 Dispute Resolution.</P>
          <br />
          <P isBold isItalic>Please read this Arbitration Agreement carefully. It is part of your contract with Company and affects your rights. It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.</P>
          <br />
          <P>(a) Applicability of Arbitration Agreement. All claims and disputes (excluding claims for injunctive or other equitable relief as set forth below) in connection with the Terms or the use of any product or service provided by the Company that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement. Unless otherwise agreed to, all arbitration proceedings shall be held in English. This Arbitration Agreement applies to you and the Company, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms.</P>
          <br />
          <P>(b) Notice Requirement and Informal Dispute Resolution. Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute ("Notice") describing the nature and basis of the claim or dispute, and the requested relief. A Notice to the Company should be sent to: 688 West Dana Street, Mountain View, California 94041. After the Notice is received, you and the Company may attempt to resolve the claim or dispute informally. If you and the Company do not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding. The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award, if any, to which either party is entitled.</P>
          <br />
          <P>(c) Arbitration Rules. Arbitration shall be initiated through the American Arbitration Association ("<Bold>AAA</Bold>"), an established alternative dispute resolution provider ("ADR Provider") that offers arbitration as set forth in this section. If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider. The rules of the ADR Provider shall govern all aspects of the arbitration, including but not limited to the method of initiating and/or demanding arbitration, except to the extent such rules are in conflict with the Terms. The AAA Consumer Arbitration Rules ("<Bold>Arbitration Rules</Bold>") governing the arbitration are available online at <a href='mailto:www.adr.org' target='_blank' rel="noreferrer">www.adr.org</a> or by calling the AAA at 1-800-778-7879. The arbitration shall be conducted by a single, neutral arbitrator. Any claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (US $10,000.00) may be resolved through binding non-appearance-based arbitration, at the option of the party seeking relief. For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (US $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules. Any hearing will be held in a location within 100 miles of your residence, unless you reside outside of the United States, and unless the parties agree otherwise. If you reside outside of the U.S., the arbitrator shall give the parties reasonable notice of the date, time and place of any oral hearings. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. If the arbitrator grants you an award that is greater than the last settlement offer that the Company made to you prior to the initiation of arbitration, the Company will pay you the greater of the award or $2,500.00. Each party shall bear its own costs (including attorney’s fees) and disbursements arising out of the arbitration and shall pay an equal share of the fees and costs of the ADR Provider.</P>
          <br />
          <P>(d) Additional Rules for Non-Appearance Based Arbitration. If non-appearance based arbitration is elected, the arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the arbitration. The arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise agreed by the parties.</P>
          <br />
          <P>(e) Time Limits. If you or the Company pursue arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations (i.e., the legal deadline for filing a claim) and within any deadline imposed under the AAA Rules for the pertinent claim.</P>
          <br />
          <P>(f) Authority of Arbitrator. If arbitration is initiated, the arbitrator will decide the rights and liabilities, if any, of you and the Company, and the dispute will not be consolidated with any other matters or joined with any other cases or parties. The arbitrator shall have the authority to grant motions dispositive of all or part of any claim. The arbitrator shall have the authority to award monetary damages, and to grant any non-monetary remedy or relief available to an individual under applicable law, the AAA Rules, and the Terms. The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded. The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have. The award of the arbitrator is final and binding upon you and the Company.</P>
          <br />
          <P>(g) Waiver of Jury Trial. THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement. Arbitration procedures are typically more limited, more efficient and less costly than rules applicable in a court and are subject to very limited review by a court. In the event any litigation should arise between you and the Company in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND THE COMPANY WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge.</P>
          <br />
          <P>(h) Waiver of Class or Consolidated Actions. ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER.</P>
          <br />
          <P>(i) Confidentiality. All aspects of the arbitration proceeding, including but not limited to the award of the arbitrator and compliance therewith, shall be strictly confidential. The parties agree to maintain confidentiality unless otherwise required by law. This paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief.</P>
          <br />
          <P>(j) Severability. If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect.</P>
          <br />
          <P>(k) Right to Waive. Any or all of the rights and limitations set forth in this Arbitration Agreement may be waived by the party against whom the claim is asserted. Such waiver shall not waive or affect any other portion of this Arbitration Agreement.</P>
          <br />
          <P>(l) Survival of Agreement. This Arbitration Agreement will survive the termination of your relationship with Company.</P>
          <br />
          <P>(m) Small Claims Court. Notwithstanding the foregoing, either you or the Company may bring an individual action in small claims court.</P>
          <br />
          <P>(n) Emergency Equitable Relief. Notwithstanding the foregoing, either party may seek emergency equitable relief before a state or federal court in order to maintain the status quo pending arbitration. A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement.</P>
          <br />
          <P>(o) Claims Not Subject to Arbitration. Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party’s patent, copyright, trademark or trade secrets shall not be subject to this Arbitration Agreement.</P>
          <br />
          <P>(p) Courts. In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within Santa Clara County, California, for such purpose</P>
          <br />
          <P><Bold>8.4 Export</Bold>. The Site may be subject to U.S. export control laws and may be subject to export or import regulations in other countries. You agree not to export, reexport, or transfer, directly or indirectly, any U.S. technical data acquired from Company, or any products utilizing such data, in violation of the United States export laws or regulations.</P>
          <br />
          <P><Bold>8.5 Disclosures</Bold>. Company is located at the address in Section 8.8. If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs by contacting them in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210.</P>
          <br />
          <P><Bold>8.6 Electronic Communications</Bold>. The communications between you and Company use electronic means, whether you use the Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal requirement that such communications would satisfy if it were be in a hardcopy writing. The foregoing does not affect your non-waivable rights.</P>
          <br />
          <P><Bold>8.7 Entire Terms</Bold>. These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation". If any provision of these Terms is, for any reason, held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law. Your relationship to Company is that of an independent contractor, and neither party is an agent or partner of the other. These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company’s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void. Company may freely assign these Terms. The terms and conditions set forth in these Terms shall be binding upon assignees.</P>
          <br />
          <P><Bold>8.8 Copyright/Trademark Information</Bold>. Copyright © 2022 Hummingbot Foundation All rights reserved. All trademarks, logos and service marks ("Marks") displayed on the Site are our property or the property of other third parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.</P>
          <br />
          <P isGreen isBold>8.9 Contact Information:</P>
          <br />
          <P isGreen isBold>Hummingbot Foundation</P>
          <P>
            Address:<br />
            KY1-1002 Grand Caymant<br />
            Cayman Islands<br />
            Email: <a href='mailto:contact@hummingbot.org' target='_blank' rel="noreferrer">contact@hummingbot.org</a>
          </P>
          <br /><br />
          <H5 isGreen isBold>9. Updating this Policy</H5>
          <br />
          <P>Hummingbot Foundation reserves the right, at its sole discretion, to update, modify, and/or make any changes to the terms of this policy, including in order to improve Services or comply with any applicable law, regulations, or orders.</P>
          <br />
          <P>Upon updating this policy, Hummingbot Foundation will give notice to its Users on this page and possibly within the Software and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to Hummingbot Foundation. Should the changes affect processing activities performed on the basis of user consent, Hummingbot Foundation shall collect new consent from the user, where required.</P>
          <br />
          <P tw='mb-36'>It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.</P>
        </Container>
        <Footer />
      </Section>
    </Layout>
  )
}

export default TermsOfUse
