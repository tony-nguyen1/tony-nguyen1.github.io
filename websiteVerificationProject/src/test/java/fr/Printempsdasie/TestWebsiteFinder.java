package fr.Printempsdasie;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfElementLocated;
import java.time.Duration;
import org.openqa.selenium.By.ByLinkText;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.DisplayName;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TestWebsiteFinder {
  private static WebDriver driver;
  private static WebDriverWait wait;

  @BeforeAll
  public static void initAll(){
    System.out.println("Initiating all");

    driver = new FirefoxDriver();
    wait = new WebDriverWait(driver, 5);

    try {
      System.out.println("Accessing the website");
      driver.get("https://tony-nguyen1.github.io/");
    } catch(Exception e) {
      System.out.println(e.getMessage());
    }
  }

    @Test
    public void testVerifUrlAndTitle() {
      String url, title;
      url = "";
      title = "";

      title = driver.getTitle();
      url = driver.getCurrentUrl();

      System.out.println(title);
      System.out.println(url);

      assertTrue(url.equals("https://tony-nguyen1.github.io/"));
      assertTrue(title.equals("Printemps d'Asie : Restaurant asiatique"));
      assertTrue(true);
    }
    @Test
    @DisplayName("Verifying I get the first title corectly")
    public void testGetText() {
      String result;
      result = "";

      WebElement title = driver.findElement(By.tagName("h2"));//renvoie 1 truc, le 1er.
      result = title.getText();
      System.out.println(result);

      assertTrue(result.equals("La Carte"));
    }

    @AfterAll
    static void tearDownAll() {
      driver.quit();
    }
}
