package com.excellence.pages;

import com.excellence.utulities.Driver;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {

    public BasePage () {
        PageFactory.initElements(Driver.get(), this);
    }


}
