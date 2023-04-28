import com.codeborne.selenide.Configuration
import com.thoughtworks.gauge.BeforeSuite

class SetupAndTeardown {

    @BeforeSuite
    fun setupSuite() {
        setupSelenide()
    }

    private fun setupSelenide() {
        Configuration.baseUrl = config.selenide.baseUrl
        Configuration.browser = config.selenide.browser
        Configuration.headless = config.selenide.headless
    }
}
