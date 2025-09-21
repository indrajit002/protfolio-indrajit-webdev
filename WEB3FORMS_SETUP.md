# Web3Forms Setup Instructions

## How to Set Up Web3Forms for Your Contact Form

### Step 1: Get Your Access Key
1. Go to [Web3Forms.com](https://web3forms.com)
2. Sign up for a free account
3. Create a new form and copy your access key

### Step 2: Update Your HTML
1. Open `index.html`
2. Find the line: `<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key from Step 1

### Step 3: Update Redirect URL (Optional)
1. Find the line: `<input type="hidden" name="redirect" value="https://yourdomain.com/thank-you">`
2. Replace `https://yourdomain.com/thank-you` with your actual domain and thank you page URL
3. Or remove this line entirely to use the default success page

### Step 4: Test Your Form
1. Open your website
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email for the form submission

## Features Added:
- ✅ Web3Forms integration for contact form submissions
- ✅ Separate CV download button (no longer part of form submission)
- ✅ Proper form validation with required fields
- ✅ Styled submit button with hover effects
- ✅ Email notifications for form submissions

## Notes:
- The form will send emails to the email address associated with your Web3Forms account
- All form submissions are free up to 250 per month
- No backend server required - Web3Forms handles everything
