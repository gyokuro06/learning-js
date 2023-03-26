package com.example

import com.thoughtworks.gauge.Step

class TestStep {

    @Step("テストステップ")
    fun test() {
        println("test executed.")
    }
}
