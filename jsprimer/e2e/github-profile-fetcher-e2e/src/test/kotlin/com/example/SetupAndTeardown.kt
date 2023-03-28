package com.example

import com.codeborne.selenide.Configuration
import com.thoughtworks.gauge.BeforeSuite

class SetupAndTeardown {

    @BeforeSuite
    fun setupSuite() {
        setupSelenide()
    }

    fun setupSelenide() {
        Configuration.browser = config.selenide.browser
        Configuration.headless = config.selenide.headless
        Configuration.baseUrl = config.selenide.baseUrl
    }
}
