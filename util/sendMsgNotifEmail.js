const sendEmail = require('./sendEmail');

const sendMsgNotifEmail = (email, name, content) => {
  const subject = `[cornlet] ${name} has sent you a message!`;
  const isDev = process.env.NODE_ENV === 'development';
  const devHtml = `<div>Intended recipent: ${email}</div>`;
  const url = 'https://www.cornlet.com/profile/chat';
  const html = `
    <div>
      ${isDev && devHtml}
      <div>
        ${name} has sent you a message!
      </div>
      <br />
      <div>
        "${content}"
      </div>
      <br />
      <div style="font-weight:bold;">
        Reply to ${name} at <a href="${url}">${url}</a>
      </div>
      <br /><br />
      <div>
        THIS IS A COMPUTER GENERATED EMAIL. PLEASE DO NOT REPLY DIRECTLY TO THIS EMAIL.
      </div>
      <div style="color:white;">
        Tag: ${Math.random()}
      </div>
    </div>
  `;
  const to = isDev ? 'jj534@cornell.edu' : email;

  sendEmail(to, subject, html);
};

module.exports = sendMsgNotifEmail;
