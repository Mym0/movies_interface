import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Terms.module.css'
function Terms() {
  return (
    <header className={styles['header']}>
        <Container className='h-100'>
          <div className={styles['terms-wrapper']}>
            <h1>Terms and Conditions</h1>
            <p>Please read these Terms and Conditions carefully before using the Gold movie website (referred to as "the website" or "Gold"). By accessing or using the website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and Conditions, you should not use the website.</p>

            <h2>1. Content and Intellectual Property</h2>
            <p>a. The content on Gold, including but not limited to movie reviews, trailers, images, and text, is provided for informational purposes only. We strive to ensure the accuracy and relevance of the content; however, we do not guarantee its completeness or timeliness.</p>
            <p>b. All intellectual property rights, including copyrights and trademarks, related to the content and design of the website, are owned by Gold or its licensors. You may not copy, reproduce, modify, distribute, or display any part of the website without prior written consent from Gold.</p>

            <h2>2. User Conduct</h2>
            <p>a. By using Gold, you agree to abide by all applicable laws and regulations. You are solely responsible for any content you post or transmit through the website.</p>
            <p>b. You agree not to engage in any of the following activities:</p>
            <ul>
              <li>i. Posting or transmitting any content that is unlawful, defamatory, abusive, obscene, or infringes upon the rights of others.</li>
              <li>ii. Impersonating any person or entity or falsely representing your affiliation with any person or entity.</li>
              <li>iii. Disrupting or interfering with the functionality of the website or its associated services.</li>
              <li>iv. Attempting to gain unauthorized access to any portion or feature of the website or its servers.</li>
            </ul>

            <h2>3. Third-Party Links</h2>
            <p>a. Gold may contain links to third-party websites or services that are not owned or controlled by Gold. We are not responsible for the content, privacy policies, or practices of any third-party websites.</p>
            <p>b. You acknowledge and agree that Gold shall not be held liable for any damages or losses arising from your use of any third-party websites or services.</p>

            <h2>4. Disclaimer of Warranties</h2>
            <p>a. Gold provides the website on an "as is" and "as available" basis. We do not make any warranties, express or implied, regarding the website's accuracy, reliability, or suitability for a particular purpose.</p>
            <p>b. Gold does not warrant that the website will be error-free, uninterrupted, or free of viruses or other harmful components.</p>

            <h2>5. Limitation of Liability</h2>
            <p>a. To the maximum extent permitted by law, Gold and its affiliates, directors, employees, agents, or licensors shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the website.</p>
            <p>b. This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if Gold has been advised of the possibility of such damages.</p>

            <h2>6. Modifications</h2>
            <p>a. Gold reserves the right to modify or discontinue, temporarily or permanently, the website or any part thereof with or without notice.</p>
            <p>b. We may also modify these Terms and Conditions at any time. It is your responsibility to review these Terms and Conditions periodically for any changes. Your continued use of the website after any modifications will constitute your acceptance of the revised Terms and Conditions.</p>

            <h2>7. Governing Law</h2>
            <p>a. These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Gold operates.</p>

            <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us through the provided channels on the Gold movie website.</p>
          </div>
        </Container>
    </header>
  )
}

export default Terms