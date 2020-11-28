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

public class WebsiteFinder {
  private WebDriver driver;
  private WebDriverWait wait;

  public WebsiteFinder() {
    this.driver = new FirefoxDriver();
    this.wait = new WebDriverWait(this.driver, 5);
  }

  public String getWebsite(){
    String url, title;
    url = "";
    title = "";

    try {
      driver.get("https://tony-nguyen1.github.io/");
      title = driver.getTitle();
      url = driver.getCurrentUrl();
    } finally {
      driver.quit();
    }
    return url;
  }


  public static String getText(){
    WebDriver aDriver = new FirefoxDriver();
    WebDriverWait wait = new WebDriverWait(aDriver, 5);
    String result;
    result = "";

    try {
      aDriver.get("https://tony-nguyen1.github.io/");
      WebElement title = aDriver.findElement(By.tagName("h2"));//renvoie 1 truc, le 1er.
      result = title.getText();
      System.out.println(result);
    } finally {
      aDriver.quit();
    }
    return result;
  }
}
