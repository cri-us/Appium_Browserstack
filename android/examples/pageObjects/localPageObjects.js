class PageObjects {
    get appBtn() {return $('~ir.mhkz.loginandregister:id/username')}; //accesibility id 
    get userNameField() {return $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/username"]')}; //x path [@defineAttributeHere]
    get passwordField() {return $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/password"]')}; //x path [@defineAttributeHere]
    get loginBtn() {return $('//android.widget.Button[@resource-id="ir.mhkz.loginandregister:id/login"]')};
    get signUpBtn() {return $('//android.widget.Button[@resource-id="ir.mhkz.loginandregister:id/signUp"]')};
    get signUserName() {return $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_username"]')};
    get signPassWord() {return $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_password"]')};
    get signFirstName() {return $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_firstName"]')};
    get signLastName() {return $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_lastName"]')};
    get signEmail() {return $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_email"]')};
    get signConfrmEmail() {return $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_confirmemail"]')};
    get registerBtn() {return $('//android.widget.Button[@resource-id="ir.mhkz.loginandregister:id/reg_register"]')};
 
    

}
module.exports = new PageObjects();