import com.sksamuel.hoplite.ConfigLoaderBuilder
import com.sksamuel.hoplite.addResourceSource
import java.net.URL

val config = ConfigLoaderBuilder.default()
    .addResourceSource("uat.yaml")
    .build()
    .loadConfigOrThrow<Config>()

data class Config(
    val selenide: Selenide
)

data class Selenide(
    val baseUrl: URL,
    val headless: Boolean,
    val browser: String
)
