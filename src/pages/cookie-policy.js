/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React from 'react'
import tw from 'twin.macro'
import Layout from '../ui/components/Layout'
import Navigation from '../ui/components/Navigation'
import { Link } from "gatsby"
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { P, H1, H5, H6, Body, Bold, Green } from '@hummingbot/hbui/elements/typography'
import Footer from '../ui/components/footer'
import Seo from "../system/seo"

function CookiePolicy() {
  return (
    <Layout>
      <Seo pageTitle="Cookie Policy" />
      <Section>
        <Navigation />
        <Container>
          <div tw='py-36 mb-36 border-b border-green'>
            <H1><Green>Cookie Policy</Green> of coinalpha.com</H1>
            <Body>This document informs Users about the technologies that help this Website to achieve the purposes described below. Such technologies allow the Owner to access and store information (for example by using a Cookie) or use resources (for example by running a script) on a User’s device as they interact with this Website.</Body>
          </div>
          <P><Bold>VERSION 2.0</Bold></P>
          <br />
          <P isGreen isBold>Latest update: June 14, 2022</P>
          <br />
          <P>For simplicity, all such technologies are defined as "Trackers" within this document – unless there is a reason to differentiate.</P>
          <br />
          <P>For example, while Cookies can be used on both web and mobile browsers, it would be inaccurate to talk about Cookies in the context of mobile apps as they are a browser-based Tracker. For this reason, within this document, the term Cookies is only used where it is specifically meant to indicate that particular type of Tracker.</P>
          <br />
          <P>Some of the purposes for which Trackers are used may also require the User's consent. Whenever consent is given, it can be freely withdrawn at any time following the instructions provided in this document.</P>
          <br />
          <P>This Website uses Trackers managed directly by the Owner (so-called “first-party” Trackers) and Trackers that enable services provided by a third-party (so-called “third-party” Trackers). Unless otherwise specified within this document, third-party providers may access the Trackers managed by them. The validity and expiration periods of Cookies and other similar Trackers may vary depending on the lifetime set by the Owner or the relevant provider. Some of them expire upon termination of the User’s browsing session.</P>
          <br />
          <P>In addition to what’s specified in the descriptions within each of the categories below, Users may find more precise and updated information regarding lifetime specification as well as any other relevant information – such as the presence of other Trackers - in the linked privacy policies of the respective third-party providers or by contacting the Owner.</P>
          <br />

          <H5 isGreen isBold>Activities strictly necessary for the operation of this Website and delivery of the Service</H5>
          <br />
          <P>This Website uses so-called “technical” Cookies and other similar Trackers to carry out activities that are strictly necessary for the operation or delivery of the Service.</P>
          <br />

          <H5 isGreen isBold>Other activities involving the use of Trackers</H5>
          <br />
          <P>Some of the services listed below collect statistics in an anonymized and aggregated form and may not require the consent of the User or may be managed directly by the Owner - depending on how they are described - without the help of third parties.</P>
          <br />
          <P>If any third party operated services are listed among the tools below, these may be used to track Users’ browsing habits – in addition to the information specified herein and without the Owner’s knowledge. Please refer to the privacy policy of the listed services for detailed information.</P>
          <br />
          <H6 isBold isGreen>Basic interactions & functionalities</H6>
          <br />
          <P isGreen isBold>Interaction with support and feedback platforms</P>
          <br />
          <P>This type of service allows Users to interact with third-party support and feedback platforms directly from the pages of this Website. If one of these services is installed, it may collect browsing and Usage Data in the pages where it is installed, even if the Users do not actively use the service.</P>
          <br />
          <P isGreen isBold>Zendesk Widget (Zendesk, Inc.)</P>
          <br />
          <P>The Zendesk Widget is a service for interacting with the Zendesk support and feedback platform provided by Zendesk Inc.</P>
          <br />
          <P>Personal Data processed: country and Tracker.</P>
          <br />
          <P>Place of processing: United States – <Link to='/privacy-policy'><Green>Privacy Policy</Green></Link>.</P>
          <H6 isBold isGreen>Measurement</H6>
          <br />
          <P>This Website uses Trackers to measure traffic and analyze User behavior with the goal of improving the Service.</P>
          <br />
          <P isGreen isBold>Analytics</P>
          <br />
          <P>The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.</P>
          <br />
          <P isGreen isBold>Google Analytics (Google LLC)</P>
          <br />
          <P>Google Analytics is a web analysis service provided by Google LLC (“Google”). Google utilizes the Data collected to track and examine the use of this Website, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network.</P>
          <br />
          <P>Personal Data collected: Cookies; Usage Data.</P>
          <br />
          <P>Place of processing: United States – <Link to='/privacy-policy'><Green>Privacy Policy</Green></Link> – <a href='https://tools.google.com/dlpage/gaoptout?hl=en' target='_blank' rel="noreferrer">Opt Out</a>.</P>
          <br />

          <H5 isGreen isBold>How to manage preferences and provide or withdraw consent</H5>
          <br />
          <P>There are various ways to manage Tracker related preferences and to provide and withdraw consent, where relevant:</P>
          <br />
          <P>Users can manage preferences related to Trackers from directly within their own device settings, for example, by preventing the use or storage of Trackers.</P>
          <br />
          <P>Additionally, whenever the use of Trackers is based on consent, Users can provide or withdraw such consent by setting their preferences within the cookie notice or by updating such preferences accordingly via the relevant consent-preferences widget, if available.</P>
          <br />
          <P>It is also possible, via relevant browser or device features, to delete previously stored Trackers, including those used to remember the User’s initial consent.</P>
          <br />
          <P>Other Trackers in the browser’s local memory may be cleared by deleting the browsing history.</P>
          <br />
          <P>With regard to any third-party Trackers, Users can manage their preferences and withdraw their consent via the related opt-out link (where provided), by using the means indicated in the third party's privacy policy, or by contacting the third party.</P>
          <br />

          <H5 isGreen isBold>Locating Tracker Settings</H5>
          <br />
          <P>Users can, for example, find information about how to manage Cookies in the most commonly used browsers at the following addresses:</P>
          <br />
          <a aria-label="info link" href='https://support.google.com/chrome/answer/95647?hl=en&p=cpn_cookies'><P tw='pl-4 border-l border-green'><Green>Google Chrome</Green></P></a>
          <a aria-label="info link" href='https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences'><P tw='pl-4 border-l border-green'><Green>Mozilla Firefox</Green></P></a>
          <a aria-label="info link" href='https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/'><P tw='pl-4 border-l border-green'><Green>Apple Safari</Green></P></a>
          <a aria-label="info link" href='http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies'><P tw='pl-4 border-l border-green'><Green>Microsoft Internet Explorer</Green></P></a>
          <a aria-label="info link" href='https://support.microsoft.com/en-us/help/4027947'><P tw='pl-4 border-l border-green'><Green>Microsoft Edge</Green></P></a>
          <a aria-label="info link" href='https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing'><P tw='pl-4 border-l border-green'><Green>Brave</Green></P></a>
          <a aria-label="info link" href='https://help.opera.com/en/latest/web-preferences/#cookies'><P tw='pl-4 border-l border-green'><Green>Opera</Green></P></a>
          <br />
          <P>Users may also manage certain categories of Trackers used on mobile apps by opting out through relevant device settings, such as the device advertising settings for mobile devices, or tracking settings in general (Users may open the device settings, view and look for the relevant setting).</P>
          <br />

          <H5 isGreen isBold>Owner and Data Controller</H5>
          <br />
          <P>CoinAlpha, Inc.</P>
          <P>800 W El Camino Real</P>
          <P>Suite 180</P>
          <P>Mountain View, CA 94040</P>
          <br />
          <P isGreen isBold>Owner contact email: <a href='mailto:contact@coinalpha.com' target='_blank' rel="noreferrer">contact@coinalpha.com</a></P>
          <br />
          <P>Since the installation of third-party Cookies and other tracking systems through the services used within this Website cannot be technically controlled by the Owner, any specific references to Cookies and tracking systems installed by third parties are to be considered indicative. In order to obtain complete information, the User is kindly requested to consult the privacy policy for the respective third-party services listed in this document.</P>
          <br />
          <P>Given the objective complexity surrounding the identification of technologies based on Cookies, Users are encouraged to contact the Owner should they wish to receive any further information on the use of Cookies by this Website.</P>
          <br />

          <H5 isGreen isBold>Definitions and legal references</H5>
          <br />
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
          <P><Bold>Cookie</Bold>: Small sets of data stored in the User's device.</P>
          <br />
          <P><Bold>Tracker</Bold>: Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing information on the User’s device.</P>
          <br />

          <H5 isGreen isBold>Legal information</H5>
          <br />
          <P>This privacy statement has been prepared based on provisions of multiple legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation).</P>
          <br />
          <P>This privacy policy relates solely to this Website, if not stated otherwise within this document.</P>
          <br />
          <Link to='/privacy-policy'><P isGreen>Privacy Policy</P></Link>
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

export default CookiePolicy
