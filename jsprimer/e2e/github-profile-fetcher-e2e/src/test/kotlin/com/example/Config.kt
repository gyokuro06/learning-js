package com.example

import com.sksamuel.hoplite.ConfigLoaderBuilder
import com.sksamuel.hoplite.addResourceSource

val config = ConfigLoaderBuilder.default()
    .addResourceSource("/uat.yaml")
    .build()
    .loadConfigOrThrow<Config>()

data class Config(val selenide: Selenide)
data class Selenide(
    val browser: String,
    val headless: Boolean,
    val baseUrl: String
)
