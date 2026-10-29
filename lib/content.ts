// Typed module for now. A CMS would sit behind this same shape, the way watershed.com uses Sanity, so the page does not change when the source does.

export const profile = {
  name: "Catherine Taneyhill",
  email: "ctaneyhill@gmail.com",
  linkedin: "https://www.linkedin.com/in/kittycatbytes",
  github: "https://github.com/kittycatbytes",
  location: "New York, NY",
};

export const hero = {
  eyebrow: "Staff product engineer, full-stack",
  title: "A number someone will file, and act on.",
  lede: "I’m a senior software engineer. Thirteen years shipping production software, eight of them on Netflix’s TV and web player, through October 14, 2026. I want this role, in the New York office, with Thursday and Friday remote one week a month.",
};

export const why = {
  kicker: "Why Watershed",
  title: "The failure mode is the reason.",
  paragraphs: [
    "The posting reads as two possible teams: financial-institution workflows, or turning the data layer into something a climate lead can use. I am interested in both. Both are a data-definition problem with a product on top. If this is the financial-institutions team, I have already built for that user. The Federal Reserve Board used an application I owned the architecture for, on finance APIs, to make financial decisions.",
    "A wrong emissions number becomes a filing, a portfolio decision, or a target someone manages to. I have already done the unglamorous version of that problem, where a trusted number was wrong because the population was wrong.",
    "I also want to be closer to the customer than I was. About four hundred people, a real enterprise product, and the New York office. That is the shape I want.",
  ],
};

export const work = [
  {
    index: "01",
    kicker: "Product",
    title: "Cloud games, from inception through beta",
    body: [
      "I worked on cloud games on the TV player from inception through beta release. I designed the API layer with the lead feature architects, acting as the liaison across the TV client, game servers, smartphone-as-controller input, and the UI.",
      "The product had to feel like one thing across those surfaces. Architects owned intent. I owned the API other teams built against. We shipped it through beta.",
    ],
  },
  {
    index: "02",
    kicker: "Platform",
    title: "A release number that had to become true",
    body: [
      "Separately, I rebuilt how we ran the release and device platform. We were judging it by whether pipelines had succeeded, devices were up, and tests were passing, and those answers were often wrong.",
      "I turned that into a system that corrected false passes, separated flaky tests from real failures, aborted builds that had been superseded, and matched capacity to real demand, with telemetry we could actually run on. The point was a faster release with less risk, before a build reached canary.",
    ],
  },
];

export const fit = [
  {
    label: "Full-stack",
    text: "A product API other teams built against, the frontends I owned, and the release-platform work that made a reported number true.",
  },
  {
    label: "React and TypeScript",
    text: "I owned the React architecture for an internal canary tracker: build verified, placed in canary, canary verified. The player client is TypeScript.",
  },
  {
    label: "Financial decisions",
    text: "At Withum, 2014–2018, I owned the Angular architecture of the application the Federal Reserve Board used. More than forty finance APIs. The Board used it to decide.",
  },
  {
    label: "Audit-ready signals",
    text: "Inspection of pipeline success, device availability, and test pass was often wrong. Leadership managed to the corrected numbers, before a build reached canary.",
  },
  {
    label: "Starting from the user",
    text: "On games, the useful work was an API four surfaces could share. Inside the developer workflow, it was to stop spending devices on commits that had already been replaced.",
  },
  {
    label: "Day one",
    text: "I ship small pieces that are safe to turn on. Device availability, build validation, and the release-gating signals were timely and accurate before a build reached canary.",
  },
];

export const depthIntro =
  "The sections above are the story. These are the mechanism, for an engineer who wants the same work one level down.";

export const depth = [
  {
    title: "A scheduled stage counted as a pass",
    body: "Leadership read pass and fail from pipeline stage status. Async test stages report success when a test has only been scheduled, so the headline pass rate sat near 100 percent and could not tell you if a build was good.",
  },
  {
    title: "Pass rate moved to first-run results",
    body: "I rebuilt the signal from first-run results through the stats service. Retries came out. Known issues were split from real failures. Each team got its own view. A result:failed filter had been hiding the current build from anomaly detection whenever an in-test threshold had already thrown. Fixing that query is what made flake measurable.",
  },
  {
    title: "Device-wait charts overstated wait about threefold",
    body: "The charts were averaging retries. I re-pointed them at the population that was actually waiting.",
  },
  {
    title: "Superseded commits stopped taking devices",
    body: "Reference-app capacity was the long pole of pull-request time. Abort on the next push, so a build that had already been replaced stopped occupying devices.",
  },
  {
    title: "The case for demand-based scaling",
    body: "Device availability plus build and setup were about 35 percent of pull-request wall clock. An evening scale-down that looked like an autoscaling change was a cron, set against a scaling-group rotation that had failed. I used that evidence to make the case for demand-based managed scaling. The system did not adjust capacity on its own.",
  },
  {
    title: "What changed, before canary",
    body: "False passes were gone, dead work stopped burning devices, and device availability, build validation, and the release-gating signals were timely and accurate. Leadership managed to numbers that were real. Risk went down before a build reached canary.",
  },
  {
    title: "The frontends, and the games API",
    body: "The canary tracker was the React app I owned. Before that, the Federal Reserve Board app: Angular and RxJS, the same component model, more than forty REST endpoints, all of them finance APIs. The player client is TypeScript, with 454 merged commits from 2019 through 2026. Games stayed a separate body of work: at least 227 merged commits, the API designed with the feature architects, from inception through beta.",
  },
  {
    title: "How I read the product",
    body: "Measure is activity in, a factor attached, and a figure out. Report is a number a skeptic can trace. Act is what a company does with the figure. For a bank, the emissions that matter are mostly the companies it lends to or owns. PCAF is the standard for counting those financed emissions, with a data-quality score so a measured number stays distinct from an estimate. I have not implemented PCAF, and I have not built Watershed’s ingestion. Climate scientists would own the methodology. I would own the software that makes the number inspectable. The 2030 goal I would repeat is 500 megatonnes reduced or removed with customers. Emissions under management is a different figure. An agent that explains a number is only as good as the population and the factor behind it.",
  },
];

export const logistics = [
  "New York office, with Thursday and Friday remote one week a month.",
  "No visa sponsorship.",
  "I can start within two to three weeks of an offer.",
  "B.B.A., University of Miami Business School.",
];
