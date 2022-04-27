var path = require('path');
var assert = require('assert');
const { isMainThread } = require('worker_threads');
const signIn = require('../../pageObjects/localPageObjects');

  describe('Sign In', () => {
    
      it('Verify that the text entry username & password fields are editable', async () => {
      
        //signIn.userNameField.clearValue();
        let input = await $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/username"]')
        await input.addValue("TestUser123");
        // await signIn.userNameField.addValue("TestUser123");
        //signIn.passwordField.clearValue();
        let passwordField = await $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/password"]')
        await passwordField.addValue("supersecretpassword123");
        //await signIn.passwordField.addValue("supersecretpassword123");
        let loginBtn = await $('//android.widget.Button[@resource-id="ir.mhkz.loginandregister:id/login"]')
        await loginBtn.click();
        await input.clearValue();
        await passwordField.clearValue();
        
    })


})

  describe('Sign up', () => {
    it('Verify that the text entry dependencies on sign up page and fields are editable', async () => {
      let signUpBtn = await $('//android.widget.Button[@resource-id="ir.mhkz.loginandregister:id/signUp"]')
        await signUpBtn.click();
        let signUserName = await $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_username"]')
          await signUserName.addValue("kharkiv01")
          let signPassWord = await $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_password"]')
            await signPassWord.addValue("pushkinska123")
              let signFirstName = await $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_firstName"]')
                await signFirstName.addValue("Slava")
                  let signLastName = await $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_lastName"]')
                    await signLastName.addValue("Ukraina")
                      let signEmail = await $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_email"]')
                        await signEmail.addValue("heroyamslava@ukraine.org")
                          let signConfrmEmail = await $('//android.widget.EditText[@resource-id="ir.mhkz.loginandregister:id/reg_confirmemail"]')
                            await signConfrmEmail.addValue("heroyamslava@ukraine.org")
                              let registerBtn = await $('//android.widget.Button[@resource-id="ir.mhkz.loginandregister:id/reg_register"]')
                                await registerBtn.click();

    })
  })



