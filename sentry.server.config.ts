// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://97acbe4ee93a17a184b3bf32e70f2a95@o4508991570837504.ingest.us.sentry.io/4508991577849856",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
