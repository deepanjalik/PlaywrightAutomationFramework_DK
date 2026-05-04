class DashboardPage 
{

   constructor(page,expect)
   {
       this.page = page;
       this.expect = expect;

       //Locators

       this.pimMenu  = this.page.getByRole("link",{name: 'PIM'});  
       this.addBtn   = this.page.getByRole("button",{name: "Add"});  
       this.employeeFirstName = this.page.getByPlaceholder("First Name");
       this.employeeLastName = this.page.getByPlaceholder("Last Name");
       this.saveBtn = this.page.getByRole("button",{name: " Save "});

       this.employeeName = this.page.locator("//input[@placeholder='Type for hints...']").nth(0);
    //    this.employeeId = this.page.getByLabel("Employee Id");
    //    this.employeeStatus = this.page.locator("Employment Status").selectOption("Full-Time Permanent");
    //    this.include = this.page.locator("Include").selectOption("Current and Past Employees");
    //    this.supervisorName = this.page.getByLabel("Supervisor Name").locator("input");
        this.searchBtn = this.page.getByRole("button",{name: " Search "}); 

}

//Methods

async clickPIMMenu()
{
    await this.pimMenu.click();
}

async clickAddBtn()
{
    await this.addBtn.click();
}

async enterEmployeeDetails(firstname,lastname)
{
    await this.employeeFirstName.fill(firstname);
    await this.employeeLastName.fill(lastname);
}

async clickSaveBtn()
{
    await this.saveBtn.click();
}

async searchEmployee(employeeName)
{
    await this.employeeName.fill(employeeName);
}

async clickSearchBtn()
{
    await this.searchBtn.click();
}

}

module.exports = {DashboardPage};
