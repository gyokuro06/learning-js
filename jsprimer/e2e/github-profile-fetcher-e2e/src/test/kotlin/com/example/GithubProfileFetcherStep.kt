package com.example

import com.codeborne.selenide.Condition.*
import com.codeborne.selenide.Selenide.`$`
import com.codeborne.selenide.Selenide.open
import com.thoughtworks.gauge.Step

class GithubProfileFetcherStep {

    @Step("GitHub Profile Fetcherを開く")
    fun openGithubProfileFetcher() {
        open("/")
    }

    @Step("ページタイトルに<pageTitle>が表示されていること")
    fun assertDisplayPageTitle(pageTitle: String) {
        `$`(".page-title").shouldHave(exactOwnText(pageTitle))
    }

    @Step("GitHub IDの入力フォームが表示されていること")
    fun assertDisplayGithubIdInputForm() {
        `$`("input").shouldBe(visible)
    }

    @Step("ボタン<text>が表示されていること")
    fun assertDisplayButton(text: String) {
        `$`("button").shouldBe(exactText(text))
    }
}
