export const otpEmailTemplate: (otpCode: string, name: string) => string = (
  otpCode,
  name
) => {
  return `
  <body style="margin: 0; padding: 0; box-sizing: border-box;">
    <div
      style="background-color: #111827; padding: 1rem; color: #e5e7eb; width: 100%; max-width: 800px; margin-inline: auto;">
      <h1 style="font-size: 1.5rem;">Hi there, ${name}</h1>
      <p>Please use OTP code below to verify your email address.</p>
      <div
        style="width: 100%; max-width: 200px; border-radius: 10px; background-color: #f59e0b; color: #111827; padding: 0.5rem; font-size: 2rem; margin-inline: auto; line-height: 0;">
        <p style="text-align: center;">${otpCode}</p>
      </div>
      <div style="border-radius: 5px; background-color: #b91c1c; padding: 10px; margin-top: 0.5rem;">
        Attention: Please do not share this code with anyone else!
      </div>
    </div>
  </body>
  `;
};

export const wellcomeEmailTemplate: (name: string) => string = (name) => {
  return `
  <body style="margin: 0; padding: 0; box-sizing: border-box;">
    <div
      style="background-color: #111827; padding: 1rem; color: #e5e7eb; width: 100%; max-width: 800px; margin-inline: auto;">
      <h1 style="font-size: 1.5rem;">Wellcome, ${name}</h1>
      <p>Thank you for your registration. Wellcome to Mega-Toys family. ❤️✌️😎</p>
    </div>
  </body>
  `
}
