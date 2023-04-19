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
        `$`(".id-input-container input").shouldBe(visible)
    }

    @Step("GitHub IDの入力フォームにプレースホルダーとして<text>が表示されていること")
    fun assertPlaceholderInGithubIdInputForm(text: String) {
        `$`(".id-input-container input").shouldHave(attribute("placeholder", text))
    }

    @Step("GitHub ID<id>を入力する")
    fun inputGithubId(id: String) {
        `$`(".id-input-container input").value = id
    }

    @Step("ボタン<text>が表示されていること",
        "ボタン<text>が表示されている")
    fun assertDisplayButton(text: String) {
        `$`("button").shouldBe(exactText(text))
    }

    @Step("Enterキーを押す")
    fun pushEnterKey() {
        `$`(".id-input-container input").pressEnter()
    }

    @Step("ボタン<text>をクリックする")
    fun clickButton(text: String) {
        `$`("button").shouldBe(exactText(text)).click()
    }

    @Step("プロフィールでタイトル<title>が表示されている")
    fun assertDisplayProfileTitle(title: String) {
        `$`(".profile-container .title").shouldHave(exactOwnText(title))
    }

    @Step("プロフィールでユーザ名<name>が表示されている")
    fun assertDisplayUsernameInProfile(name: String) {
        `$`(".profile-container .user-name").shouldHave(ownText(name))
    }

    @Step("プロフィールでアバターアイコンが表示されている")
    fun assertDisplayAvatarIcon() {
        `$`(".profile-container .avatar-icon").shouldBe(visible)
    }

    @Step("プロフィールでユーザホームURLが表示されている")
    fun assertDisplayRepositoryUrl() {
        `$`(".profile-container .user-home-url").shouldBe(visible)
    }

    @Step("<message>というエラーメッセージが表示されていること")
    fun assertErrorMessage(message: String) {
        `$`(".id-input-container .error-message").shouldHave(exactOwnText(message))
    }

    @Step("プロフィールが表示されていること")
    fun assertDisplayProfile() {
        `$`(".profile-container").shouldBe(visible)
    }

    @Step("プロフィールが表示されていない")
    fun assertProfileInvisibility() {
        `$`(".profile-container").shouldNotBe(visible)
    }
}
