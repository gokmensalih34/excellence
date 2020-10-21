package com.excellence.stepdefinitions;

import com.excellence.pages.ExcellencePage;
import com.excellence.utulities.BrowserUtils;
import com.excellence.utulities.ConfigurationReader;
import com.excellence.utulities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Wait;

import java.util.List;

public class ExcellenceStepDefinitions {

    @Given("the user access HomePage")
    public void the_user_access_HomePage() {

        Driver.get().get(ConfigurationReader.get("url"));
    }

    @Then("the page title is {string}")
    public void the_page_title_is(String expectedTitle) {

        String actualTitle = Driver.get().getTitle();

        System.out.println("actualTitle = " + actualTitle);

        BrowserUtils.waitFor(3);

        Assert.assertEquals("Verify Title", expectedTitle,actualTitle);

    }


    @Then("the tabs like following")
    public void the_tabs_like_following(List<String> expectedTabs) {

        List<String> actualTabs = BrowserUtils.getElementsText(new ExcellencePage().navBar);

        System.out.println("actualTabs = " + actualTabs);
        System.out.println("expectedTabs = " + expectedTabs);

        BrowserUtils.waitFor(3);

        Assert.assertEquals("Verify Tabs", expectedTabs, actualTabs);

    }








}
