$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Excellence.feature");
formatter.feature({
  "name": "Excellence Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user access HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.excellence.stepdefinitions.ExcellenceStepDefinitions.the_user_access_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can access Excellence HomePage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the page title is \"Excellence AG | German Engineerings\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.excellence.stepdefinitions.ExcellenceStepDefinitions.the_page_title_is(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Verify Title expected:\u003c...| German Engineering[s]\u003e but was:\u003c...| German Engineering[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat com.excellence.stepdefinitions.ExcellenceStepDefinitions.the_page_title_is(ExcellenceStepDefinitions.java:33)\n\tat ✽.the page title is \"Excellence AG | German Engineerings\"(file:///Users/sgok/IdeaProjects/excellence/src/test/resources/features/Excellence.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user access HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.excellence.stepdefinitions.ExcellenceStepDefinitions.the_user_access_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can see the Tabs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the tabs like following",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.excellence.stepdefinitions.ExcellenceStepDefinitions.the_tabs_like_following(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});