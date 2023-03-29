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

    @Step("ボタン<text>が表示されていること",
        "ボタン<text>が表示されている")
    fun assertDisplayButton(text: String) {
        `$`("button").shouldBe(exactText(text))
    }

    @Step("ボタン<text>をクリックする")
    fun clickButton(text: String) {
        `$`("button").shouldBe(exactText(text)).click()
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
}
