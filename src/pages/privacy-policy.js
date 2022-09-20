/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Link } from "gatsby"
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H1, H5, Body, Bold, Green } from '@hummingbot/hbui/elements/typography'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function PrivacyPolicy() {
  return (
    <Layout>
      <Seo pageTitle="Privacy Policy" />
      <Section>
        <Navigation />
        <Container>
          <div tw='py-36 mb-36 border-b border-green'>
            <H1><Green>Privacy Policy</Green> of hummingbot.org</H1>
            <Body>This Website collects some Personal Data from its Users.</Body>
          </div>
          <br />
          <P isBold isItalic>Latest update: August 31, 2022</P>
          <br />
          <P isGreen><Bold>Owner and Data Controller</Bold></P>
          <br />
          <P>Hummingbot Foundation</P>
          <P>KY1-1002 Grand Cayman</P>
          <P>Cayman Islands</P>
          <br />
          <P>Owner contact email: <a href='mailto:contact@hummingbot.org' target='_blank' rel="noreferrer">contact@hummingbot.org</a></P>
          <br />
          <P isGreen><Bold>Types of Data collected</Bold></P>
          <br />
          <P>Among the types of Personal Data that this Website collects, by itself or through third parties, there are: Cookies; Usage Data; email address; various types of Data.</P>
          <br />
          <P>Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.</P>
          <br />
          <P>Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Website. Unless specified otherwise, all Data requested by this Website is mandatory and failure to provide this Data may make it impossible for this Website to provide its services. In cases where this Website specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.</P>
          <br />
          <P>Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner. Any use of Cookies – or of other tracking tools – by this Website or by the owners of third-party services used by this Website serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.</P>
          <br />
          <P>Users are responsible for any third-party Personal Data obtained, published or shared through this Website and confirm that they have the third party's consent to provide the Data to the Owner.</P>
          <br />
          <br />
          <Body isBold isGreen>Mode and place of processing the Data</Body>
          <P isGreen isBold>Methods of processing</P>
          <br />
          <P>The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.</P>
          <br />
          <P>The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Website (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.</P>
          <br />
          <P isGreen isBold>Legal basis of processing</P>
          <br />
          <P>The Owner may process Personal Data relating to Users if one of the following applies:</P>
          <br />
          <P tw='pl-4 border-l border-green mb-xxs'>Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;</P>
          <P tw='pl-4 border-l border-green mb-xxs'>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;</P>
          <P tw='pl-4 border-l border-green mb-xxs'>processing is necessary for compliance with a legal obligation to which the Owner is subject;</P>
          <P tw='pl-4 border-l border-green mb-xxs'>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;</P>
          <P tw='pl-4 border-l border-green mb-xxs'>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</P>
          <br />
          <P>In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.</P>
          <br />
          <P isGreen isBold>Place</P>
          <br />
          <P>The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.</P>
          <br />
          <P>Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.</P>
          <br />
          <P>Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.</P>
          <br />
          <P>If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.</P>
          <br />
          <P isGreen isBold>Retention time</P>
          <br />
          <P>Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.</P>
          <br />
          <P>Therefore:</P>
          <br />
          <P tw='pl-4 border-l border-green mb-xxs'>Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.</P>
          <P tw='pl-4 border-l border-green mb-xxs'>Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.</P>
          <br />
          <P>The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.</P>
          <br />
          <P>Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.</P>
          <br />
          <br />
          <Body isBold isGreen>The purposes of processing</Body>
          <P>The Data concerning the User is collected to allow the Owner to provide its Services, as well as for the following purposes: Analytics, Contacting the User, User database management, Data transfer outside the EU and Managing contacts and sending messages.</P>
          <br />
          <P>Users can find further detailed information about such purposes of processing and about the specific Personal Data used for each purpose in the respective sections of this document.</P>
          <br />
          <br />
          <Body isBold isGreen>Detailed information on the processing of Personal Data</Body>
          <P>Personal Data is collected for the following purposes and using the following services:</P>
          <br />
          <P isGreen isBold>Analytics</P>
          <br />
          <P>The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.</P>
          <br />
          <br />
          <Body isBold isGreen>Google Analytics (Google LLC)</Body>
          <P>Google Analytics is a web analysis service provided by Google LLC (“Google”). Google utilizes the Data collected to track and examine the use of this Website, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network.</P>
          <br />
          <P>Personal Data collected: Cookies; Usage Data.</P>
          <br />
          <P>Place of processing: United States – <Link to='/privacy-policy'><Green>Privacy Policy</Green></Link> – <a href='https://tools.google.com/dlpage/gaoptout?hl=en' target='_blank' rel="noreferrer">Opt Out</a>. Privacy Shield participant.</P>
          <br />
          <br />
          <Body isBold isGreen>PostHog (PostHog Inc.)</Body>
          <P>PostHog is an open source analytics service provided by PostHog Inc. Personal Data collected: Cookies; Usage Data.</P>
          <br />
          <P>Place of processing: United States – <Link to='/privacy-policy'><Green>Privacy Policy</Green></Link>.</P>
          <br />
          <br />
          <H5 isGreen isBold>Contacting the User</H5>
          <br />
          <Body isBold isGreen>Mailing list or newsletter (this Website)</Body>
          <P>By registering on the mailing list or for the newsletter, the User’s email address will be added to the contact list of those who may receive email messages containing information of commercial or promotional nature concerning this Website. Your email address might also be added to this list as a result of signing up to this Website or after making a purchase.</P>
          <br />
          <P>Personal Data collected: email address.</P>
          <br />
          <br />
          <Body isBold isGreen>Contact form (this Website)</Body>
          <P>By filling in the contact form with their Data, the User authorizes this Website to use these details to reply to requests for information, quotes or any other kind of request as indicated by the form’s header.</P>
          <br />
          <P>Personal Data collected: email address.</P>
          <br />
          <P isGreen isBold>Data transfer outside the EU</P>
          <br />
          <P>The Owner is allowed to transfer Personal Data collected within the EU to third countries (i.e. any country not part of the EU) only pursuant to a specific legal basis. Any such Data transfer is based on one of the legal bases described below. Users can inquire with the Owner to learn which legal basis applies to which specific service.</P>
          <br />
          <br />
          <Body isBold isGreen>Data transfer abroad based on consent (this Website)</Body>
          <P>If this is the legal basis, Personal Data of Users shall be transferred from the EU to third countries only if the User has explicitly consented to such transfer, after having been informed of the possible risks due to the absence of an adequacy decision and appropriate safeguards. In such cases, the Owner shall inform Users appropriately and collect their explicit consent via this Website.</P>
          <br />
          <P>Personal Data collected: various types of Data.</P>
          <br />
          <br />
          <Body isBold isGreen>Data transfer abroad based on standard contractual clauses (this Website)</Body>
          <P>If this is the legal basis, the transfer of Personal Data from the EU to third countries is carried out by the Owner according to “standard contractual clauses” provided by the European Commission. This means that Data recipients have committed to process Personal Data in compliance with the data protection standards set forth by EU data protection legislation. For further information, Users are requested to contact the Owner through the contact details provided in the present document.</P>
          <br />
          <P>Personal Data collected: various types of Data.</P>
          <br />
          <br />
          <Body isBold isGreen>Data transfer to countries that guarantee European standards (this Website)</Body>
          <P>If this is the legal basis, the transfer of Personal Data from the EU to third countries is carried out according to an adequacy decision of the European Commission.</P>
          <br />
          <P>The European Commission adopts adequacy decisions for specific countries whenever it considers that country to possess and provide Personal Data protection standards comparable to those set forth by EU data protection legislation. Users can find an updated list of all adequacy decisions issued on the European Commission's website.</P>
          <br />
          <P>Personal Data collected: various types of Data.</P>
          <br />
          <br />
          <Body isBold isGreen>Other legal basis for Data transfer abroad (this Website)</Body>
          <P>If no other legal basis applies, Personal Data shall be transferred from the EU to third countries only if at least one of the following conditions is met:</P>
          <br />
          <P tw='pl-4 border-l border-green mb-xxs'>the transfer is necessary for the performance of a contract between the User and the Owner or of pre-contractual measures taken at the User’s request;</P>
          <P tw='pl-4 border-l border-green mb-xxs'>the transfer is necessary for the conclusion or performance of a contract concluded in the interest of the User between the Owner and another natural or legal person;</P>
          <P tw='pl-4 border-l border-green mb-xxs'>the transfer is necessary for important reasons of public interest;</P>
          <P tw='pl-4 border-l border-green mb-xxs'>the transfer is necessary for establishment, exercise or defence of legal claims;</P>
          <P tw='pl-4 border-l border-green mb-xxs'>the transfer is necessary in order to protect the vital interests of the data subject or of other persons, where the data subject is physically or legally incapable of giving consent. In such cases, the Owner shall inform the User about the legal bases the transfer is based on via this Website. Personal Data collected: various types of Data.</P>
          <br />
          <P isGreen isBold>Managing contacts and sending messages</P>
          <br />
          <P>This type of service makes it possible to manage a database of email contacts, phone contacts or any other contact information to communicate with the User.</P>
          <br />
          <P>These services may also collect data concerning the date and time when the message was viewed by the User, as well as when the User interacted with it, such as by clicking on links included in the message.</P>
          <br />
          <br />
          <Body isBold isGreen>Mailchimp (The Rocket Science Group, LLC.)</Body>
          <P>Mailchimp is an email address management and message sending service provided by The Rocket Science Group, LLC.</P>
          <br />
          <P>Personal Data collected: email address.</P>
          <br />
          <P>Place of processing: United States – <Link to='/privacy-policy'><Green>Privacy Policy</Green></Link>. Privacy Shield participant.</P>
          <br />
          <br />
          <H5 isBold isGreen>Further information about Personal Data</H5>
          <P isGreen isBold>Personal Data collected through sources other than the User</P>
          <br />
          <P>The Owner of this Website may have legitimately collected Personal Data relating to Users without their knowledge by reusing or sourcing them from third parties on the grounds mentioned in the section specifying the legal basis of processing.</P>
          <br />
          <P>Where the Owner has collected Personal Data in such a manner, Users may find specific information regarding the source within the relevant sections of this document or by contacting the Owner.</P>
          <br />
          <P isGreen isBold>The rights of Users</P>
          <br />
          <P>Users may exercise certain rights regarding their Data processed by the Owner.</P>
          <br />
          <P>In particular, Users have the right to do the following:</P>
          <br />
          <P tw='pl-4 border-l border-green mb-xxs'>Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.</P>
          <P tw='pl-4 border-l border-green mb-xxs'>Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.</P>
          <P tw='pl-4 border-l border-green mb-xxs'>Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.</P>
          <P tw='pl-4 border-l border-green mb-xxs'>Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.</P>
          <P tw='pl-4 border-l border-green mb-xxs'>Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.</P>
          <P tw='pl-4 border-l border-green mb-xxs'>Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.</P>
          <P tw='pl-4 border-l border-green mb-xxs'>Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof.</P>
          <P tw='pl-4 border-l border-green mb-xxs'>Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.</P>
          <br />
          <P isGreen isBold>Details about the right to object to processing</P>
          <br />
          <P>Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.</P>
          <br />
          <P>Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.</P>
          <br />
          <P isGreen isBold>How to exercise these rights</P>
          <br />
          <P>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.</P>
          <br />
          <Link to='/cookie-policy'><P isGreen isBold>Cookie Policy</P></Link>
          <br />
          <P>This Website uses Cookies. To learn more and for a detailed cookie notice, the User may consult the Cookie Policy.</P>
          <br />
          <br />
          <br />
          <H5 isBold isGreen>Additional information about Data collection and processing</H5>
          <P isGreen isBold>Legal action</P>
          <br />
          <P>The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Website or the related Services. The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.</P>
          <br />
          <P isGreen isBold>Additional information about User's Personal Data</P>
          <br />
          <P>In addition to the information contained in this privacy policy, this Website may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.</P>
          <br />
          <P isGreen isBold>System logs and maintenance</P>
          <br />
          <P>For operation and maintenance purposes, this Website and any third-party services may collect files that record interaction with this Website (System logs) use other Personal Data (such as the IP Address) for this purpose.</P>
          <br />
          <P isGreen isBold>Information not contained in this policy</P>
          <br />
          <P>More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.</P>
          <br />
          <P isGreen isBold>How “Do Not Track” requests are handled</P>
          <br />
          <P>This Website does not support “Do Not Track” requests. To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.</P>
          <br />
          <P isGreen isBold>Changes to this privacy policy</P>
          <br />
          <P>The Owner reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page and possibly within this Website and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.</P>
          <br />
          <P>Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.</P>
          <br />
          <br />
          <br />
          <Body isBold isGreen>Definitions and legal references</Body>
          <P><Bold>Personal Data (or Data)</Bold>: Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.</P>
          <br />
          <P><Bold>Usage Data</Bold>: Information collected automatically through this Website (or third-party services employed in this Website), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Website, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.</P>
          <br />
          <P><Bold>User</Bold>: The individual using this Website who, unless otherwise specified, coincides with the Data Subject.</P>
          <br />
          <P><Bold>Data Subject</Bold>: The natural person to whom the Personal Data refers.</P>
          <br />
          <P><Bold>Data Processor (or Data Supervisor)</Bold>: The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.</P>
          <br />
          <P><Bold>Data Controller (or Owner)</Bold>: The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Website. The Data Controller, unless otherwise specified, is the Owner of this Website.</P>
          <br />
          <P><Bold>This Website (or this Application)</Bold>: The means by which the Personal Data of the User is collected and processed.</P>
          <br />
          <P><Bold>Service</Bold>: The service provided by this Website as described in the relative terms (if available) and on this site/application.</P>
          <br />
          <P><Bold>European Union (or EU)</Bold>: Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.</P>
          <br />
          <P><Bold>Cookies</Bold>: Small sets of data stored in the User's device.</P>
          <br />
          <P isGreen isBold>Legal information</P>
          <br />
          <P>This privacy statement has been prepared based on provisions of multiple legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation).</P>
          <br />
          <P>This privacy policy relates solely to this Website, if not stated otherwise within this document.</P>
          <br />
          <br />
          <br />
          <br />
        </Container>
        <Footer />
      </Section>
    </Layout>
  )
}

export default PrivacyPolicy
