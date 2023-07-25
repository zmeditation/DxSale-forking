import React from 'react';
import { Card, Container, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    Card: {
        margin: '40px 10px 10px 10px',
        textAlign: 'left',
        paddingBottom: '30px',
    },
    Container: {
        padding: '7px'
    },
    title: {
        textAlign: 'center',
        marginBottom: '40px'
    }
}));

export const PrivacyPolicy = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.Container}>
                <Card className={classes.Card}>
                    <Grid container>
                        <Grid item xs={2} />
                        <Grid item xs={8}>
                            <div className={classes.title}>
                                <h2>Privacy Policy</h2>
                            </div>
                            <p className={'fs8'}>Herein is provided the privacy policy of DxSale (owner and operator of DxSale.App) This Privacy Policy describes how DxSale.App will manage end user’s personal information which we collect as a result of your use of DxSale.App, your use of our websites located at <span className={'textBlue'}>https://DxSale.App</span> and any pages or websites under the 'DxSale' brand including any tablet or mobile phone applications that are owned and/or operated by us or whenever we otherwise deal with you. DxSale is committed to ensuring that the personal information we collect about you is protected and is used, stored and disclosed in accordance with the Privacy Act and this Privacy Policy.</p>
                            <p className={'subtitle'}>Website Use</p>
                            <p className={'fs8'}>In using the website, you agree to be bound by the terms of this Privacy Policy. DxSale.App may review the Privacy Policy periodically and reserves the right to change the Privacy Policy at any time at its discretion by posting such changes on the website. Changes will be effective immediately when posted on the website. The end users’ continued use of the website following posting will constitute your acceptance of those changes. This Privacy Policy will not apply to websites which are linked to the website and over which DxSale.App has no control.</p>
                            <p className={'subtitle'}>Personal Information</p>
                            <p className={'fs8'}>The kinds of Personal Information that DxSale.App may collect from you is: Name Email address Personally submitted preferences Location data IP address</p>
                            <p className={'subtitle'}>Collection Purposes</p>
                            <p className={'fs8'}>DxSale.App will collect your Personal Information only by lawful and fair means and not in an intrusive way to operate its Service, and to provide you with the following information: If you wish to subscribe to DxSale.App's weekly newsletter or other marketing communications. To update you on technical progress of DxSale. To provide services to you as a User. To identify you as a User for security purposes and to comply with our legal obligations. To upgrade and enhance your experience within the website or over the telephone, or to tailor or develop information, services or products to suit your needs which may include market research and conducting promotions. To tell you about our products or services that we think may be of interest to you by communicating with you via email, SMS or telephone. To create aggregate data about Users through demographic profiling, statistical analysis of the database to provide to potential and existing DxSale holders, and to allow for more efficient operation of DxSale.App’s business. To comply with DxSale.App’s legal and statutory obligations. For taking appropriate action if DxSale.App has reason to suspect that unlawful activity or misconduct of a serious nature has been, is being or may be engaged in that relates to our functions and activities. To establish, exercise or defend any legal claims. Manage job applications. You may choose to deal with us on an anonymous basis or to use a pseudonym unless it is not practicable for us to deal with individuals who we cannot identify or we are required by law to only deal with identified individuals. Also, if you do not provide DxSale.App with the Personal Information we request, we may be unable to process your request to become a User, provide you with our services or respond to your enquiry or complaint. Examples of Personal Information that may be collected by DxSale.App include your name, email address, telephone numbers, your date of birth, other verification information such as your Service usage activities. By becoming a User or otherwise choosing to provide DxSale.App with Personal Information you consent to DxSale.App collecting, using and disclosing your Personal Information for the above purposes.</p>
                            <p className={'subtitle'}>Direct Marketing and Opting Out</p>
                            <p className={'fs8'}>Occasionally we may use your Personal Information to inform you about DxSale.App's products or services or about promotional activities which DxSale.App believes may be of interest or of benefit to you. We may do this via email, SMS, telephone or mail. If you no longer wish to receive marketing or promotional material from DxSale.App at all or in any particular form, you may contact us at any time by email to support@DxSale.Network with your request with which we will comply as soon as is practical. From time to time we may contact you in relation to the management and administration of your DxSale.App account. These communications can be via any of the modes of contact recorded when registering as a User. Such communication does not affect your opt-in or opt-out status for direct marketing communications.</p>
                            <p className={'subtitle'}>Management of your Personal Information</p>
                            <p className={'fs8'}>DxSale.App will take all reasonable steps to ensure that the Personal Information which it collects, uses or discloses is correct and is stored in a secure environment which is accessed only by authorised persons. DxSale.App will destroy or permanently de-identify the Personal Information we hold when it is no longer required for any purpose permitted under the APPs including our legal or operational obligations.</p>
                            <p className={'subtitle'}>Security of Personal Information</p>
                            <p className={'fs8'}>You acknowledge that no data transmission over the Internet is totally secure. Accordingly, DxSale.App does not warrant the security of any information which you transmit to it. Any information which you transmit to DxSale.App is transmitted at your own risk. However, once DxSale.App receives your transmission, DxSale.App will take reasonable steps to protect your Personal Information from misuse, loss and unauthorised access, modification and disclosure including by using password protected systems and databases and Secure Socket Layer (SSL) technology. DxSale.App’s employees, agents and contractors are required to maintain the confidentiality of Users’ Personal Information and trading behaviour. Information posted on bulletin boards or communicated within a social media environment (for example, Facebook, Twitter, Chat Rooms) becomes public information. DxSale.App cannot guarantee the security of this type of disclosed information. We take seriously the responsibility to exclude children from access to our services. We will not accept their information for the purposes of accessing or using the Service. It is however, ultimately the responsibility of parents or guardians to monitor their children’s Internet activities including where appropriate by using Internet screening software. Remember to always log out of your account when you have completed your time on the website. This is particularly important if you share a computer with another person. You are responsible for the security of and access to your own computer, mobile device or any other handset used to access the website. Ultimately, you are solely responsible for maintaining the secrecy of your username, password and any account information. Please be careful whenever using the Internet and our website.</p>
                            <p className={'subtitle'}>Access to Personal Information</p>
                            <p className={'fs8'}>You may access the Personal Information collected by DxSale.App by contacting us at support@DxSale.Network. We will give you access to your Personal Information in the manner requested if that is possible and within a reasonable period. If we refuse your request or cannot give you access in the manner you have requested, we will do what we can to meet your requirements by other means. We may not be required to give you access to your Personal Information in certain circumstances which are set out in the APPs including where it may have an unreasonable impact on other individual's privacy. If we refuse access for such reasons, we will advise you in writing of the refusal and our reasons and the complaint mechanisms available to you.</p>
                            <p className={'subtitle'}>Use of Website</p>
                            <p className={'fs8'}>By using this website, you agree to DxSale.App collecting and processing your Personal Information on the basis explained in this Privacy Policy. Contact Details If you have any queries, requests for access or correction or complaints relating to the handling of your personal information, please contact us by email. Email: support@DxSale.Network</p>
                            <p className={'subtitle'}>Updates to this Privacy Policy</p>
                            <p className={'fs8'}>DxSale.App may review, change and update this Privacy Policy to reflect our current practices and obligations. We will publish our current Privacy Policy on our website at www.DxSale.App and the changes will take effect at the time of publishing. You should review this privacy policy regularly and remain familiar with its terms.</p>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </Card>
            </Container >
        </React.Fragment >
    );
}