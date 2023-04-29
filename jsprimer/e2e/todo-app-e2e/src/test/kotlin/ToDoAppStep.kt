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

    @Step("ToDoアイテム数が<itemNum>個で表示されている")
    fun assertToDoItemNum(itemNum: Int) =
        "ToDoアイテム数: $itemNum"
            .let { `$`(".todo-count").shouldHave(exactOwnText(it)) }

    @Step("ToDoアイテム入力欄に<item>を入力する")
    fun inputToDoItem(item: String) =
        `$`(".todo-item-input").shouldBe(visible).setValue(item)

    @Step("Enterキーを入力する")
    fun pushEnter() =
        `$`(".todo-item-input").shouldBe(visible).pressEnter()

    @Step("ToDoリストの<row>番目に<item>のToDoアイテムが表示されていること")
    fun assertToDoListItem(row: Int, item: String) =
        `$$`(".todo-list li")[row - 1].shouldHave(exactText(item))

    @Step("ToDoリストの<row>番目の項目のチェックボックスをクリックする")
    fun clickNthToDoItemCheckbox(row: Int) =
        `$$`(".todo-list li")[row - 1].click()

    @Step("ToDoリストの<row>番目の項目が完了状態である")
    fun assertNthToDoItemStatusCompleted(row: Int) =
        `$$`(".todo-list input[type='checkbox']")[row - 1].shouldBe(checked)

    @Step("ToDoリストの<row>番目の項目の削除ボタンをクリックする")
    fun clickToDoItemDeleteButton(row: Int) =
        `$$`(".todo-list .delete-button")[row - 1].click()
}
