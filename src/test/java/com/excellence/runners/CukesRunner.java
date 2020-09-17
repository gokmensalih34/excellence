package com.excellence.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports" },
        features = "src/test/resources/features/",
        glue = "com/excellence/stepdefinitions",
        dryRun = false,
        tags = "@wip"
)

public class CukesRunner {
}