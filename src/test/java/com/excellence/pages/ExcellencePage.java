package com.excellence.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ExcellencePage extends BasePage {

    @FindBy(xpath = "//ul[@class='nav navbar-nav navbar-right col-md-7 col-lg-7']/li/a[starts-with(@href,'https')]")
    public List<WebElement> navBar;
}
