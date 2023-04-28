import com.codeborne.selenide.Condition.exactOwnText
import com.codeborne.selenide.Selenide.*
import com.thoughtworks.gauge.Step

class ToDoAppStep {

    @Step("ToDo Appを開く")
    fun openToDoApp() = open()

    @Step("タイトル<title>が表示されている")
    fun assertTitle(title: String) =
        assert(title().equals(title))

    @Step("ページタイトル<title>が表示されている")
    fun assertPageTitle(title: String) =
        `$`(".page-title").shouldHave(exactOwnText(title))
}
