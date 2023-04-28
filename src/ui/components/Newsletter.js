/* eslint no-unused-vars: [ "off", { "argsIgnorePattern": "tw" } ] */
import React, { useState } from 'react'
import { Link } from 'gatsby'
import tw, { styled, css } from 'twin.macro'
import { Section, Container } from '@hummingbot/hbui/elements/layout'
import { H6, H5, H2, P } from '@hummingbot/hbui/elements/typography'
import { ExternalLinkButton } from '@hummingbot/hbui/components/buttons'
import { Button } from '@hummingbot/hbui/elements/buttons'

function Newsletter() {
  
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting email:', email);
    fetch('https://hummingbot.us9.list-manage.com/subscribe/post?u=548b8c3eb87a1b029fd4f9f2b&amp;id=b726be68bd&amp;f_id=003621e1f0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'EMAIL': email
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to subscribe')
        }
        console.log('Response:', response);
        return response.text()
      })
      .then(data => {
        // Handle successful form submission
        console.log('Data:', data);
      })
      .catch(error => {
        // Handle error
        console.error(error)
      })
  };


  return (
    <Section tw='z-10 py-20 md:py-32 lg:py-40 xl:py-44' style={{background: 'url(assets/grid_perspective.png) no-repeat', backgroundSize: 'cover', position: 'relative', zIndex: '0'}}>
      <Container tw='text-center'>
          <H2 isBold tw='mb-xs'>
            Get trading tips & updates on Hummingbot
          </H2>
          <H6 tw='text-terminal pb-md'>
            Learn how the developers are using Hummingbot and get updated on our community
          </H6>
    
          <div tw='flex justify-center'>

            <form
              action="https://hummingbot.us9.list-manage.com/subscribe/post?u=548b8c3eb87a1b029fd4f9f2b&amp;id=b726be68bd&amp;f_id=003621e1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
              onSubmit={handleSubmit}
            >
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">Email Address{' '}
                    <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                </div>
        
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                  <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_548b8c3eb87a1b029fd4f9f2b_b726be68bd" tabIndex="-1" value="" />
                </div>
                <div className="clear">
                  <Button isLarge variant="terminal" type="submit" name="subscribe" id="mc-embedded-subscribe">Subscribe</Button>
                </div>
              </div>
            </form>
          </div>
      </Container>
    </Section>
        
      /* 
        <ColumnA>
          <div tw='flex justify-between mb-md'>
            <H5 tw='font-bold text-white leading-none'>Hello the dark arts of market making with Hummingbot BotCamp</H5>
          </div>
          <Link to="/botcamp">
            <Button isLarge variant='terminal' tw='w-full'>Learn with BotCamp</Button>
          </Link>
        </ColumnA>
        <ColumnB>
          <div tw='flex justify-between mb-md'>
            <CustomH6>Join a global community of quant traders</CustomH6>
          </div>
          <P tw='text-white mb-md'>Join the 20,000+ quant traders and market makers in the global Hummingbot community</P>
          <a href="https://discord.gg/hummingbot" target='_blank' rel="noreferrer">
            <ExternalLinkButton tw='justify-between mb-xxs min-w-[280px]' isLarge label='Join Discord server' />
          </a>
          <a href="https://hummingbot.substack.com" target='_blank' rel="noreferrer">
            <ExternalLinkButton tw='justify-between min-w-[280px]' isLarge label='Get monthly newsletter' />
          </a>
        </Column  
        
        <!-- Begin Mailchimp Signup Form -->
        <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
        <style type="text/css">
          #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px; 
        </style>
        
        <div id="mc_embed_signup">
          <form 
              action="https://hummingbot.us9.list-manage.com/subscribe/post?u=548b8c3eb87a1b029fd4f9f2b&amp;id=b726be68bd&amp;f_id=003621e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe</h2>
              <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>

              <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
              </div>

              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_548b8c3eb87a1b029fd4f9f2b_b726be68bd" tabindex="-1" value="">
              </div>
              <div class="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
              </div>
            </form>
        </div>

        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='text';fnames[8]='MMERGE8';ftypes[8]='text';fnames[9]='MMERGE9';ftypes[9]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
        <!--End mc_embed_signup-->
      
      */
        
        
  )
}

export default Newsletter



