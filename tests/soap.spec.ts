import { test, expect } from '@playwright/test'
import { UserModel } from './fixtures/soap/user.model'
import { LoginPage } from './support/pages/soap/login'
import data from './fixtures/soap/users.json'

let loginPage : LoginPage

test.beforeEach(({ page }) =>{
    loginPage = new LoginPage(page)
})

test.describe('Login', ()=> {
    test('successful login', async ()=>{
        const user = data.sucess as UserModel

        await loginPage.go()
        await loginPage.login(user)
        await loginPage.shouldHaveText("Thanks, I'm going in!")
    })

    test('failure login', async ()=>{
        const user = data.fail as UserModel

        await loginPage.go()
        await loginPage.login(user)
        await loginPage.shouldHaveText("Username or password is incorrect. If you think this is a mistake please contact your provider.")
    })

})