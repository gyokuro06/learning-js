import com.codeborne.selenide.Condition.*
import com.codeborne.selenide.Selenide.*
import com.thoughtworks.gauge.Step

class ToDoAppStep {

    @Step("ToDo Appを開く")
    fun openToDoApp() = open("/")

    @Step("タイトル<title>が表示されている")
    fun assertTitle(title: String) =
        assert(title().equals(title))

    @Step("ページタイトル<title>が表示されている")
    fun assertPageTitle(title: String) =
        `$`(".page-title").shouldHave(exactOwnText(title))

    @Step("ToDoアイテム入力欄が表示されている")
    fun assertToDoItemInput() =
        `$`(".todo-item-input").shouldBe(visible)

    @Step("ToDoアイテム入力欄にプレースホルダー<text>が表示されている")
    fun assertToDoItemInputPlaceholder(text: String) =
        `$`(".todo-item-input").shouldHave(attribute("placeholder", text))

    @Step("ToDoリストが存在している")
    fun assertToDoListExistence() =
        `$`(".todo-list").shouldBe(exist)
}
