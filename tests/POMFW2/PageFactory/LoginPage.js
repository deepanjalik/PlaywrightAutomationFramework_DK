class LoginPage
{
   constructor(page,expect)
   {
      this.page = page;
      this.expect = expect;

      //Locators

      this.username = this.page.getByPlaceholder("Username");
      this.password = this.page.getByPlaceholder("Password");
      this.loginBtn = this.page.getByRole("button",{name: " Login "});

   }

//Methods


async openUrl()
{
   await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
}



async enterUserLoginCredentials(username,password)
{
     await this.username.fill(username);
     await this.password.fill(password);
}

async clickLoginBtn()
{
   await this.loginBtn.click();
}
}

module.exports = {LoginPage};