#!/usr/bin/env node
import open from "open";

(async () => {
  const clientId = "86x9b3v7je99at";
  const redirectURI = "https%3A%2F%2Fwww.google.com%2F";

  await open(
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}&scope=w_member_social`
  );

  console.log("done");
})();
