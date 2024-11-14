import emailjs from '@emailjs/browser';

emailjs.init("YOUR_PUBLIC_KEY");

export const sendEmail = async (templateParams) => {
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams
    );
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};