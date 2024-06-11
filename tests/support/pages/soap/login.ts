import { Page, expect, Locator } from '@playwright/test'
import { UserModel } from '../../../fixtures/soap/user.model'

export class LoginPage {
    readonly page: Page
    readonly inputUsername: Locator
    readonly inputPassword: Locator
    readonly btnLogin: Locator

    constructor(page: Page) {
        this.page = page
        this.inputUsername = page.getByPlaceholder("Username")
        this.inputPassword = page.getByPlaceholder("Password")
        this.btnLogin = page.getByText("Login")
    }

    async go() {
        await this.page.goto("/")
    }

    async login(user: UserModel) {
        await this.inputUsername.fill(user.username)
        await this.inputPassword.fill(user.password)
        await this.btnLogin.click()
    }

    async shouldHaveText(text: string) {
        const target = this.page.getByText(text)
        await expect(target).toBeVisible
    }

}