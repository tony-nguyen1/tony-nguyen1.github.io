package fr.Printempsdasie;

//import org.openqa.selenium.By;
//import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.support.ui.WebDriverWait;
//import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfElementLocated;
//import java.time.Duration;

import org.junit.Assert;
import org.junit.Test;

public class Main {

    public static void main(String[] args) {
        testLength();
    }

    @Test
    public static void testLength() {

      String url, title;
      url = "";
      title = "";

      WebDriver driver = new FirefoxDriver();
      //WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10).getSeconds());
      try {
          driver.get("https://printempsdasie.fr");
          System.out.println("Hi, I'm here !\n");
          url = driver.getCurrentUrl();
          title = driver.getTitle();

          System.out.println(url);
          System.out.println(title);
          /*WebElement element = driver.findElement(By.tagName("p"));
          System.out.println(element.getText());*/

          /*WebElement firstResult = wait.until(presenceOfElementLocated(By.cssSelector("h2")));
          System.out.println(firstResult.getAttribute("textContent"));*/
      } finally {
          driver.quit();
      }

      Assert.assertEquals("https://printempsdasie.fr/", url);
      Assert.assertEquals("Printemps d'Asie", title);
    }
}
